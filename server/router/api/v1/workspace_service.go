package v1

import (
	"context"
	"fmt"
	"log/slog"
	"time"

	"github.com/pkg/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/usememos/memos/plugin/bailian"
	v1pb "github.com/usememos/memos/proto/gen/api/v1"
	storepb "github.com/usememos/memos/proto/gen/store"
	"github.com/usememos/memos/store"
)

// GetWorkspaceProfile returns the workspace profile.
func (s *APIV1Service) GetWorkspaceProfile(ctx context.Context, _ *v1pb.GetWorkspaceProfileRequest) (*v1pb.WorkspaceProfile, error) {
	workspaceProfile := &v1pb.WorkspaceProfile{
		Version:     s.Profile.Version,
		Mode:        s.Profile.Mode,
		InstanceUrl: s.Profile.InstanceURL,
	}
	owner, err := s.GetInstanceOwner(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to get instance owner: %v", err)
	}
	if owner != nil {
		workspaceProfile.Owner = owner.Name
	}
	return workspaceProfile, nil
}

func (s *APIV1Service) GetWorkspaceSetting(ctx context.Context, request *v1pb.GetWorkspaceSettingRequest) (*v1pb.WorkspaceSetting, error) {
	workspaceSettingKeyString, err := ExtractWorkspaceSettingKeyFromName(request.Name)
	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "invalid workspace setting name: %v", err)
	}

	workspaceSettingKey := storepb.WorkspaceSettingKey(storepb.WorkspaceSettingKey_value[workspaceSettingKeyString])
	// Get workspace setting from store with default value.
	switch workspaceSettingKey {
	case storepb.WorkspaceSettingKey_BASIC:
		_, err = s.Store.GetWorkspaceBasicSetting(ctx)
	case storepb.WorkspaceSettingKey_GENERAL:
		_, err = s.Store.GetWorkspaceGeneralSetting(ctx)
	case storepb.WorkspaceSettingKey_MEMO_RELATED:
		_, err = s.Store.GetWorkspaceMemoRelatedSetting(ctx)
	case storepb.WorkspaceSettingKey_STORAGE:
		_, err = s.Store.GetWorkspaceStorageSetting(ctx)
	case storepb.WorkspaceSettingKey_AI:
		// AI setting doesn't need to be pre-fetched with default value
		// It will be retrieved directly from store
	default:
		return nil, status.Errorf(codes.InvalidArgument, "unsupported workspace setting key: %v", workspaceSettingKey)
	}
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to get workspace setting: %v", err)
	}

	workspaceSetting, err := s.Store.GetWorkspaceSetting(ctx, &store.FindWorkspaceSetting{
		Name: workspaceSettingKey.String(),
	})
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to get workspace setting: %v", err)
	}
	if workspaceSetting == nil {
		return nil, status.Errorf(codes.NotFound, "workspace setting not found")
	}

	// For storage and AI setting, only host can get it.
	if workspaceSetting.Key == storepb.WorkspaceSettingKey_STORAGE || workspaceSetting.Key == storepb.WorkspaceSettingKey_AI {
		user, err := s.GetCurrentUser(ctx)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "failed to get current user: %v", err)
		}
		if user == nil || user.Role != store.RoleHost {
			return nil, status.Errorf(codes.PermissionDenied, "permission denied")
		}
	}

	return convertWorkspaceSettingFromStore(workspaceSetting), nil
}

func (s *APIV1Service) UpdateWorkspaceSetting(ctx context.Context, request *v1pb.UpdateWorkspaceSettingRequest) (*v1pb.WorkspaceSetting, error) {
	user, err := s.GetCurrentUser(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to get current user: %v", err)
	}
	if user == nil {
		return nil, status.Errorf(codes.Unauthenticated, "user not authenticated")
	}
	if user.Role != store.RoleHost {
		return nil, status.Errorf(codes.PermissionDenied, "permission denied")
	}

	// TODO: Apply update_mask if specified
	_ = request.UpdateMask

	updateSetting := convertWorkspaceSettingToStore(request.Setting)
	workspaceSetting, err := s.Store.UpsertWorkspaceSetting(ctx, updateSetting)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to upsert workspace setting: %v", err)
	}

	return convertWorkspaceSettingFromStore(workspaceSetting), nil
}

