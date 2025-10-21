package v1

import (
	"context"
	"fmt"
	"log/slog"
	"time"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/emptypb"

	"github.com/usememos/memos/plugin/bailian"
	apiv1pb "github.com/usememos/memos/proto/gen/api/v1"
	storepb "github.com/usememos/memos/proto/gen/store"
	"github.com/usememos/memos/store"
)

// ConversationService implements ConversationServiceServer.
type ConversationService struct {
	apiv1pb.UnimplementedConversationServiceServer

	Store  *store.Store
	Secret string
}

// NewConversationService creates a new ConversationService.
func NewConversationService(store *store.Store, secret string) *ConversationService {
	return &ConversationService{
		Store:  store,
		Secret: secret,
	}
}

// CreateConversation creates a new conversation.
func (s *ConversationService) CreateConversation(ctx context.Context, request *apiv1pb.CreateConversationRequest) (*apiv1pb.Conversation, error) {
	user, err := s.GetCurrentUser(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Unauthenticated, "unauthenticated: %v", err)
	}

	title := request.Title
	if title == "" {
		title = fmt.Sprintf("会话 %s", time.Now().Format("2006-01-02 15:04"))
	}

	conversation, err := s.Store.CreateConversation(ctx, &store.Conversation{
		Title:     title,
		CreatorID: user.ID,
	})
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create conversation: %v", err)
	}

	return convertConversationFromStore(conversation), nil
}

// GetActiveConversation gets the active conversation for the current user.
func (s *ConversationService) GetActiveConversation(ctx context.Context, request *apiv1pb.GetActiveConversationRequest) (*apiv1pb.Conversation, error) {
	user, err := s.GetCurrentUser(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Unauthenticated, "unauthenticated: %v", err)
	}

	conversation, err := s.Store.GetActiveConversation(ctx, user.ID)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to get active conversation: %v", err)
	}

	if conversation == nil && request.CreateIfNotExists {
		conversation, err = s.Store.CreateConversation(ctx, &store.Conversation{
			Title:     fmt.Sprintf("会话 %s", time.Now().Format("2006-01-02 15:04")),
			CreatorID: user.ID,
		})
		if err != nil {
			return nil, status.Errorf(codes.Internal, "failed to create conversation: %v", err)
		}
	}

	if conversation == nil {
		return nil, status.Error(codes.NotFound, "no active conversation")
	}

	return convertConversationFromStore(conversation), nil
}

