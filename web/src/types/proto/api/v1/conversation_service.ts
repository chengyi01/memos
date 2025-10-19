/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import type { Timestamp } from "../../../google/protobuf/timestamp";
import type { Attachment } from "./attachment_service";

/**
 * Conversation represents a conversation/chat session
 * Format: conversations/{uid}
 */
export interface Conversation {
  /** The name of the conversation. Format: conversations/{uid} */
  name: string;
  /** The title of the conversation */
  title: string;
  /** The ID of the creator */
  creatorId: number;
  /** The number of messages in the conversation */
  messageCount: number;
  /** The timestamp of the last message */
  lastMessageAt?: Timestamp;
  /** The timestamp when the conversation was created */
  createTime?: Timestamp;
  /** The timestamp when the conversation was last updated */
  updateTime?: Timestamp;
}

/**
 * Message represents a single message in a conversation
 */
export interface Message {
  /** The name of the message. Format: messages/{uid} */
  name: string;
  /** The conversation this message belongs to. Format: conversations/{uid} */
  conversation: string;
  /** The role of the message sender: "user" or "assistant" */
  role: string;
  /** The content of the message */
  content: string;
  /** List of attachments associated with the message */
  attachments: Attachment[];
  /** The timestamp when the message was created */
  createTime?: Timestamp;
}

/**
 * Request to create a new conversation
 */
export interface CreateConversationRequest {
  /** The title of the conversation */
  title: string;
}

/**
 * Request to get the active conversation
 */
export interface GetActiveConversationRequest {
  /** If true, create a new conversation if none exists */
  createIfNotExists: boolean;
}

/**
 * Request to send a message
 */
export interface SendMessageRequest {
  /** The conversation to send the message to. Format: conversations/{uid} */
  conversation: string;
  /** The content of the message */
  content: string;
  /** List of attachment names to attach to the message */
  attachments: string[];
}

/**
 * Chunk type for streaming message responses
 */
export enum SendMessageChunk_ChunkType {
  CHUNK_TYPE_UNSPECIFIED = 0,
  /** USER_MESSAGE - User message has been saved */
  USER_MESSAGE = 1,
  /** ASSISTANT_START - AI has started responding */
  ASSISTANT_START = 2,
  /** ASSISTANT_CONTENT - AI content chunk */
  ASSISTANT_CONTENT = 3,
  /** ASSISTANT_END - AI response completed */
  ASSISTANT_END = 4,
  /** ERROR - An error occurred */
  ERROR = 5,
}

/**
 * A chunk of a streaming message response
 */
export interface SendMessageChunk {
  /** The type of this chunk */
  type: SendMessageChunk_ChunkType;
  /** Full message for USER_MESSAGE and ASSISTANT_END types */
  message?: Message;
  /** Content delta for ASSISTANT_CONTENT type */
  contentDelta: string;
  /** Error message for ERROR type */
  error: string;
}

/**
 * Request to list messages in a conversation
 */
export interface ListMessagesRequest {
  /** The conversation to list messages from. Format: conversations/{uid} */
  conversation: string;
  /** Maximum number of messages to return */
  pageSize: number;
  /** Page token for pagination */
  pageToken: string;
}

/**
 * Response containing a list of messages
 */
export interface ListMessagesResponse {
  /** The list of messages */
  messages: Message[];
  /** Token to retrieve the next page of results */
  nextPageToken: string;
}

/**
 * Request to delete a conversation
 */
export interface DeleteConversationRequest {
  /** The name of the conversation to delete. Format: conversations/{uid} */
  name: string;
}

/**
 * ConversationService manages conversations and messages
 */
export type ConversationService = {
  /** Create a new conversation */
  createConversation(
    request: CreateConversationRequest,
    options?: CallOptions
  ): Promise<Conversation>;
  
  /** Get the active (most recent) conversation for the current user */
  getActiveConversation(
    request: GetActiveConversationRequest,
    options?: CallOptions
  ): Promise<Conversation>;
  
  /** Send a message and stream back AI response chunks */
  sendMessage(
    request: SendMessageRequest,
    options?: CallOptions
  ): AsyncIterable<SendMessageChunk>;
  
  /** List messages in a conversation */
  listMessages(
    request: ListMessagesRequest,
    options?: CallOptions
  ): Promise<ListMessagesResponse>;
  
  /** Delete a conversation */
  deleteConversation(
    request: DeleteConversationRequest,
    options?: CallOptions
  ): Promise<void>;
};

export type ConversationServiceDefinition = typeof ConversationServiceDefinition;
export const ConversationServiceDefinition = {
  name: "ConversationService",
  fullName: "memos.api.v1.ConversationService",
  methods: {
    createConversation: {
      name: "CreateConversation",
      requestType: {} as CreateConversationRequest,
      requestStream: false,
      responseType: {} as Conversation,
      responseStream: false,
      options: {},
    },
    getActiveConversation: {
      name: "GetActiveConversation",
      requestType: {} as GetActiveConversationRequest,
      requestStream: false,
      responseType: {} as Conversation,
      responseStream: false,
      options: {},
    },
    sendMessage: {
      name: "SendMessage",
      requestType: {} as SendMessageRequest,
      requestStream: false,
      responseType: {} as SendMessageChunk,
      responseStream: true,
      options: {},
    },
    listMessages: {
      name: "ListMessages",
      requestType: {} as ListMessagesRequest,
      requestStream: false,
      responseType: {} as ListMessagesResponse,
      responseStream: false,
      options: {},
    },
    deleteConversation: {
      name: "DeleteConversation",
      requestType: {} as DeleteConversationRequest,
      requestStream: false,
      responseType: {} as void,
      responseStream: false,
      options: {},
    },
  },
} as const;

