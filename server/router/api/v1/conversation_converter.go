package v1

import (
	"fmt"
	"time"

	"google.golang.org/protobuf/types/known/timestamppb"

	apiv1pb "github.com/usememos/memos/proto/gen/api/v1"
	"github.com/usememos/memos/store"
)

// convertConversationFromStore converts store.Conversation to proto Conversation.
func convertConversationFromStore(conversation *store.Conversation) *apiv1pb.Conversation {
	return &apiv1pb.Conversation{
		Uid:          fmt.Sprintf("conversations/%s", conversation.UID),
		Title:        conversation.Title,
		CreatorId:    conversation.CreatorID,
		MessageCount: conversation.MessageCount,
		LastMessageAt: func() *timestamppb.Timestamp {
			if conversation.LastMessageAt != nil {
				return timestamppb.New(time.Unix(*conversation.LastMessageAt, 0))
			}
			return nil
		}(),
		CreateTime: timestamppb.New(time.Unix(conversation.CreatedTs, 0)),
		UpdateTime: timestamppb.New(time.Unix(conversation.UpdatedTs, 0)),
	}
}

// convertMessageFromStore converts store.Message to proto Message.
func convertMessageFromStore(message *store.Message, attachments []*apiv1pb.Attachment) *apiv1pb.Message {
	return &apiv1pb.Message{
		Uid:          fmt.Sprintf("messages/%s", message.UID),
		Conversation: fmt.Sprintf("conversations/%d", message.ConversationID),
		Role:         message.Role,
		Content:      message.Content,
		Attachments:  attachments,
		CreateTime:   timestamppb.New(time.Unix(message.CreatedTs, 0)),
	}
}