func convertWorkspaceSettingFromStore(setting *storepb.WorkspaceSetting) *v1pb.WorkspaceSetting {
	workspaceSetting := &v1pb.WorkspaceSetting{
		Name: fmt.Sprintf("workspace/settings/%s", setting.Key.String()),
	}
	switch setting.Value.(type) {
	case *storepb.WorkspaceSetting_GeneralSetting:
		workspaceSetting.Value = &v1pb.WorkspaceSetting_GeneralSetting_{
			GeneralSetting: convertWorkspaceGeneralSettingFromStore(setting.GetGeneralSetting()),
		}
	case *storepb.WorkspaceSetting_StorageSetting:
		workspaceSetting.Value = &v1pb.WorkspaceSetting_StorageSetting_{
			StorageSetting: convertWorkspaceStorageSettingFromStore(setting.GetStorageSetting()),
		}
	case *storepb.WorkspaceSetting_MemoRelatedSetting:
		workspaceSetting.Value = &v1pb.WorkspaceSetting_MemoRelatedSetting_{
			MemoRelatedSetting: convertWorkspaceMemoRelatedSettingFromStore(setting.GetMemoRelatedSetting()),
		}
	case *storepb.WorkspaceSetting_AiSetting:
		workspaceSetting.Value = &v1pb.WorkspaceSetting_AiSetting{
			AiSetting: convertWorkspaceAISettingFromStore(setting.GetAiSetting()),
		}
	}
	return workspaceSetting
}

func convertWorkspaceSettingToStore(setting *v1pb.WorkspaceSetting) *storepb.WorkspaceSetting {
	settingKeyString, _ := ExtractWorkspaceSettingKeyFromName(setting.Name)
	workspaceSetting := &storepb.WorkspaceSetting{
		Key: storepb.WorkspaceSettingKey(storepb.WorkspaceSettingKey_value[settingKeyString]),
		Value: &storepb.WorkspaceSetting_GeneralSetting{
			GeneralSetting: convertWorkspaceGeneralSettingToStore(setting.GetGeneralSetting()),
		},
	}
	switch workspaceSetting.Key {
	case storepb.WorkspaceSettingKey_GENERAL:
		workspaceSetting.Value = &storepb.WorkspaceSetting_GeneralSetting{
			GeneralSetting: convertWorkspaceGeneralSettingToStore(setting.GetGeneralSetting()),
		}
	case storepb.WorkspaceSettingKey_STORAGE:
		workspaceSetting.Value = &storepb.WorkspaceSetting_StorageSetting{
			StorageSetting: convertWorkspaceStorageSettingToStore(setting.GetStorageSetting()),
		}
	case storepb.WorkspaceSettingKey_MEMO_RELATED:
		workspaceSetting.Value = &storepb.WorkspaceSetting_MemoRelatedSetting{
			MemoRelatedSetting: convertWorkspaceMemoRelatedSettingToStore(setting.GetMemoRelatedSetting()),
		}
	case storepb.WorkspaceSettingKey_AI:
		workspaceSetting.Value = &storepb.WorkspaceSetting_AiSetting{
			AiSetting: convertWorkspaceAISettingToStore(setting.GetAiSetting()),
		}
	default:
		// Keep the default GeneralSetting value
	}
	return workspaceSetting
}

