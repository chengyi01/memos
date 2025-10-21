package store

import (
	"context"
)

type Conversation struct {
	ID            int32
	UID           string
	Title         string
	CreatorID     int32
	MessageCount  int32
	LastMessageAt *int64
	CreatedTs     int64
	UpdatedTs     int64
	RowStatus     RowStatus
}

type FindConversation struct {
	ID        *int32
	UID       *string
	CreatorID *int32
	RowStatus *RowStatus
	Limit     *int
	Offset    *int
}

type UpdateConversation struct {
	UID           string
	Title         *string
	MessageCount  *int32
	LastMessageAt *int64
}

// CreateConversation creates a new conversation.
func (s *Store) CreateConversation(ctx context.Context, create *Conversation) (*Conversation, error) {
	return s.driver.CreateConversation(ctx, create)
}

// GetConversation gets a conversation by filter.
func (s *Store) GetConversation(ctx context.Context, find *FindConversation) (*Conversation, error) {
	conversations, err := s.ListConversations(ctx, find)
	if err != nil {
		return nil, err
	}
	if len(conversations) == 0 {
		return nil, nil
	}
	return conversations[0], nil
}

// ListConversations lists conversations by filter.
func (s *Store) ListConversations(ctx context.Context, find *FindConversation) ([]*Conversation, error) {
	return s.driver.ListConversations(ctx, find)
}

// UpdateConversation updates a conversation.
func (s *Store) UpdateConversation(ctx context.Context, update *UpdateConversation) (*Conversation, error) {
	return s.driver.UpdateConversation(ctx, update)
}

// DeleteConversation deletes a conversation by UID.
func (s *Store) DeleteConversation(ctx context.Context, uid string) error {
	return s.driver.DeleteConversation(ctx, uid)
}

// GetActiveConversation gets the most recent conversation for a user.
func (s *Store) GetActiveConversation(ctx context.Context, creatorID int32) (*Conversation, error) {
	find := &FindConversation{
		CreatorID: &creatorID,
		Limit:     intPtr(1),
		Offset:    intPtr(0),
	}
	conversations, err := s.ListConversations(ctx, find)
	if err != nil {
		return nil, err
	}
	if len(conversations) == 0 {
		return nil, nil
	}
	return conversations[0], nil
}

func intPtr(i int) *int {
	return &i
}
