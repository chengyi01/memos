import { makeAutoObservable, runInAction } from "mobx";
import type {
  Conversation,
  Message,
  SendMessageChunk,
} from "@/types/proto/api/v1/conversation_service";
import { SendMessageChunk_ChunkType } from "@/types/proto/api/v1/conversation_service";
import { conversationServiceClient } from "@/grpcweb";
import { workspaceStore } from "./";

/**
 * AIAgent represents a single AI agent configuration
 */
export interface AIAgent {
  id: string;
  name: string;
  description: string;
  createdTs: number;
}

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

  /** Currently selected agent ID */
  selectedAgentId: string = "";

  /** List of available agents from workspace settings */
  get availableAgents(): AIAgent[] {
    try {
      const aiSetting = (workspaceStore as any).state?.aiSetting;
      if (!aiSetting || !aiSetting.agents || aiSetting.agents.length === 0) {
        // 如果 AI 设置不可用（如权限不足），返回硬编码的默认智能体
        return this.getFallbackAgents();
      }
      return aiSetting.agents;
    } catch (e) {
      // workspaceStore not yet initialized，返回硬编码的默认智能体
      return this.getFallbackAgents();
    }
  }

  /** 获取后备智能体列表（当 AI 设置不可用时使用）*/
  private getFallbackAgents(): AIAgent[] {
    return [
      {
        id: "39231835c6a644338413dcdae97dbf9e",
        name: "默认智能体",
        description: "系统默认 AI 助手",
        createdTs: Date.now(),
      }
    ];
  }

  /** Get default agent ID from workspace settings */
  get defaultAgentId(): string {
    try {
      const aiSetting = (workspaceStore as any).state?.aiSetting;
      return aiSetting?.defaultAgentId || "";
    } catch (e) {
      // workspaceStore not yet initialized
      return "";
    }
  }

  constructor() {
    makeAutoObservable(this);
    // 使用 setTimeout 确保 workspaceStore 已完成初始化后再加载智能体配置
    setTimeout(async () => {
      // 尝试加载 AI 设置（如果尚未加载）
      await (workspaceStore as any).fetchAISettingIfNeeded?.();
      // 初始化智能体选择
      this.initializeSelectedAgent();
      this.loadSelectedAgent();
    }, 0);
  }

  /**
   * Initialize selected agent with default from settings
   * 在 store 构造时自动调用，确保页面打开时智能体配置已加载
   */
  initializeSelectedAgent() {
    if (!this.selectedAgentId && this.defaultAgentId) {
      this.selectedAgentId = this.defaultAgentId;
    }
  }

  /**
   * Set the selected agent
   */
  setSelectedAgent(agentId: string) {
    this.selectedAgentId = agentId;
    // Save preference to localStorage
    localStorage.setItem("selectedAgentId", agentId);
  }

  /**
   * Load selected agent from localStorage or use default
   */
  loadSelectedAgent() {
    // 硬编码的默认 agent ID
    const hardcodedDefaultAgentId = "39231835c6a644338413dcdae97dbf9e";
    
    const savedAgentId = localStorage.getItem("selectedAgentId");
    
    // 优先级：
    // 1. localStorage 中保存的选择（用户自己选的）
    // 2. 硬编码的默认 agent
    // 3. 系统配置的默认 agent
    // 4. 第一个可用的 agent
    if (savedAgentId && this.availableAgents.some(a => a.id === savedAgentId)) {
      this.selectedAgentId = savedAgentId;
    } else if (this.availableAgents.some(a => a.id === hardcodedDefaultAgentId)) {
      this.selectedAgentId = hardcodedDefaultAgentId;
    } else if (this.defaultAgentId) {
      this.selectedAgentId = this.defaultAgentId;
    } else if (this.availableAgents.length > 0) {
      this.selectedAgentId = this.availableAgents[0].id;
    }
  }

  /**
   * Fetch the active conversation for the current user
   * @param createIfNotExists If true, create a new conversation if none exists
   */
  async fetchActiveConversation(createIfNotExists = true): Promise<void> {
    try {
      this.error = null;
      
      const response = await conversationServiceClient.getActiveConversation({
        createIfNotExists,
      });
      
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
      
      const response = await conversationServiceClient.createConversation({
        title: title || `新对话 ${new Date().toLocaleString()}`,
      });
      
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
      
      const response = await conversationServiceClient.listMessages({
        conversation: this.activeConversation.uid,
        pageSize: 50,
        pageToken: pageToken || "",
      });
      
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

    // 乐观更新：立即添加用户消息到界面（临时消息）
    const tempMessageUid = `temp-${Date.now()}`;
    const optimisticMessage: Message = {
      uid: tempMessageUid,
      conversation: this.activeConversation.uid,
      role: "user",
      content: content.trim(),
      attachments: [],
      createTime: new Date(),
    };
    
    runInAction(() => {
      this.messages.push(optimisticMessage);
    });

    try {
      this.error = null;
      this.isStreaming = true;
      this.streamingContent = "";

      const stream = conversationServiceClient.sendMessage({
        conversation: this.activeConversation.uid,
        content,
        attachments,
        agentId: this.selectedAgentId,  // Pass selected agent ID
      });

      for await (const chunk of stream) {
        this.handleMessageChunk(chunk, tempMessageUid);
      }
      
    } catch (error: any) {
      // 发送失败，移除乐观更新的消息
      runInAction(() => {
        this.messages = this.messages.filter(m => m.uid !== tempMessageUid);
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
   * @param tempMessageUid Optional temporary message UID to replace
   */
  private handleMessageChunk(chunk: SendMessageChunk, tempMessageUid?: string): void {
    runInAction(() => {
      switch (chunk.type) {
        case SendMessageChunk_ChunkType.USER_MESSAGE:
          if (chunk.message) {
            // 如果有临时消息，替换它；否则直接添加
            if (tempMessageUid) {
              const tempIndex = this.messages.findIndex(m => m.uid === tempMessageUid);
              if (tempIndex !== -1) {
                this.messages[tempIndex] = chunk.message;
              } else {
                this.messages.push(chunk.message);
              }
            } else {
              this.messages.push(chunk.message);
            }
          }
          break;
          
        case SendMessageChunk_ChunkType.ASSISTANT_START:
          this.streamingContent = "";
          break;
          
        case SendMessageChunk_ChunkType.ASSISTANT_CONTENT:
          this.streamingContent += chunk.contentDelta || "";
          break;
          
        case SendMessageChunk_ChunkType.ASSISTANT_END:
          if (chunk.message) {
            this.messages.push(chunk.message);
          }
          this.streamingContent = "";
          break;
          
        case SendMessageChunk_ChunkType.ERROR:
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

