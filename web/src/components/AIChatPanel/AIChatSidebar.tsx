import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Plus, Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { conversationStore } from "@/store";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { cn } from "@/lib/utils";

interface AIChatSidebarProps {
  className?: string;
}

/**
 * AIChatSidebar - Fixed right sidebar for AI chat
 * Always visible on desktop, displays AI conversation interface
 */
const AIChatSidebar = observer(({ className }: AIChatSidebarProps) => {
  const { t } = useTranslation();
  const { activeConversation, availableAgents, selectedAgentId } = conversationStore;

  // Fetch active conversation on mount (agent already initialized in store)
  useEffect(() => {
    // 智能体配置已在 conversationStore 初始化时加载，无需在此处重复初始化
    if (!activeConversation) {
      conversationStore.fetchActiveConversation(true);
    }
  }, [activeConversation]);

  const handleNewConversation = async () => {
    try {
      await conversationStore.createConversation();
      toast.success(t("ai-chat.conversation-created") || "已创建新会话");
    } catch (error) {
      console.error("Failed to create conversation:", error);
      toast.error(t("ai-chat.error.create-failed") || "创建会话失败");
    }
  };

  const handleAgentChange = (agentId: string) => {
    conversationStore.setSelectedAgent(agentId);
    const agent = availableAgents.find(a => a.id === agentId);
    if (agent) {
      toast.success(`${t("ai-chat.switched-to")} ${agent.name}` || `已切换到 ${agent.name}`);
    }
  };

  const selectedAgent = availableAgents.find(a => a.id === selectedAgentId);

  return (
    <aside
      className={cn(
        "fixed top-0 right-0 h-svh shrink-0",
        "border-l border-border bg-background",
        "flex flex-col",
        "w-[400px]", // Fixed width for AI chat
        className
      )}
    >
      {/* Header */}
      <div className="flex-shrink-0 border-b border-border p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{t("ai-chat.title")}</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleNewConversation}
            className="h-8"
            title={t("ai-chat.new-conversation")}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Agent Selector */}
        {availableAgents.length > 0 && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Bot className="w-3.5 h-3.5" />
              <span>{t("ai-chat.current-agent") || "当前智能体"}</span>
            </div>
            <Select value={selectedAgentId} onValueChange={handleAgentChange}>
              <SelectTrigger className="h-9">
                <SelectValue placeholder={t("ai-chat.select-agent") || "选择智能体"}>
                  {selectedAgent ? (
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{selectedAgent.name}</span>
                      {selectedAgent.description && (
                        <span className="text-xs text-muted-foreground truncate">
                          - {selectedAgent.description}
                        </span>
                      )}
                    </div>
                  ) : (
                    t("ai-chat.select-agent") || "选择智能体"
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {availableAgents.map((agent) => (
                  <SelectItem key={agent.id} value={agent.id}>
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{agent.name}</span>
                      {agent.description && (
                        <span className="text-xs text-muted-foreground">
                          {agent.description}
                        </span>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Message List - Scrollable area */}
      <div className="flex-1 overflow-y-auto">
        <MessageList />
      </div>

      {/* Input Area - Fixed at bottom */}
      <div className="flex-shrink-0">
        <MessageInput />
      </div>
    </aside>
  );
});

export default AIChatSidebar;

