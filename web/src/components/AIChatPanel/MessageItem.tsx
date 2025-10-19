import { observer } from "mobx-react-lite";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/UserAvatar";
import useCurrentUser from "@/hooks/useCurrentUser";
import type { Message } from "@/types/proto/api/v1/conversation_service";

dayjs.extend(relativeTime);

interface MessageItemProps {
  message: Message;
  isStreaming?: boolean;
  streamingContent?: string;
}

/**
 * MessageItem - Displays a single message in the conversation
 * Supports both user and assistant messages with Markdown rendering
 */
const MessageItem = observer(({ message, isStreaming, streamingContent }: MessageItemProps) => {
  const currentUser = useCurrentUser();
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";
  const content = isStreaming ? streamingContent : message.content;

  return (
    <div className={cn("flex gap-3 p-4", isUser ? "flex-row-reverse" : "flex-row")}>
      {/* Avatar */}
      <div className="flex-shrink-0">
        {isUser ? (
          <UserAvatar avatarUrl={currentUser.avatarUrl} className="w-8 h-8 rounded-full" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">AI</span>
          </div>
        )}
      </div>

      {/* Message Content */}
      <div className={cn("flex flex-col gap-1 max-w-[80%]", isUser ? "items-end" : "items-start")}>
        <div
          className={cn(
            "rounded-lg px-4 py-2",
            isUser 
              ? "bg-blue-600 text-white" 
              : "bg-gray-100 dark:bg-gray-800 text-foreground"
          )}
        >
          {isAssistant ? (
            <div className="prose dark:prose-invert max-w-none prose-sm">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  // Customize link rendering
                  a: ({ node, ...props }) => (
                    <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline" />
                  ),
                  // Customize code block rendering
                  pre: ({ node, ...props }) => (
                    <pre {...props} className="bg-gray-900 dark:bg-gray-950 text-gray-100 rounded p-2 overflow-x-auto" />
                  ),
                  code: ({ node, ...props }) => (
                    <code {...props} className="bg-gray-800 dark:bg-gray-900 text-gray-100 rounded px-1" />
                  ),
                }}
              >
                {content || ""}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="whitespace-pre-wrap break-words">{content}</p>
          )}
          
          {/* Streaming cursor */}
          {isStreaming && <span className="inline-block w-2 h-4 bg-current animate-pulse ml-1" />}
        </div>

        {/* Attachments */}
        {message.attachments && message.attachments.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {message.attachments.map((attachment) => (
              <img
                key={attachment.uid}
                src={attachment.url}
                alt={attachment.filename}
                className="w-24 h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => window.open(attachment.url, "_blank")}
              />
            ))}
          </div>
        )}

        {/* Timestamp */}
        {message.createTime && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {dayjs(message.createTime.seconds * 1000).fromNow()}
          </span>
        )}
      </div>
    </div>
  );
});

export default MessageItem;