func convertWorkspaceGeneralSettingFromStore(setting *storepb.WorkspaceGeneralSetting) *v1pb.WorkspaceSetting_GeneralSetting {
	if setting == nil {
		return nil
	}
	// Backfill theme if empty
	theme := setting.Theme
	if theme == "" {
		theme = "default"
	}

	generalSetting := &v1pb.WorkspaceSetting_GeneralSetting{
		Theme:                    theme,
		DisallowUserRegistration: setting.DisallowUserRegistration,
		DisallowPasswordAuth:     setting.DisallowPasswordAuth,
		AdditionalScript:         setting.AdditionalScript,
		AdditionalStyle:          setting.AdditionalStyle,
		WeekStartDayOffset:       setting.WeekStartDayOffset,
		DisallowChangeUsername:   setting.DisallowChangeUsername,
		DisallowChangeNickname:   setting.DisallowChangeNickname,
	}
	if setting.CustomProfile != nil {
		generalSetting.CustomProfile = &v1pb.WorkspaceSetting_GeneralSetting_CustomProfile{
			Title:       setting.CustomProfile.Title,
			Description: setting.CustomProfile.Description,
			LogoUrl:     setting.CustomProfile.LogoUrl,
			Locale:      setting.CustomProfile.Locale,
		}
	}
	return generalSetting
}

func convertWorkspaceGeneralSettingToStore(setting *v1pb.WorkspaceSetting_GeneralSetting) *storepb.WorkspaceGeneralSetting {
	if setting == nil {
		return nil
	}
	generalSetting := &storepb.WorkspaceGeneralSetting{
		Theme:                    setting.Theme,
		DisallowUserRegistration: setting.DisallowUserRegistration,
		DisallowPasswordAuth:     setting.DisallowPasswordAuth,
		AdditionalScript:         setting.AdditionalScript,
		AdditionalStyle:          setting.AdditionalStyle,
		WeekStartDayOffset:       setting.WeekStartDayOffset,
		DisallowChangeUsername:   setting.DisallowChangeUsername,
		DisallowChangeNickname:   setting.DisallowChangeNickname,
	}
	if setting.CustomProfile != nil {
		generalSetting.CustomProfile = &storepb.WorkspaceCustomProfile{
			Title:       setting.CustomProfile.Title,
			Description: setting.CustomProfile.Description,
			LogoUrl:     setting.CustomProfile.LogoUrl,
			Locale:      setting.CustomProfile.Locale,
		}
	}
	return generalSetting
}

func convertWorkspaceStorageSettingFromStore(settingpb *storepb.WorkspaceStorageSetting) *v1pb.WorkspaceSetting_StorageSetting {
	if settingpb == nil {
		return nil
	}
	setting := &v1pb.WorkspaceSetting_StorageSetting{
		StorageType:       v1pb.WorkspaceSetting_StorageSetting_StorageType(settingpb.StorageType),
		FilepathTemplate:  settingpb.FilepathTemplate,
		UploadSizeLimitMb: settingpb.UploadSizeLimitMb,
	}
	if settingpb.S3Config != nil {
		setting.S3Config = &v1pb.WorkspaceSetting_StorageSetting_S3Config{
			AccessKeyId:     settingpb.S3Config.AccessKeyId,
			AccessKeySecret: settingpb.S3Config.AccessKeySecret,
			Endpoint:        settingpb.S3Config.Endpoint,
			Region:          settingpb.S3Config.Region,
			Bucket:          settingpb.S3Config.Bucket,
			UsePathStyle:    settingpb.S3Config.UsePathStyle,
		}
	}
	if settingpb.OssConfig != nil {
		setting.OssConfig = &v1pb.WorkspaceSetting_StorageSetting_OSSConfig{
			Endpoint:        settingpb.OssConfig.Endpoint,
			Region:          settingpb.OssConfig.Region,
			AccessKeyId:     settingpb.OssConfig.AccessKeyId,
			AccessKeySecret: settingpb.OssConfig.AccessKeySecret,
			Bucket:          settingpb.OssConfig.Bucket,
			UseSsl:          settingpb.OssConfig.UseSsl,
		}
	}
	return setting
}