// SendMessage sends a message and streams AI response.
func (s *ConversationService) SendMessage(request *apiv1pb.SendMessageRequest, stream apiv1pb.ConversationService_SendMessageServer) error {
	ctx := stream.Context()

	user, err := s.GetCurrentUser(ctx)
	if err != nil {
		return status.Errorf(codes.Unauthenticated, "unauthenticated: %v", err)
	}

	// Parse conversation UID from "conversations/{uid}"
	conversationUID := extractConversationUID(request.Conversation)
	if conversationUID == "" {
		return status.Error(codes.InvalidArgument, "invalid conversation name")
	}

	// Get conversation
	conversation, err := s.Store.GetConversation(ctx, &store.FindConversation{
		UID: &conversationUID,
	})
	if err != nil {
		return status.Errorf(codes.Internal, "failed to get conversation: %v", err)
	}
	if conversation == nil {
		return status.Error(codes.NotFound, "conversation not found")
	}

	// Check ownership
	if conversation.CreatorID != user.ID {
		return status.Error(codes.PermissionDenied, "permission denied")
	}

	// Save user message
	userMessage, err := s.Store.CreateMessage(ctx, &store.Message{
		ConversationID: conversation.ID,
		Role:           "user",
		Content:        request.Content,
	})
	if err != nil {
		return status.Errorf(codes.Internal, "failed to create user message: %v", err)
	}

	// Save attachments
	for _, attachmentUID := range request.Attachments {
		attachment, err := s.Store.GetAttachment(ctx, &store.FindAttachment{
			UID: &attachmentUID,
		})
		if err != nil || attachment == nil {
			slog.Warn("attachment not found", "uid", attachmentUID)
			continue
		}

		if err := s.Store.CreateMessageAttachment(ctx, &store.MessageAttachment{
			MessageID:    userMessage.ID,
			AttachmentID: attachment.ID,
		}); err != nil {
			slog.Error("failed to create message attachment", "error", err)
		}
	}

	// Send USER_MESSAGE chunk
	userMessageProto, err := s.convertMessageFromStore(ctx, userMessage)
	if err != nil {
		return status.Errorf(codes.Internal, "failed to convert user message: %v", err)
	}

	if err := stream.Send(&apiv1pb.SendMessageChunk{
		Type:    apiv1pb.SendMessageChunk_USER_MESSAGE,
		Message: userMessageProto,
	}); err != nil {
		return err
	}

	// Get AI config
	aiSetting, err := s.Store.GetWorkspaceSetting(ctx, &store.FindWorkspaceSetting{
		Name: storepb.WorkspaceSettingKey_AI.String(),
	})
	if err != nil || aiSetting == nil {
		return status.Error(codes.FailedPrecondition, "AI not configured")
	}

	aiConfig := aiSetting.Value.(*storepb.WorkspaceSetting_AiSetting).AiSetting
	if !aiConfig.Enabled {
		return status.Error(codes.FailedPrecondition, "AI feature is not enabled")
	}

	// Determine which agent to use
	agentID := request.AgentId
	if agentID == "" {
		// Use default agent if not specified
		agentID = aiConfig.DefaultAgentId
	}

	// Find the agent in the agents list
	var selectedAgent *storepb.AIAgent
	for _, agent := range aiConfig.Agents {
		if agent.Id == agentID {
			selectedAgent = agent
			break
		}
	}

	// Fallback: if no agent found and we have agents, use the first one
	if selectedAgent == nil && len(aiConfig.Agents) > 0 {
		selectedAgent = aiConfig.Agents[0]
		agentID = selectedAgent.Id
	}

	// If still no agent, return error
	if selectedAgent == nil {
		return status.Error(codes.FailedPrecondition, "No AI agent configured")
	}

	// Create Bailian client with selected agent
	bailianClient, err := bailian.NewClient(&bailian.Config{
		APIKey:      aiConfig.ApiKey,
		AgentID:     agentID,
		Endpoint:    aiConfig.Endpoint,
		Temperature: aiConfig.Temperature,
		MaxTokens:   aiConfig.MaxTokens,
	})
	if err != nil {
		return status.Errorf(codes.Internal, "failed to create AI client: %v", err)
	}

	// Get conversation history
	messages, err := s.Store.ListMessages(ctx, &store.FindMessage{
		ConversationID: &conversation.ID,
		Limit:          intPtr(20), // Last 20 messages
	})
	if err != nil {
		return status.Errorf(codes.Internal, "failed to get messages: %v", err)
	}

	// Convert to Bailian format
	bailianMessages := []bailian.Message{}
	for _, msg := range messages {
		bailianMessages = append(bailianMessages, bailian.Message{
			Role:    msg.Role,
			Content: msg.Content,
		})
	}

	// Send ASSISTANT_START chunk
	if err := stream.Send(&apiv1pb.SendMessageChunk{
		Type: apiv1pb.SendMessageChunk_ASSISTANT_START,
	}); err != nil {
		return err
	}

	// Stream AI response
	assistantContent := ""
	err = bailianClient.SendMessage(ctx, bailianMessages, func(chunk string) error {
		assistantContent += chunk
		return stream.Send(&apiv1pb.SendMessageChunk{
			Type:         apiv1pb.SendMessageChunk_ASSISTANT_CONTENT,
			ContentDelta: chunk,
		})
	})
	if err != nil {
		_ = stream.Send(&apiv1pb.SendMessageChunk{
			Type:  apiv1pb.SendMessageChunk_ERROR,
			Error: err.Error(),
		})
		return status.Errorf(codes.Internal, "AI response failed: %v", err)
	}

	// Save assistant message
	assistantMessage, err := s.Store.CreateMessage(ctx, &store.Message{
		ConversationID: conversation.ID,
		Role:           "assistant",
		Content:        assistantContent,
	})
	if err != nil {
		return status.Errorf(codes.Internal, "failed to save assistant message: %v", err)
	}

	// Update conversation
	messageCount := conversation.MessageCount + 2
	lastMessageAt := time.Now().Unix()
	if _, err := s.Store.UpdateConversation(ctx, &store.UpdateConversation{
		UID:           conversation.UID,
		MessageCount:  &messageCount,
		LastMessageAt: &lastMessageAt,
	}); err != nil {
		slog.Error("failed to update conversation", "error", err)
	}

	// Send ASSISTANT_END chunk
	assistantMessageProto, err := s.convertMessageFromStore(ctx, assistantMessage)
	if err != nil {
		return status.Errorf(codes.Internal, "failed to convert assistant message: %v", err)
	}

	if err := stream.Send(&apiv1pb.SendMessageChunk{
		Type:    apiv1pb.SendMessageChunk_ASSISTANT_END,
		Message: assistantMessageProto,
	}); err != nil {
		return err
	}

	return nil
}

