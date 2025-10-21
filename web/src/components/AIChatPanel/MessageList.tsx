import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { conversationStore } from "@/store";
import MessageItem from "./MessageItem";

/**
 * MessageList - Displays the list of messages in a conversation
 * Includes empty state, loading state, and error handling
 */
const MessageList = observer(() => {
  const { t } = useTranslation();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, isStreaming, streamingContent, error } = conversationStore;

  // Auto-scroll to latest message when new messages arrive or streaming updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, streamingContent]);

  // Empty state - show welcome message
  if (messages.length === 0 && !isStreaming) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <div className="text-6xl mb-4">🤖</div>
        <h3 className="text-lg font-semibold mb-2">{t("ai-chat.welcome")}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{t("ai-chat.hint")}</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Existing messages */}
      {messages.map((message) => (
        <MessageItem key={message.uid} message={message} />
      ))}

      {/* Streaming message from AI */}
      {isStreaming && streamingContent && (
        <MessageItem
          message={{
            uid: "streaming-temp",
            conversation: "",
            role: "assistant",
            content: "",
            attachments: [],
          }}
          isStreaming
          streamingContent={streamingContent}
        />
      )}

      {/* Loading indicator when streaming starts */}
      {isStreaming && !streamingContent && (
        <div className="flex items-center gap-2 p-4 text-gray-500 dark:text-gray-400">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm">{t("ai-chat.thinking")}</span>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="p-4 mx-4 my-2 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded text-red-700 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Scroll anchor */}
      <div ref={messagesEndRef} />
    </div>
  );
});

export default MessageList;