func convertWorkspaceStorageSettingToStore(setting *v1pb.WorkspaceSetting_StorageSetting) *storepb.WorkspaceStorageSetting {
	if setting == nil {
		return nil
	}
	settingpb := &storepb.WorkspaceStorageSetting{
		StorageType:       storepb.WorkspaceStorageSetting_StorageType(setting.StorageType),
		FilepathTemplate:  setting.FilepathTemplate,
		UploadSizeLimitMb: setting.UploadSizeLimitMb,
	}
	if setting.S3Config != nil {
		settingpb.S3Config = &storepb.StorageS3Config{
			AccessKeyId:     setting.S3Config.AccessKeyId,
			AccessKeySecret: setting.S3Config.AccessKeySecret,
			Endpoint:        setting.S3Config.Endpoint,
			Region:          setting.S3Config.Region,
			Bucket:          setting.S3Config.Bucket,
			UsePathStyle:    setting.S3Config.UsePathStyle,
		}
	}
	if setting.OssConfig != nil {
		settingpb.OssConfig = &storepb.StorageOSSConfig{
			Endpoint:        setting.OssConfig.Endpoint,
			Region:          setting.OssConfig.Region,
			AccessKeyId:     setting.OssConfig.AccessKeyId,
			AccessKeySecret: setting.OssConfig.AccessKeySecret,
			Bucket:          setting.OssConfig.Bucket,
			UseSsl:          setting.OssConfig.UseSsl,
		}
	}
	return settingpb
}

func convertWorkspaceMemoRelatedSettingFromStore(setting *storepb.WorkspaceMemoRelatedSetting) *v1pb.WorkspaceSetting_MemoRelatedSetting {
	if setting == nil {
		return nil
	}
	return &v1pb.WorkspaceSetting_MemoRelatedSetting{
		DisallowPublicVisibility: setting.DisallowPublicVisibility,
		DisplayWithUpdateTime:    setting.DisplayWithUpdateTime,
		ContentLengthLimit:       setting.ContentLengthLimit,
		EnableDoubleClickEdit:    setting.EnableDoubleClickEdit,
		EnableLinkPreview:        setting.EnableLinkPreview,
		Reactions:                setting.Reactions,
		DisableMarkdownShortcuts: setting.DisableMarkdownShortcuts,
		EnableBlurNsfwContent:    setting.EnableBlurNsfwContent,
		NsfwTags:                 setting.NsfwTags,
	}
}

func convertWorkspaceMemoRelatedSettingToStore(setting *v1pb.WorkspaceSetting_MemoRelatedSetting) *storepb.WorkspaceMemoRelatedSetting {
	if setting == nil {
		return nil
	}
	return &storepb.WorkspaceMemoRelatedSetting{
		DisallowPublicVisibility: setting.DisallowPublicVisibility,
		DisplayWithUpdateTime:    setting.DisplayWithUpdateTime,
		ContentLengthLimit:       setting.ContentLengthLimit,
		EnableDoubleClickEdit:    setting.EnableDoubleClickEdit,
		EnableLinkPreview:        setting.EnableLinkPreview,
		Reactions:                setting.Reactions,
		DisableMarkdownShortcuts: setting.DisableMarkdownShortcuts,
		EnableBlurNsfwContent:    setting.EnableBlurNsfwContent,
		NsfwTags:                 setting.NsfwTags,
	}
}

func convertWorkspaceAISettingFromStore(setting *storepb.WorkspaceAISetting) *v1pb.WorkspaceSetting_AISetting {
	if setting == nil {
		return nil
	}
	aiSetting := &v1pb.WorkspaceSetting_AISetting{
		ApiKey:         setting.ApiKey,
		Endpoint:       setting.Endpoint,
		Temperature:    setting.Temperature,
		MaxTokens:      setting.MaxTokens,
		Enabled:        setting.Enabled,
		DefaultAgentId: setting.DefaultAgentId,
	}
	for _, agent := range setting.Agents {
		aiSetting.Agents = append(aiSetting.Agents, &v1pb.WorkspaceSetting_AISetting_AIAgent{
			Id:          agent.Id,
			Name:        agent.Name,
			Description: agent.Description,
			CreatedTs:   agent.CreatedTs,
		})
	}
	return aiSetting
}

