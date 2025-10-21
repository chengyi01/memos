import { observer } from "mobx-react-lite";
import { useState, useMemo, useEffect } from "react";
import { isEqual } from "lodash-es";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Plus, Pencil, Trash2, Check, X, Loader2, TestTube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { workspaceStore } from "@/store";
import { workspaceSettingNamePrefix } from "@/store/common";
import {
  WorkspaceSetting_Key,
  WorkspaceSetting,
  WorkspaceSetting_AISetting,
  WorkspaceSetting_AISetting_AIAgent,
} from "@/types/proto/api/v1/workspace_service";
import { workspaceServiceClient } from "@/grpcweb";

/**
 * AIAgent represents a single AI agent configuration
 */
interface AIAgent {
  id: string;           // Agent ID from Bailian
  name: string;         // Display name
  description: string;  // Description/note
  createdTs: number;    // Creation timestamp
}

/**
 * Bailian AI Configuration
 */
interface BailianConfig {
  enabled: boolean;
  apiKey: string;
  endpoint: string;
  temperature: number;
  maxTokens: number;
  agents: AIAgent[];
  defaultAgentId: string;
}

const DEFAULT_CONFIG: BailianConfig = {
  enabled: false,
  apiKey: "",
  endpoint: "https://dashscope.aliyuncs.com/api/v1",
  temperature: 0.7,
  maxTokens: 2000,
  agents: [],
  defaultAgentId: "",
};

/**
 * Convert Proto AISetting to BailianConfig
 */
function convertProtoToConfig(aiSetting: WorkspaceSetting_AISetting | undefined): BailianConfig {
  if (!aiSetting) {
    return DEFAULT_CONFIG;
  }
  return {
    enabled: aiSetting.enabled || false,
    apiKey: aiSetting.apiKey || "",
    endpoint: aiSetting.endpoint || DEFAULT_CONFIG.endpoint,
    temperature: aiSetting.temperature || DEFAULT_CONFIG.temperature,
    maxTokens: aiSetting.maxTokens || DEFAULT_CONFIG.maxTokens,
    agents: (aiSetting.agents || []).map((a) => ({
      id: a.id,
      name: a.name,
      description: a.description,
      createdTs: Number(a.createdTs),
    })),
    defaultAgentId: aiSetting.defaultAgentId || "",
  };
}

/**
 * Convert BailianConfig to Proto AISetting
 */
function convertConfigToProto(config: BailianConfig): WorkspaceSetting_AISetting {
  return WorkspaceSetting_AISetting.fromPartial({
    enabled: config.enabled,
    apiKey: config.apiKey,
    endpoint: config.endpoint,
    temperature: config.temperature,
    maxTokens: config.maxTokens,
    agents: config.agents.map((a) => ({
      id: a.id,
      name: a.name,
      description: a.description,
      createdTs: BigInt(a.createdTs),
    })),
    defaultAgentId: config.defaultAgentId,
  });
}

/**
 * BailianConfigSection - Workspace settings for Alibaba Cloud Bailian AI
 * Allows administrators to configure API credentials and manage multiple AI agents
 */
