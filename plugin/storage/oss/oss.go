package oss

import (
	"context"
	"fmt"
	"io"
	"strings"
	"time"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
	"github.com/pkg/errors"

	storepb "github.com/usememos/memos/proto/gen/store"
)

// Client is the OSS storage client.
type Client struct {
	Client *oss.Client
	Bucket *oss.Bucket
	Config *storepb.StorageOSSConfig
}

// NewClient creates a new OSS client.
func NewClient(ctx context.Context, ossConfig *storepb.StorageOSSConfig) (*Client, error) {
	if ossConfig == nil {
		return nil, errors.New("oss config is nil")
	}

	// Build endpoint URL
	endpoint := ossConfig.Endpoint
	if endpoint == "" {
		return nil, errors.New("oss endpoint is empty")
	}

	// OSS SDK expects endpoint without protocol prefix
	// e.g., "oss-cn-hangzhou.aliyuncs.com"
	// Remove any protocol prefix if user accidentally provided one
	endpoint = strings.TrimPrefix(endpoint, "https://")
	endpoint = strings.TrimPrefix(endpoint, "http://")

	// Create OSS client
	// The SDK will use HTTPS by default
	client, err := oss.New(endpoint, ossConfig.AccessKeyId, ossConfig.AccessKeySecret)
	if err != nil {
		return nil, errors.Wrap(err, "failed to create oss client")
	}

	// Get bucket
	if ossConfig.Bucket == "" {
		return nil, errors.New("oss bucket is empty")
	}
	bucket, err := client.Bucket(ossConfig.Bucket)
	if err != nil {
		return nil, errors.Wrap(err, "failed to get bucket")
	}

	return &Client{
		Client: client,
		Bucket: bucket,
		Config: ossConfig,
	}, nil
}

// UploadObject uploads an object to OSS.
func (c *Client) UploadObject(ctx context.Context, key string, fileType string, content io.Reader) (string, error) {
	if key == "" {
		return "", errors.New("object key is empty")
	}

	// Upload file with Content-Type
	options := []oss.Option{
		oss.ContentType(fileType),
	}

	err := c.Bucket.PutObject(key, content, options...)
	if err != nil {
		return "", errors.Wrap(err, "failed to upload object")
	}

	return key, nil
}

// PresignGetObject generates a presigned URL for OSS object.
func (c *Client) PresignGetObject(ctx context.Context, key string) (string, error) {
	if key == "" {
		return "", errors.New("object key is empty")
	}

	// If using custom domain, construct URL with custom domain
	if c.Config.UseCustomDomain && c.Config.CustomDomain != "" {
		// For custom domain, we still need to sign the URL
		// But use the custom domain in the final URL
		_ = fmt.Sprintf("https://%s/%s", c.Config.CustomDomain, key)
		// Note: For production, you may need to implement custom domain signing
		// For now, we'll use the standard presigned URL
		// TODO: Implement custom domain presigned URL if needed
	}

	// Generate presigned URL with 5 days expiration (same as S3)
	// Reference: Aliyun OSS supports expiration up to 7 days
	expirationSeconds := int64(5 * 24 * time.Hour / time.Second)
	signedURL, err := c.Bucket.SignURL(key, oss.HTTPGet, expirationSeconds)
	if err != nil {
		return "", errors.Wrap(err, "failed to presign get object")
	}

	return signedURL, nil
}

// DeleteObject deletes an object in OSS.
func (c *Client) DeleteObject(ctx context.Context, key string) error {
	if key == "" {
		return errors.New("object key is empty")
	}

	err := c.Bucket.DeleteObject(key)
	if err != nil {
		return errors.Wrap(err, "failed to delete object")
	}

	return nil
}
