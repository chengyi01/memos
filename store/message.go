package store

import (
	"context"
)

type Message struct {
	ID             int32
	UID            string
	ConversationID int32
	Role           string // "user" or "assistant"
	Content        string
	CreatedTs      int64
	UpdatedTs      int64
}

type MessageAttachment struct {
	MessageID    int32
	AttachmentID int32
}

type FindMessage struct {
	ID             *int32
	UID            *string
	ConversationID *int32
	Role           *string
	Limit          *int
	Offset         *int
}

// CreateMessage creates a new message.
func (s *Store) CreateMessage(ctx context.Context, create *Message) (*Message, error) {
	return s.driver.CreateMessage(ctx, create)
}

// GetMessage gets a message by filter.
func (s *Store) GetMessage(ctx context.Context, find *FindMessage) (*Message, error) {
	messages, err := s.ListMessages(ctx, find)
	if err != nil {
		return nil, err
	}
	if len(messages) == 0 {
		return nil, nil
	}
	return messages[0], nil
}

// ListMessages lists messages by filter.
func (s *Store) ListMessages(ctx context.Context, find *FindMessage) ([]*Message, error) {
	return s.driver.ListMessages(ctx, find)
}

// CreateMessageAttachment creates a message-attachment relationship.
func (s *Store) CreateMessageAttachment(ctx context.Context, create *MessageAttachment) error {
	return s.driver.CreateMessageAttachment(ctx, create)
}

// ListMessageAttachments lists attachments for a message.
func (s *Store) ListMessageAttachments(ctx context.Context, messageID int32) ([]*Attachment, error) {
	return s.driver.ListMessageAttachments(ctx, messageID)
}
