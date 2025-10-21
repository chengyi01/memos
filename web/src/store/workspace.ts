import { uniqBy } from "lodash-es";
import { makeAutoObservable } from "mobx";
import { workspaceServiceClient } from "@/grpcweb";
import { WorkspaceProfile, WorkspaceSetting_Key } from "@/types/proto/api/v1/workspace_service";
import {
  WorkspaceSetting_GeneralSetting,
  WorkspaceSetting_MemoRelatedSetting,
  WorkspaceSetting,
} from "@/types/proto/api/v1/workspace_service";
import { isValidateLocale } from "@/utils/i18n";
import { workspaceSettingNamePrefix } from "./common";

class LocalState {
  locale: string = "en";
  theme: string = "default";
  profile: WorkspaceProfile = WorkspaceProfile.fromPartial({});
  settings: WorkspaceSetting[] = [];

  get generalSetting() {
    return (
      this.settings.find((setting) => setting.name === `${workspaceSettingNamePrefix}${WorkspaceSetting_Key.GENERAL}`)?.generalSetting ||
      WorkspaceSetting_GeneralSetting.fromPartial({})
    );
  }

  get memoRelatedSetting() {
    return (
      this.settings.find((setting) => setting.name === `${workspaceSettingNamePrefix}${WorkspaceSetting_Key.MEMO_RELATED}`)
        ?.memoRelatedSetting || WorkspaceSetting_MemoRelatedSetting.fromPartial({})
    );
  }

  get aiSetting() {
    return (
      this.settings.find((setting) => setting.name === `${workspaceSettingNamePrefix}${WorkspaceSetting_Key.AI}`)?.aiSetting ||
      undefined
    );
  }

  constructor() {
    makeAutoObservable(this);
  }

  setPartial(partial: Partial<LocalState>) {
    const finalState = {
      ...this,
      ...partial,
    };
    if (!isValidateLocale(finalState.locale)) {
      finalState.locale = "en";
    }
    if (!["default", "default-dark", "paper", "whitewall"].includes(finalState.theme)) {
      finalState.theme = "default";
    }
    Object.assign(this, finalState);
  }
}

const workspaceStore = (() => {
  const state = new LocalState();

  const fetchWorkspaceSetting = async (settingKey: WorkspaceSetting_Key) => {
    const setting = await workspaceServiceClient.getWorkspaceSetting({ name: `${workspaceSettingNamePrefix}${settingKey}` });
    state.setPartial({
      settings: uniqBy([setting, ...state.settings], "name"),
    });
  };

  const upsertWorkspaceSetting = async (setting: WorkspaceSetting) => {
    await workspaceServiceClient.updateWorkspaceSetting({ setting });
    state.setPartial({
      settings: uniqBy([setting, ...state.settings], "name"),
    });
  };

  const getWorkspaceSettingByKey = (settingKey: WorkspaceSetting_Key) => {
    return (
      state.settings.find((setting) => setting.name === `${workspaceSettingNamePrefix}${settingKey}`) || WorkspaceSetting.fromPartial({})
    );
  };

  const setTheme = async (theme: string) => {
    state.setPartial({ theme });

    // Update the workspace setting - store theme in a custom field or handle differently
    const generalSetting = state.generalSetting;
    const updatedGeneralSetting = WorkspaceSetting_GeneralSetting.fromPartial({
      ...generalSetting,
      customProfile: {
        ...generalSetting.customProfile,
      },
    });

    await upsertWorkspaceSetting(
      WorkspaceSetting.fromPartial({
        name: `${workspaceSettingNamePrefix}${WorkspaceSetting_Key.GENERAL}`,
        generalSetting: updatedGeneralSetting,
      }),
    );
  };

  const fetchAISettingIfNeeded = async () => {
    // 如果 AI 设置尚未加载，尝试加载
    if (!state.aiSetting) {
      try {
        await fetchWorkspaceSetting(WorkspaceSetting_Key.AI);
      } catch (error) {
        console.warn("Failed to load AI settings:", error);
      }
    }
  };

  return {
    state,
    fetchWorkspaceSetting,
    upsertWorkspaceSetting,
    getWorkspaceSettingByKey,
    setTheme,
    fetchAISettingIfNeeded,
  };
})();

export const initialWorkspaceStore = async () => {
  const workspaceProfile = await workspaceServiceClient.getWorkspaceProfile({});
  
  // Prepare workspace settings.
  // 必需的设置（加载失败会阻塞应用）
  for (const key of [WorkspaceSetting_Key.GENERAL, WorkspaceSetting_Key.MEMO_RELATED]) {
    await workspaceStore.fetchWorkspaceSetting(key);
  }

  // 可选的设置（加载失败不阻塞应用）
  // AI 设置可能需要特定权限，静默失败以避免阻塞应用启动
  try {
    await workspaceStore.fetchWorkspaceSetting(WorkspaceSetting_Key.AI);
  } catch (error) {
    console.warn("Failed to load AI settings (may require permissions):", error);
    // 静默失败，不阻塞应用启动
  }

  const workspaceGeneralSetting = workspaceStore.state.generalSetting;
  workspaceStore.state.setPartial({
    locale: workspaceGeneralSetting.customProfile?.locale,
    theme: "default",
    profile: workspaceProfile,
  });
};

export default workspaceStore;