func convertWorkspaceAISettingToStore(setting *v1pb.WorkspaceSetting_AISetting) *storepb.WorkspaceAISetting {
	if setting == nil {
		return nil
	}
	aiSetting := &storepb.WorkspaceAISetting{
		ApiKey:         setting.ApiKey,
		Endpoint:       setting.Endpoint,
		Temperature:    setting.Temperature,
		MaxTokens:      setting.MaxTokens,
		Enabled:        setting.Enabled,
		DefaultAgentId: setting.DefaultAgentId,
	}
	for _, agent := range setting.Agents {
		aiSetting.Agents = append(aiSetting.Agents, &storepb.AIAgent{
			Id:          agent.Id,
			Name:        agent.Name,
			Description: agent.Description,
			CreatedTs:   agent.CreatedTs,
		})
	}
	return aiSetting
}

func (s *APIV1Service) TestAIAgent(ctx context.Context, request *v1pb.TestAIAgentRequest) (*v1pb.TestAIAgentResponse, error) {
	// 1. 权限检查 - 仅管理员可测试
	user, err := s.GetCurrentUser(ctx)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to get current user: %v", err)
	}
	if user == nil || user.Role != store.RoleHost {
		return nil, status.Errorf(codes.PermissionDenied, "permission denied")
	}

	// 日志：记录测试请求
	maskedAPIKey := "***"
	if len(request.ApiKey) > 8 {
		maskedAPIKey = request.ApiKey[:4] + "..." + request.ApiKey[len(request.ApiKey)-4:]
	}
	slog.Info("Testing AI agent connection",
		slog.String("agent_id", request.AgentId),
		slog.String("api_key", maskedAPIKey),
		slog.String("endpoint", request.Endpoint),
		slog.String("user", user.Username),
	)

	// 2. 验证请求参数
	if request.ApiKey == "" || request.AgentId == "" {
		slog.Warn("Test AI agent failed: missing parameters")
		return &v1pb.TestAIAgentResponse{
			Success: false,
			Message: "API Key and Agent ID are required",
		}, nil
	}

	// 3. 创建临时 Bailian Client
	client, err := bailian.NewClient(&bailian.Config{
		APIKey:      request.ApiKey,
		AgentID:     request.AgentId,
		Endpoint:    request.Endpoint,
		Temperature: 0.7,
		MaxTokens:   100,
	})
	if err != nil {
		slog.Error("Failed to create Bailian client",
			slog.String("agent_id", request.AgentId),
			slog.String("error", err.Error()),
		)
		return &v1pb.TestAIAgentResponse{
			Success: false,
			Message: fmt.Sprintf("Failed to create client: %v", err),
		}, nil
	}

	// 4. 测试连接并记录耗时
	start := time.Now()
	err = client.TestConnection(ctx)
	latency := time.Since(start).Milliseconds()

	if err != nil {
		slog.Error("AI agent connection test failed",
			slog.String("agent_id", request.AgentId),
			slog.Int64("latency_ms", latency),
			slog.String("error", err.Error()),
		)
		return &v1pb.TestAIAgentResponse{
			Success:   false,
			Message:   fmt.Sprintf("Connection test failed: %v", err),
			LatencyMs: int32(latency),
		}, nil
	}

	// 5. 返回成功结果
	slog.Info("AI agent connection test successful",
		slog.String("agent_id", request.AgentId),
		slog.Int64("latency_ms", latency),
	)
	return &v1pb.TestAIAgentResponse{
		Success:   true,
		Message:   "Connection successful",
		LatencyMs: int32(latency),
	}, nil
}

var ownerCache *v1pb.User

func (s *APIV1Service) GetInstanceOwner(ctx context.Context) (*v1pb.User, error) {
	if ownerCache != nil {
		return ownerCache, nil
	}

	hostUserType := store.RoleHost
	user, err := s.Store.GetUser(ctx, &store.FindUser{
		Role: &hostUserType,
	})
	if err != nil {
		return nil, errors.Wrapf(err, "failed to find owner")
	}
	if user == nil {
		return nil, nil
	}

	ownerCache = convertUserFromStore(user)
	return ownerCache, nil
}
