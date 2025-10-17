package osspresign

import (
	"context"
	"log/slog"
	"time"

	"google.golang.org/protobuf/types/known/timestamppb"

	osstorage "github.com/usememos/memos/plugin/storage/oss"
	storepb "github.com/usememos/memos/proto/gen/store"
	"github.com/usememos/memos/store"
)

type Runner struct {
	Store *store.Store
}

func NewRunner(store *store.Store) *Runner {
	return &Runner{
		Store: store,
	}
}

// Schedule runner every 12 hours.
const runnerInterval = time.Hour * 12

func (r *Runner) Run(ctx context.Context) {
	ticker := time.NewTicker(runnerInterval)
	defer ticker.Stop()

	for {
		select {
		case <-ticker.C:
			r.RunOnce(ctx)
		case <-ctx.Done():
			return
		}
	}
}

func (r *Runner) RunOnce(ctx context.Context) {
	r.CheckAndPresign(ctx)
}

func (r *Runner) CheckAndPresign(ctx context.Context) {
	workspaceStorageSetting, err := r.Store.GetWorkspaceStorageSetting(ctx)
	if err != nil {
		return
	}

	ossStorageType := storepb.AttachmentStorageType(4) // ALIYUN_OSS = 4
	// Limit attachments to a reasonable batch size
	const batchSize = 100
	offset := 0

	for {
		limit := batchSize
		attachments, err := r.Store.ListAttachments(ctx, &store.FindAttachment{
			GetBlob:     false,
			StorageType: &ossStorageType,
			Limit:       &limit,
			Offset:      &offset,
		})
		if err != nil {
			slog.Error("Failed to list OSS attachments for presigning", "error", err)
			return
		}

		// Break if no more attachments
		if len(attachments) == 0 {
			break
		}

		// Process batch of attachments
		presignCount := 0
		for _, attachment := range attachments {
			ossObjectPayload := attachment.Payload.GetOssObject()
			if ossObjectPayload == nil {
				continue
			}

			if ossObjectPayload.LastPresignedTime != nil {
				// Skip if the presigned URL is still valid for the next 4 days.
				// The expiration time is set to 5 days.
				if time.Now().Before(ossObjectPayload.LastPresignedTime.AsTime().Add(4 * 24 * time.Hour)) {
					continue
				}
			}

			ossConfig := workspaceStorageSetting.GetOssConfig()
			if ossObjectPayload.OssConfig != nil {
				ossConfig = ossObjectPayload.OssConfig
			}
			if ossConfig == nil {
				slog.Error("OSS config is not found")
				continue
			}

			ossClient, err := osstorage.NewClient(ctx, ossConfig)
			if err != nil {
				slog.Error("Failed to create OSS client", "error", err)
				continue
			}

			presignURL, err := ossClient.PresignGetObject(ctx, ossObjectPayload.Key)
			if err != nil {
				slog.Error("Failed to presign OSS URL", "error", err, "attachmentID", attachment.ID)
				continue
			}

			ossObjectPayload.OssConfig = ossConfig
			ossObjectPayload.LastPresignedTime = timestamppb.New(time.Now())
			if err := r.Store.UpdateAttachment(ctx, &store.UpdateAttachment{
				ID:        attachment.ID,
				Reference: &presignURL,
				Payload: &storepb.AttachmentPayload{
					Payload: &storepb.AttachmentPayload_OssObject{
						OssObject: ossObjectPayload,
					},
				},
			}); err != nil {
				slog.Error("Failed to update OSS attachment", "error", err, "attachmentID", attachment.ID)
				continue
			}
			presignCount++
		}

		slog.Info("Presigned batch of OSS attachments", "batchSize", len(attachments), "presigned", presignCount)

		// Move to next batch
		offset += len(attachments)
	}
}