const BailianConfigSection = observer(() => {
  const { t } = useTranslation();
  
  const [config, setConfig] = useState<BailianConfig>(DEFAULT_CONFIG);
  const [initialConfig, setInitialConfig] = useState<BailianConfig>(DEFAULT_CONFIG);
  const [testingAgentId, setTestingAgentId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load AI configuration on mount
  useEffect(() => {
    const loadConfig = async () => {
      try {
        setLoading(true);
        await workspaceStore.fetchWorkspaceSetting(WorkspaceSetting_Key.AI);
        const aiSetting = workspaceStore.state.aiSetting;
        const loadedConfig = convertProtoToConfig(aiSetting);
        setConfig(loadedConfig);
        setInitialConfig(loadedConfig);
      } catch (error) {
        console.error("Failed to load AI config:", error);
        // Use default config on error
        setConfig(DEFAULT_CONFIG);
        setInitialConfig(DEFAULT_CONFIG);
      } finally {
        setLoading(false);
      }
    };
    loadConfig();
  }, []);
  
  // Agent editing state
  const [editingAgent, setEditingAgent] = useState<AIAgent | null>(null);
  const [isAddingAgent, setIsAddingAgent] = useState(false);
  const [agentForm, setAgentForm] = useState<Partial<AIAgent>>({
    id: "",
    name: "",
    description: "",
  });

  // Check if save button should be enabled
  const allowSave = useMemo(() => {
    if (config.enabled && !config.apiKey) {
      return false;
    }
    return !isEqual(initialConfig, config);
  }, [config, initialConfig]);

  const handleFieldChange = (field: keyof BailianConfig, value: any) => {
    setConfig({
      ...config,
      [field]: value,
    });
  };

  const handleTestAgent = async (agent: AIAgent) => {
    if (!config.apiKey) {
      toast.error(t("setting.ai-agent-section.error.missing-api-key") || "请先填写API Key");
      return;
    }

    setTestingAgentId(agent.id);
    try {
      const response = await workspaceServiceClient.testAIAgent({
        apiKey: config.apiKey,
        endpoint: config.endpoint,
        agentId: agent.id,
      });

      if (response.success) {
        const latencyText = response.latencyMs ? ` (${response.latencyMs}ms)` : "";
        toast.success(
          `${t("setting.ai-agent-section.test-success") || "测试成功"}: ${agent.name}${latencyText}`
        );
      } else {
        toast.error(
          `${t("setting.ai-agent-section.test-failed") || "测试失败"}: ${response.message}`
        );
      }
    } catch (error: any) {
      toast.error(
        `${t("setting.ai-agent-section.test-failed") || "测试失败"}: ${error.message}`
      );
      console.error("Test agent failed:", error);
    } finally {
      setTestingAgentId(null);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const aiSetting = convertConfigToProto(config);
      await workspaceStore.upsertWorkspaceSetting(
        WorkspaceSetting.fromPartial({
          name: `${workspaceSettingNamePrefix}${WorkspaceSetting_Key.AI}`,
          aiSetting: aiSetting,
        })
      );
      setInitialConfig(config);
      toast.success(t("setting.save-success"));
    } catch (error: any) {
      toast.error(`${t("setting.save-failed")}: ${error.message}`);
      console.error("Save failed:", error);
    } finally {
      setSaving(false);
    }
  };

  // Agent management handlers
  const handleAddAgent = () => {
    setIsAddingAgent(true);
    setEditingAgent(null);
    setAgentForm({
      id: "",
      name: "",
      description: "",
    });
  };

  const handleEditAgent = (agent: AIAgent) => {
    setEditingAgent(agent);
    setIsAddingAgent(false);
    setAgentForm({
      id: agent.id,
      name: agent.name,
      description: agent.description,
    });
  };

  const handleDeleteAgent = (agentId: string) => {
    if (!confirm(t("setting.ai-agent-section.confirm-delete") || "确定要删除这个智能体吗?")) {
      return;
    }

    const updatedAgents = config.agents.filter(a => a.id !== agentId);
    let newDefaultAgentId = config.defaultAgentId;
    
    // If deleted agent was default, clear default
    if (config.defaultAgentId === agentId) {
      newDefaultAgentId = updatedAgents.length > 0 ? updatedAgents[0].id : "";
    }

    setConfig({
      ...config,
      agents: updatedAgents,
      defaultAgentId: newDefaultAgentId,
    });
    
    toast.success(t("setting.ai-agent-section.agent-deleted") || "智能体已删除");
  };

  const handleSaveAgent = () => {
    if (!agentForm.id || !agentForm.name) {
      toast.error(t("setting.ai-agent-section.error.missing-agent-info") || "请填写智能体ID和名称");
      return;
    }

    const agent: AIAgent = {
      id: agentForm.id.trim(),
      name: agentForm.name.trim(),
      description: agentForm.description?.trim() || "",
      createdTs: editingAgent?.createdTs || Date.now(),
    };

    let updatedAgents: AIAgent[];
    if (editingAgent) {
      // Update existing agent
      updatedAgents = config.agents.map(a => a.id === editingAgent.id ? agent : a);
      toast.success(t("setting.ai-agent-section.agent-updated") || "智能体已更新");
    } else {
      // Check duplicate ID
      if (config.agents.some(a => a.id === agent.id)) {
        toast.error(t("setting.ai-agent-section.error.duplicate-id") || "智能体ID已存在");
        return;
      }
      // Add new agent
      updatedAgents = [...config.agents, agent];
      toast.success(t("setting.ai-agent-section.agent-added") || "智能体已添加");
    }

    setConfig({
      ...config,
      agents: updatedAgents,
      defaultAgentId: config.defaultAgentId || agent.id, // Set first agent as default
    });

    // Reset form
    setIsAddingAgent(false);
    setEditingAgent(null);
    setAgentForm({ id: "", name: "", description: "" });
  };

  const handleCancelAgentEdit = () => {
    setIsAddingAgent(false);
    setEditingAgent(null);
    setAgentForm({ id: "", name: "", description: "" });
  };

  const handleSetDefaultAgent = (agentId: string) => {
    setConfig({
      ...config,
      defaultAgentId: agentId,
    });
    toast.success(t("setting.ai-agent-section.default-agent-set") || "已设置默认智能体");
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">{t("setting.ai-agent-section.title")}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t("common.loading")}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold mb-2">{t("setting.ai-agent-section.title")}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t("setting.ai-agent-section.description") || "配置阿里云百炼AI智能体，为用户提供AI对话功能"}
        </p>
      </div>

      {/* Enable Switch */}
      <div className="flex items-center justify-between">
        <Label htmlFor="enabled" className="flex-1">
          <div>
            <div className="font-medium">{t("setting.ai-agent-section.enabled")}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t("setting.ai-agent-section.enabled-hint") || "启用后用户可以使用AI对话功能"}
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
          {t("setting.ai-agent-section.api-key")} <span className="text-red-500">*</span>
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
          {t("setting.ai-agent-section.api-key-hint") || "从阿里云百炼控制台获取"}
        </p>
      </div>

      {/* Endpoint */}
      <div className="space-y-2">
        <Label htmlFor="endpoint">{t("setting.ai-agent-section.endpoint")}</Label>
        <Input
          id="endpoint"
          value={config.endpoint}
          onChange={(e) => handleFieldChange("endpoint", e.target.value)}
          disabled={!config.enabled}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {t("setting.ai-agent-section.endpoint-hint") || "保持默认值即可"}
        </p>
      </div>

      {/* Advanced Settings */}
      <details className="border border-border rounded p-4">
        <summary className="cursor-pointer font-medium">
          {t("setting.ai-agent-section.advanced") || "高级设置"}
        </summary>
        <div className="mt-4 space-y-4">
          {/* Temperature */}
          <div className="space-y-2">
            <Label htmlFor="temperature">
              {t("setting.ai-agent-section.temperature")} ({config.temperature})
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
              {t("setting.ai-agent-section.temperature-hint") || "控制回复的随机性,0=确定性,2=创造性"}
            </p>
          </div>

          {/* Max Tokens */}
          <div className="space-y-2">
            <Label htmlFor="max-tokens">{t("setting.ai-agent-section.max-tokens")}</Label>
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
              {t("setting.ai-agent-section.max-tokens-hint") || "AI回复的最大长度"}
            </p>
          </div>
        </div>
      </details>

      {/* AI Agents Section */}
      <div className="border-t pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-medium">{t("setting.ai-agent-section.agents-title") || "智能体列表"}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("setting.ai-agent-section.agents-description") || "管理可用的AI智能体，用户可以在对话中切换"}
            </p>
          </div>
          <Button
            onClick={handleAddAgent}
            disabled={!config.enabled || isAddingAgent}
            size="sm"
          >
            <Plus className="w-4 h-4 mr-1" />
            {t("setting.ai-agent-section.add-agent") || "添加智能体"}
          </Button>
        </div>

        {/* Agent Form (Add/Edit) */}
        {(isAddingAgent || editingAgent) && (
          <div className="border border-border rounded p-4 mb-4 bg-gray-50 dark:bg-gray-900">
            <h4 className="font-medium mb-3">
              {editingAgent 
                ? (t("setting.ai-agent-section.edit-agent") || "编辑智能体")
                : (t("setting.ai-agent-section.add-agent") || "添加智能体")
              }
            </h4>
            <div className="space-y-3">
              <div>
                <Label htmlFor="agent-id">
                  {t("setting.ai-agent-section.agent-id")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="agent-id"
                  value={agentForm.id || ""}
                  onChange={(e) => setAgentForm({ ...agentForm, id: e.target.value })}
                  placeholder="agent_xxxxxxxx"
                  disabled={!!editingAgent} // Cannot change ID when editing
                />
              </div>
              <div>
                <Label htmlFor="agent-name">
                  {t("setting.ai-agent-section.agent-name")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="agent-name"
                  value={agentForm.name || ""}
                  onChange={(e) => setAgentForm({ ...agentForm, name: e.target.value })}
                  placeholder={t("setting.ai-agent-section.agent-name-placeholder") || "例如: 通用助手"}
                />
              </div>
              <div>
                <Label htmlFor="agent-description">
                  {t("setting.ai-agent-section.agent-description")}
                </Label>
                <Textarea
                  id="agent-description"
                  value={agentForm.description || ""}
                  onChange={(e) => setAgentForm({ ...agentForm, description: e.target.value })}
                  placeholder={t("setting.ai-agent-section.agent-description-placeholder") || "描述这个智能体的特点或用途"}
                  rows={2}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSaveAgent} size="sm">
                  <Check className="w-4 h-4 mr-1" />
                  {t("common.save") || "保存"}
                </Button>
                <Button onClick={handleCancelAgentEdit} variant="outline" size="sm">
                  <X className="w-4 h-4 mr-1" />
                  {t("common.cancel") || "取消"}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Agent List */}
        {config.agents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {t("setting.ai-agent-section.no-agents") || "暂无智能体，点击上方按钮添加"}
          </div>
        ) : (
          <div className="space-y-2">
            {config.agents.map((agent) => (
              <div
                key={agent.id}
                className="border border-border rounded p-3 flex items-start justify-between hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{agent.name}</h4>
                    {config.defaultAgentId === agent.id && (
                      <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                        {t("setting.ai-agent-section.default") || "默认"}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    ID: {agent.id}
                  </p>
                  {agent.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                      {agent.description}
                    </p>
                  )}
                </div>
                <div className="flex gap-1 ml-4">
                  {/* 测试按钮 */}
                  <Button
                    onClick={() => handleTestAgent(agent)}
                    variant="ghost"
                    size="sm"
                    disabled={!config.apiKey || testingAgentId === agent.id}
                    title={t("setting.ai-agent-section.test-agent-hint") || "测试此智能体的连接"}
                  >
                    {testingAgentId === agent.id ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                        {t("setting.ai-agent-section.testing") || "测试中..."}
                      </>
                    ) : (
                      <>
                        <TestTube className="w-4 h-4 mr-1" />
                        {t("setting.ai-agent-section.test") || "测试"}
                      </>
                    )}
                  </Button>
                  {/* 设为默认按钮 */}
                  {config.defaultAgentId !== agent.id && (
                    <Button
                      onClick={() => handleSetDefaultAgent(agent.id)}
                      variant="ghost"
                      size="sm"
                      title={t("setting.ai-agent-section.set-default") || "设为默认"}
                    >
                      {t("setting.ai-agent-section.set-default") || "设为默认"}
                    </Button>
                  )}
                  {/* 编辑按钮 */}
                  <Button
                    onClick={() => handleEditAgent(agent)}
                    variant="ghost"
                    size="sm"
                    disabled={isAddingAgent || editingAgent !== null}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  {/* 删除按钮 */}
                  <Button
                    onClick={() => handleDeleteAgent(agent.id)}
                    variant="ghost"
                    size="sm"
                    disabled={isAddingAgent || editingAgent !== null}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 border-t pt-6">
        <Button 
          onClick={handleSave} 
          disabled={saving || !allowSave}
        >
          {saving ? t("setting.saving") || "保存中..." : t("setting.save")}
        </Button>
      </div>

      {/* Help Text */}
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded text-sm">
        <p className="font-medium mb-2">
          {t("setting.ai-agent-section.help-title") || "如何获取配置信息?"}
        </p>
        <ol className="list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-300">
          <li>{t("setting.ai-agent-section.help-step1") || "登录阿里云百炼控制台"}</li>
          <li>{t("setting.ai-agent-section.help-step2") || "创建或选择一个智能体应用"}</li>
          <li>{t("setting.ai-agent-section.help-step3") || "在应用详情页获取Agent ID"}</li>
          <li>{t("setting.ai-agent-section.help-step4") || "在API密钥管理页面创建API Key"}</li>
          <li>{t("setting.ai-agent-section.help-step5") || "可以添加多个智能体，用户在对话时可以切换"}</li>
        </ol>
      </div>
    </div>
  );
});

export default BailianConfigSection;
