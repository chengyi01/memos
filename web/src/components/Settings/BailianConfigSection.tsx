import { observer } from "mobx-react-lite";
import { useState, useMemo } from "react";
import { isEqual } from "lodash-es";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { workspaceStore } from "@/store";
import { workspaceSettingNamePrefix } from "@/store/common";
import { WorkspaceSetting_Key } from "@/types/proto/api/v1/workspace_service";

/**
 * Bailian AI Configuration (Temporary type until proto is extended)
 * TODO: This should be defined in proto/store/workspace_setting.proto
 */
interface BailianConfig {
  enabled: boolean;
  apiKey: string;
  agentId: string;
  endpoint: string;
  temperature: number;
  maxTokens: number;
}

const DEFAULT_CONFIG: BailianConfig = {
  enabled: false,
  apiKey: "",
  agentId: "",
  endpoint: "https://dashscope.aliyuncs.com/api/v1",
  temperature: 0.7,
  maxTokens: 2000,
};

/**
 * BailianConfigSection - Workspace settings for Alibaba Cloud Bailian AI
 * Allows administrators to configure API credentials and AI parameters
 */
const BailianConfigSection = observer(() => {
  const { t } = useTranslation();
  
  // TODO: Replace with actual workspace setting once proto is extended
  // const currentConfig = workspaceStore.getWorkspaceSettingByKey(WorkspaceSetting_Key.AI_AGENT)?.aiSetting || DEFAULT_CONFIG;
  const currentConfig = (workspaceStore as any).state?.aiSetting || DEFAULT_CONFIG;
  
  const [config, setConfig] = useState<BailianConfig>(currentConfig);
  const [testing, setTesting] = useState(false);
  const [saving, setSaving] = useState(false);

  // Check if save button should be enabled
  const allowSave = useMemo(() => {
    // Validate required fields
    if (config.enabled) {
      if (!config.apiKey || !config.agentId) {
        return false;
      }
    }
    
    // Check if changed
    return !isEqual(currentConfig, config);
  }, [config, currentConfig]);

  const handleFieldChange = (field: keyof BailianConfig, value: any) => {
    setConfig({
      ...config,
      [field]: value,
    });
  };

  const handleTestConnection = async () => {
    if (!config.apiKey || !config.agentId) {
      toast.error(t("settings.ai-agent.error.missing-credentials") || "请先填写API Key和Agent ID");
      return;
    }

    setTesting(true);
    try {
      // TODO: Implement test connection API call
      // await conversationServiceClient.testConnection({ apiKey: config.apiKey, agentId: config.agentId });
      
      // Mock success for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(t("settings.ai-agent.test-success"));
    } catch (error: any) {
      toast.error(`${t("settings.ai-agent.test-failed")}: ${error.message}`);
      console.error("Test connection failed:", error);
    } finally {
      setTesting(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // TODO: Replace with actual workspace setting update once proto is extended
      // await workspaceServiceClient.updateWorkspaceSetting({
      //   setting: {
      //     name: `${workspaceSettingNamePrefix}${WorkspaceSetting_Key.AI_AGENT}`,
      //     aiSetting: config,
      //   },
      // });
      
      // Mock save for now
      await new Promise(resolve => setTimeout(resolve, 500));
      (workspaceStore as any).state.aiSetting = config;
      
      toast.success(t("settings.save-success"));
    } catch (error: any) {
      toast.error(`${t("settings.save-failed")}: ${error.message}`);
      console.error("Save failed:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold mb-2">{t("settings.ai-agent.title")}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t("settings.ai-agent.description") || "配置阿里云百炼AI智能体,为用户提供AI对话功能"}
        </p>
      </div>

      {/* Enable Switch */}
      <div className="flex items-center justify-between">
        <Label htmlFor="enabled" className="flex-1">
          <div>
            <div className="font-medium">{t("settings.ai-agent.enabled")}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t("settings.ai-agent.enabled-hint") || "启用后用户可以使用AI对话功能"}
            </div>
          </div>
        </Label>
        <Switch
          id="enabled"
          checked={config.enabled}
          onCheckedChange={(checked) => handleFieldChange("enabled", checked)}
        />
      </div>

      {/* API Key */}
      <div className="space-y-2">
        <Label htmlFor="api-key">
          {t("settings.ai-agent.api-key")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="api-key"
          type="password"
          value={config.apiKey}
          onChange={(e) => handleFieldChange("apiKey", e.target.value)}
          placeholder="sk-xxxxxxxxxxxxx"
          disabled={!config.enabled}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {t("settings.ai-agent.api-key-hint") || "从阿里云百炼控制台获取"}
        </p>
      </div>

      {/* Agent ID */}
      <div className="space-y-2">
        <Label htmlFor="agent-id">
          {t("settings.ai-agent.agent-id")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="agent-id"
          value={config.agentId}
          onChange={(e) => handleFieldChange("agentId", e.target.value)}
          placeholder="agent_xxxxxxxx"
          disabled={!config.enabled}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {t("settings.ai-agent.agent-id-hint") || "智能体应用的唯一标识"}
        </p>
      </div>

      {/* Endpoint */}
      <div className="space-y-2">
        <Label htmlFor="endpoint">{t("settings.ai-agent.endpoint")}</Label>
        <Input
          id="endpoint"
          value={config.endpoint}
          onChange={(e) => handleFieldChange("endpoint", e.target.value)}
          disabled={!config.enabled}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {t("settings.ai-agent.endpoint-hint") || "保持默认值即可"}
        </p>
      </div>

      {/* Advanced Settings */}
      <details className="border border-border rounded p-4">
        <summary className="cursor-pointer font-medium">
          {t("settings.ai-agent.advanced") || "高级设置"}
        </summary>
        <div className="mt-4 space-y-4">
          {/* Temperature */}
          <div className="space-y-2">
            <Label htmlFor="temperature">
              {t("settings.ai-agent.temperature")} ({config.temperature})
            </Label>
            <input
              id="temperature"
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={config.temperature}
              onChange={(e) => handleFieldChange("temperature", parseFloat(e.target.value))}
              disabled={!config.enabled}
              className="w-full"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("settings.ai-agent.temperature-hint") || "控制回复的随机性,0=确定性,2=创造性"}
            </p>
          </div>

          {/* Max Tokens */}
          <div className="space-y-2">
            <Label htmlFor="max-tokens">{t("settings.ai-agent.max-tokens")}</Label>
            <Input
              id="max-tokens"
              type="number"
              min="100"
              max="8000"
              value={config.maxTokens}
              onChange={(e) => handleFieldChange("maxTokens", parseInt(e.target.value))}
              disabled={!config.enabled}
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("settings.ai-agent.max-tokens-hint") || "AI回复的最大长度"}
            </p>
          </div>
        </div>
      </details>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button 
          onClick={handleTestConnection} 
          disabled={testing || !config.enabled || !config.apiKey || !config.agentId} 
          variant="outline"
        >
          {testing ? t("settings.ai-agent.testing") || "测试中..." : t("settings.ai-agent.test-connection")}
        </Button>
        <Button 
          onClick={handleSave} 
          disabled={saving || !allowSave}
        >
          {saving ? t("settings.saving") || "保存中..." : t("settings.save")}
        </Button>
      </div>

      {/* Help Text */}
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded text-sm">
        <p className="font-medium mb-2">
          {t("settings.ai-agent.help-title") || "如何获取配置信息?"}
        </p>
        <ol className="list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-300">
          <li>{t("settings.ai-agent.help-step1") || "登录阿里云百炼控制台"}</li>
          <li>{t("settings.ai-agent.help-step2") || "创建或选择一个智能体应用"}</li>
          <li>{t("settings.ai-agent.help-step3") || "在应用详情页获取Agent ID"}</li>
          <li>{t("settings.ai-agent.help-step4") || "在API密钥管理页面创建API Key"}</li>
        </ol>
      </div>
    </div>
  );
});

export default BailianConfigSection;

