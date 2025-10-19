import { observer } from "mobx-react-lite";
import { useState, useRef, KeyboardEvent } from "react";
import { Paperclip, Send, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { conversationStore } from "@/store";

/**
 * MessageInput - Input area for sending messages
 * Supports text input, attachments, and keyboard shortcuts
 */
const MessageInput = observer(() => {
  const { t } = useTranslation();
  const [content, setContent] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isStreaming } = conversationStore;

  const handleSend = async () => {
    if (!content.trim() || isStreaming) return;

    try {
      // TODO: Upload attachments and get attachment IDs
      // For now, just pass empty array
      const attachmentIds: string[] = [];

      await conversationStore.sendMessage(content.trim(), attachmentIds);
      setContent("");
      setAttachments([]);
      
      // Focus back to textarea after sending
      textareaRef.current?.focus();
    } catch (error) {
      toast.error(t("ai-chat.error.send-failed"));
      console.error("Failed to send message:", error);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Send on Enter (without Shift)
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    // Limit to 5 attachments
    if (files.length + attachments.length > 5) {
      toast.error(t("ai-chat.error.too-many-attachments") || "最多上传5个附件");
      return;
    }
    
    setAttachments([...attachments, ...files]);
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <div className="border-t border-border bg-background p-4 space-y-2">
      {/* Attachments preview */}
      {attachments.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {attachments.map((file, index) => (
            <div key={index} className="relative w-20 h-20 group">
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="w-full h-full object-cover rounded border border-border"
              />
              <button
                onClick={() => removeAttachment(index)}
                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3 text-white" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input area */}
      <div className="flex gap-2 items-end">
        <Textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t("ai-chat.input-placeholder")}
          disabled={isStreaming}
          className="flex-1 min-h-[60px] max-h-[120px] resize-none"
          rows={2}
        />

        <div className="flex gap-2">
          {/* Attachment button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => fileInputRef.current?.click()}
            disabled={isStreaming}
            title={t("ai-chat.upload-attachment")}
          >
            <Paperclip className="w-4 h-4" />
          </Button>

          {/* Send button */}
          <Button 
            onClick={handleSend} 
            disabled={!content.trim() || isStreaming}
            title={t("ai-chat.send")}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileSelect}
      />
    </div>
  );
});

export default MessageInput;

