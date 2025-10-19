import { makeAutoObservable, runInAction } from "mobx";
import type {
  Conversation,
  Message,
  SendMessageChunk,
  SendMessageChunk_ChunkType,
} from "@/types/proto/api/v1/conversation_service";

/**
 * ConversationStore manages AI chat conversations and messages
 * Handles streaming responses from the AI assistant
 */
class ConversationStore {
  /** The currently active conversation */
  activeConversation: Conversation | null = null;
  
  /** List of messages in the active conversation */
  messages: Message[] = [];
  
  /** Whether AI is currently streaming a response */
  isStreaming = false;
  
  /** Accumulated content from streaming chunks */
  streamingContent = "";
  
  /** Error message if any operation fails */
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Fetch the active conversation for the current user
   * @param createIfNotExists If true, create a new conversation if none exists
   */
  async fetchActiveConversation(createIfNotExists = true): Promise<void> {
    try {
      this.error = null;
      
      // TODO: Implement after conversationServiceClient is registered
      // const response = await conversationServiceClient.getActiveConversation({
      //   createIfNotExists,
      // });
      
      // Mock implementation for development
      const response: Conversation = {
        name: "conversations/mock-001",
        title: "新对话",
        creatorId: 1,
        messageCount: 0,
        createTime: { seconds: Math.floor(Date.now() / 1000), nanos: 0 },
        updateTime: { seconds: Math.floor(Date.now() / 1000), nanos: 0 },
      };
      
      runInAction(() => {
        this.activeConversation = response;
      });
      
      await this.fetchMessages();
    } catch (error: any) {
      runInAction(() => {
        this.error = error.message || "Failed to fetch active conversation";
      });
      console.error("Failed to fetch active conversation:", error);
    }
  }

  /**
   * Create a new conversation
   * @param title Optional title for the conversation
   */
  async createConversation(title?: string): Promise<void> {
    try {
      this.error = null;
      
      // TODO: Implement after conversationServiceClient is registered
      // const response = await conversationServiceClient.createConversation({
      //   title: title || `新对话 ${new Date().toLocaleString()}`,
      // });
      
      // Mock implementation for development
      const response: Conversation = {
        name: `conversations/mock-${Date.now()}`,
        title: title || `新对话 ${new Date().toLocaleString()}`,
        creatorId: 1,
        messageCount: 0,
        createTime: { seconds: Math.floor(Date.now() / 1000), nanos: 0 },
        updateTime: { seconds: Math.floor(Date.now() / 1000), nanos: 0 },
      };
      
      runInAction(() => {
        this.activeConversation = response;
        this.messages = [];
        this.streamingContent = "";
      });
    } catch (error: any) {
      runInAction(() => {
        this.error = error.message || "Failed to create conversation";
      });
      console.error("Failed to create conversation:", error);
    }
  }

  /**
   * Fetch messages for the active conversation
   * @param pageToken Optional page token for pagination
   */
  async fetchMessages(pageToken?: string): Promise<void> {
    if (!this.activeConversation) return;
    
    try {
      this.error = null;
      
      // TODO: Implement after conversationServiceClient is registered
      // const response = await conversationServiceClient.listMessages({
      //   conversation: this.activeConversation.name,
      //   pageSize: 50,
      //   pageToken: pageToken || "",
      // });
      
      // Mock implementation for development
      const response = {
        messages: [] as Message[],
        nextPageToken: "",
      };
      
      runInAction(() => {
        this.messages = response.messages;
      });
    } catch (error: any) {
      runInAction(() => {
        this.error = error.message || "Failed to fetch messages";
      });
      console.error("Failed to fetch messages:", error);
    }
  }

  /**
   * Send a message and handle streaming AI response
   * @param content The message content
   * @param attachments List of attachment names
   */
  async sendMessage(content: string, attachments: string[] = []): Promise<void> {
    if (!this.activeConversation || !content.trim()) return;

    try {
      this.error = null;
      this.isStreaming = true;
      this.streamingContent = "";

      // TODO: Implement after conversationServiceClient is registered
      // const stream = conversationServiceClient.sendMessage({
      //   conversation: this.activeConversation.name,
      //   content,
      //   attachments,
      // });
      //
      // for await (const chunk of stream) {
      //   this.handleMessageChunk(chunk);
      // }
      
      // Mock implementation for development
      // Simulate user message
      this.handleMessageChunk({
        type: 1, // USER_MESSAGE
        message: {
          name: `messages/mock-${Date.now()}`,
          conversation: this.activeConversation.name,
          role: "user",
          content,
          attachments: [],
          createTime: { seconds: Math.floor(Date.now() / 1000), nanos: 0 },
        },
        contentDelta: "",
        error: "",
      });
      
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 500));
      this.handleMessageChunk({
        type: 2, // ASSISTANT_START
        contentDelta: "",
        error: "",
      });
      
      // Simulate streaming content
      const mockResponse = "这是一个模拟的AI回复。实际回复将来自阿里云百炼AI。";
      for (let i = 0; i < mockResponse.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        this.handleMessageChunk({
          type: 3, // ASSISTANT_CONTENT
          contentDelta: mockResponse[i],
          error: "",
        });
      }
      
      // Simulate end
      await new Promise(resolve => setTimeout(resolve, 200));
      this.handleMessageChunk({
        type: 4, // ASSISTANT_END
        message: {
          name: `messages/mock-${Date.now()}`,
          conversation: this.activeConversation.name,
          role: "assistant",
          content: mockResponse,
          attachments: [],
          createTime: { seconds: Math.floor(Date.now() / 1000), nanos: 0 },
        },
        contentDelta: "",
        error: "",
      });
      
    } catch (error: any) {
      runInAction(() => {
        this.error = error.message || "Failed to send message";
      });
      console.error("Failed to send message:", error);
    } finally {
      runInAction(() => {
        this.isStreaming = false;
      });
    }
  }

  /**
   * Handle a single streaming message chunk
   * @param chunk The message chunk from the server
   */
  private handleMessageChunk(chunk: SendMessageChunk): void {
    runInAction(() => {
      switch (chunk.type) {
        case 1: // USER_MESSAGE
          if (chunk.message) {
            this.messages.push(chunk.message);
          }
          break;
          
        case 2: // ASSISTANT_START
          this.streamingContent = "";
          break;
          
        case 3: // ASSISTANT_CONTENT
          this.streamingContent += chunk.contentDelta || "";
          break;
          
        case 4: // ASSISTANT_END
          if (chunk.message) {
            this.messages.push(chunk.message);
          }
          this.streamingContent = "";
          break;
          
        case 5: // ERROR
          this.error = chunk.error || "发送失败";
          break;
      }
    });
  }

  /**
   * Reset all state to initial values
   */
  reset(): void {
    this.activeConversation = null;
    this.messages = [];
    this.isStreaming = false;
    this.streamingContent = "";
    this.error = null;
  }
}

export const conversationStore = new ConversationStore();
export default conversationStore;

