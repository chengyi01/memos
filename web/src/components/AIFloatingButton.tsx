import { Sparkles } from "lucide-react";
import { observer } from "mobx-react-lite";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { workspaceStore } from "@/store";

interface AIFloatingButtonProps {
  onClick: () => void;
  className?: string;
}

/**
 * AIFloatingButton - Floating button to open AI chat panel
 * Positioned at bottom-right corner with sparkles icon
 */
const AIFloatingButton = observer(({ onClick, className }: AIFloatingButtonProps) => {
  const { t } = useTranslation();
  
  // Check if AI is configured in workspace settings
  // TODO: Update this to read from actual AI setting once workspace_setting.proto is extended
  const aiConfig = (workspaceStore as any).state?.aiSetting;
  const isConfigured = aiConfig?.enabled && aiConfig?.apiKey && aiConfig?.agentId;

  // For now, always enable the button for testing (remove this later when backend is ready)
  const enabledForTesting = true;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={onClick}
            disabled={false} // Always enabled for testing
            size="icon"
            className={cn(
              "fixed bottom-20 right-5 w-14 h-14 rounded-full shadow-lg",
              // Use z-[9999] to ensure it's above all content
              "z-[9999]",
              "transition-all hover:scale-110",
              enabledForTesting || isConfigured
                ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800" 
                : "bg-gray-400 dark:bg-gray-600",
              className
            )}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{isConfigured ? t("ai-chat.title") : t("ai-chat.error.not-configured")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

export default AIFloatingButton;

