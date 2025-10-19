import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { conversationStore } from "@/store";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

interface AIChatPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * AIChatPanel - Main AI chat interface
 * Displays conversation messages and input area in a side sheet
 */
const AIChatPanel = observer(({ open, onOpenChange }: AIChatPanelProps) => {
  const { t } = useTranslation();
  const { activeConversation } = conversationStore;

  // Fetch active conversation when panel opens
  useEffect(() => {
    if (open && !activeConversation) {
      conversationStore.fetchActiveConversation(true);
    }
  }, [open, activeConversation]);

  const handleNewConversation = async () => {
    await conversationStore.createConversation();
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        className="w-[400px] sm:w-[400px] p-0 flex flex-col"
      >
        {/* Header */}
        <SheetHeader className="border-b border-border p-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <SheetTitle>{t("ai-chat.title")}</SheetTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleNewConversation}
              className="h-8 gap-1"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm">{t("ai-chat.new-conversation")}</span>
            </Button>
          </div>
        </SheetHeader>

        {/* Message List - Scrollable area */}
        <MessageList />

        {/* Input Area - Fixed at bottom */}
        <MessageInput />
      </SheetContent>
    </Sheet>
  );
});

export default AIChatPanel;