// ListMessages lists messages in a conversation.
func (s *ConversationService) ListMessages(ctx context.Context, request *apiv1pb.ListMessagesRequest) (*apiv1pb.ListMessagesResponse, error) {
	user, err := s.GetCurrentUser(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Unauthenticated, "unauthenticated: %v", err)
	}

	conversationUID := extractConversationUID(request.Conversation)
	if conversationUID == "" {
		return nil, status.Error(codes.InvalidArgument, "invalid conversation name")
	}

	conversation, err := s.Store.GetConversation(ctx, &store.FindConversation{
		UID: &conversationUID,
	})
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to get conversation: %v", err)
	}
	if conversation == nil {
		return nil, status.Error(codes.NotFound, "conversation not found")
	}

	if conversation.CreatorID != user.ID {
		return nil, status.Error(codes.PermissionDenied, "permission denied")
	}

	pageSize := int(request.PageSize)
	if pageSize <= 0 || pageSize > 100 {
		pageSize = 50
	}

	messages, err := s.Store.ListMessages(ctx, &store.FindMessage{
		ConversationID: &conversation.ID,
		Limit:          &pageSize,
	})
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to list messages: %v", err)
	}

	response := &apiv1pb.ListMessagesResponse{
		Messages: []*apiv1pb.Message{},
	}

	for _, message := range messages {
		messageProto, err := s.convertMessageFromStore(ctx, message)
		if err != nil {
			slog.Error("failed to convert message", "error", err)
			continue
		}
		response.Messages = append(response.Messages, messageProto)
	}

	return response, nil
}

// DeleteConversation deletes a conversation.
func (s *ConversationService) DeleteConversation(ctx context.Context, request *apiv1pb.DeleteConversationRequest) (*emptypb.Empty, error) {
	user, err := s.GetCurrentUser(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Unauthenticated, "unauthenticated: %v", err)
	}

	conversationUID := extractConversationUID(request.Name)
	if conversationUID == "" {
		return nil, status.Error(codes.InvalidArgument, "invalid conversation name")
	}

	conversation, err := s.Store.GetConversation(ctx, &store.FindConversation{
		UID: &conversationUID,
	})
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to get conversation: %v", err)
	}
	if conversation == nil {
		return nil, status.Error(codes.NotFound, "conversation not found")
	}

	if conversation.CreatorID != user.ID {
		return nil, status.Error(codes.PermissionDenied, "permission denied")
	}

	if err := s.Store.DeleteConversation(ctx, conversationUID); err != nil {
		return nil, status.Errorf(codes.Internal, "failed to delete conversation: %v", err)
	}

	return &emptypb.Empty{}, nil
}

// GetCurrentUser gets the current user from context.
func (s *ConversationService) GetCurrentUser(ctx context.Context) (*store.User, error) {
	userID, ok := ctx.Value(userIDContextKey).(int32)
	if !ok {
		return nil, fmt.Errorf("user not authenticated")
	}
	user, err := s.Store.GetUser(ctx, &store.FindUser{
		ID: &userID,
	})
	if err != nil {
		return nil, err
	}
	if user == nil {
		return nil, fmt.Errorf("user %d not found", userID)
	}
	return user, nil
}

// convertMessageFromStore converts store.Message to proto Message with attachments.
func (s *ConversationService) convertMessageFromStore(ctx context.Context, message *store.Message) (*apiv1pb.Message, error) {
	// Get attachments
	attachments, err := s.Store.ListMessageAttachments(ctx, message.ID)
	if err != nil {
		return nil, err
	}

	attachmentProtos := []*apiv1pb.Attachment{}
	for _, att := range attachments {
		attachmentProtos = append(attachmentProtos, convertAttachmentFromStore(att))
	}

	return convertMessageFromStore(message, attachmentProtos), nil
}

// extractConversationUID extracts UID from "conversations/{uid}".
func extractConversationUID(name string) string {
	const prefix = "conversations/"
	if len(name) <= len(prefix) {
		return ""
	}
	return name[len(prefix):]
}

func intPtr(i int) *int {
	return &i
}
