import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
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
  const { activeConversation } = conversationStore;

  // Fetch active conversation on mount
  useEffect(() => {
    if (!activeConversation) {
      conversationStore.fetchActiveConversation(true);
    }
  }, [activeConversation]);

  const handleNewConversation = async () => {
    try {
      await conversationStore.createConversation();
      toast.success("已创建新会话");
    } catch (error) {
      console.error("Failed to create conversation:", error);
      toast.error("创建会话失败");
    }
  };

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
      <div className="flex-shrink-0 border-b border-border p-4">
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
      </div>

      {/* Message List - Scrollable area */}
      <div className="flex-1 overflow-hidden">
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

