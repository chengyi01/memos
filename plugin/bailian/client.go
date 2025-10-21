package bailian

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log/slog"
	"net/http"
	"strings"
	"time"
)

// Config contains configuration for Bailian client.
type Config struct {
	APIKey      string
	AgentID     string
	Endpoint    string
	Temperature float64
	MaxTokens   int32
}

// Client is a wrapper around DashScope HTTP API for Bailian AI agent.
type Client struct {
	config     *Config
	httpClient *http.Client
}

// Message represents a conversation message.
type Message struct {
	Role    string // "user" or "assistant"
	Content string
}

// StreamHandler is called for each chunk of streaming response.
type StreamHandler func(chunk string) error

// apiRequest represents the request body for DashScope API.
type apiRequest struct {
	Input      apiInput      `json:"input"`
	Parameters apiParameters `json:"parameters"`
}

type apiInput struct {
	Messages []apiMessage `json:"messages"`
}

type apiMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type apiParameters struct {
	Temperature       float64 `json:"temperature,omitempty"`
	MaxTokens         int32   `json:"max_tokens,omitempty"`
	IncrementalOutput bool    `json:"incremental_output"`
}

// apiResponse represents the SSE response from DashScope API.
type apiResponse struct {
	Output    apiOutput `json:"output"`
	Usage     apiUsage  `json:"usage,omitempty"`
	RequestID string    `json:"request_id,omitempty"`
}

type apiOutput struct {
	SessionID    string `json:"session_id,omitempty"`
	Text         string `json:"text"`
	FinishReason string `json:"finish_reason,omitempty"`
}

type apiUsage struct {
	TotalTokens int `json:"total_tokens,omitempty"`
}

// apiError represents an error response from DashScope API.
type apiError struct {
	Code      string `json:"code"`
	Message   string `json:"message"`
	RequestID string `json:"request_id,omitempty"`
}

// NewClient creates a new Bailian client.
func NewClient(config *Config) (*Client, error) {
	if config.APIKey == "" || config.AgentID == "" {
		return nil, errors.New("API key and agent ID are required")
	}

	if config.Endpoint == "" {
		config.Endpoint = "dashscope.aliyuncs.com"
	}

	return &Client{
		config: config,
		httpClient: &http.Client{
			Timeout: 60 * time.Second,
		},
	}, nil
}

// SendMessage sends a message to the agent and streams the response.
func (c *Client) SendMessage(ctx context.Context, messages []Message, handler StreamHandler) error {
	// Build API URL
	url := fmt.Sprintf("https://%s/api/v1/apps/%s/completion", c.config.Endpoint, c.config.AgentID)

	// Convert messages to API format
	apiMessages := make([]apiMessage, len(messages))
	for i, msg := range messages {
		apiMessages[i] = apiMessage{
			Role:    msg.Role,
			Content: msg.Content,
		}
	}

	// Build request body
	reqBody := apiRequest{
		Input: apiInput{
			Messages: apiMessages,
		},
		Parameters: apiParameters{
			Temperature:       c.config.Temperature,
			MaxTokens:         c.config.MaxTokens,
			IncrementalOutput: true,
		},
	}

	// Marshal request body
	reqBytes, err := json.Marshal(reqBody)
	if err != nil {
		return fmt.Errorf("failed to marshal request: %w", err)
	}

	// 日志：记录请求信息
	slog.Info("Sending message to Bailian API",
		slog.String("agent_id", c.config.AgentID),
		slog.String("url", url),
		slog.Int("message_count", len(messages)),
		slog.Float64("temperature", c.config.Temperature),
		slog.Int("max_tokens", int(c.config.MaxTokens)),
		slog.String("request_body", string(reqBytes)),
	)

	// Create HTTP request
	req, err := http.NewRequestWithContext(ctx, "POST", url, bytes.NewReader(reqBytes))
	if err != nil {
		return fmt.Errorf("failed to create request: %w", err)
	}

	// Set headers
	req.Header.Set("Authorization", "Bearer "+c.config.APIKey)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-DashScope-SSE", "enable")

	// Send request
	resp, err := c.httpClient.Do(req)
	if err != nil {
		slog.Error("Failed to send HTTP request",
			slog.String("agent_id", c.config.AgentID),
			slog.String("error", err.Error()),
		)
		return fmt.Errorf("failed to send request: %w", err)
	}
	defer resp.Body.Close()

	// 日志：记录响应状态
	slog.Info("Received response from Bailian API",
		slog.String("agent_id", c.config.AgentID),
		slog.Int("status_code", resp.StatusCode),
		slog.String("content_type", resp.Header.Get("Content-Type")),
	)

	// Check status code
	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		var apiErr apiError
		if json.Unmarshal(body, &apiErr) == nil {
			slog.Error("Bailian API returned error",
				slog.String("agent_id", c.config.AgentID),
				slog.Int("status_code", resp.StatusCode),
				slog.String("error_code", apiErr.Code),
				slog.String("error_message", apiErr.Message),
				slog.String("request_id", apiErr.RequestID),
			)
			return fmt.Errorf("API error [%d]: %s - %s", resp.StatusCode, apiErr.Code, apiErr.Message)
		}
		slog.Error("Bailian API returned HTTP error",
			slog.String("agent_id", c.config.AgentID),
			slog.Int("status_code", resp.StatusCode),
			slog.String("body", string(body)),
		)
		return fmt.Errorf("HTTP error [%d]: %s", resp.StatusCode, string(body))
	}

	// 添加：读取并记录完整响应体（用于诊断）
	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		return fmt.Errorf("failed to read response body: %w", err)
	}

	previewLength := 500
	if len(bodyBytes) < previewLength {
		previewLength = len(bodyBytes)
	}

	slog.Info("Received full response body",
		slog.String("agent_id", c.config.AgentID),
		slog.Int("body_size", len(bodyBytes)),
		slog.String("body_preview", string(bodyBytes[:previewLength])),
	)

	// 重新创建 reader 供后续使用
	resp.Body = io.NopCloser(bytes.NewReader(bodyBytes))

	// Read SSE stream
	scanner := bufio.NewScanner(resp.Body)
	chunkCount := 0
	totalText := ""

	slog.Info("Starting to read SSE stream",
		slog.String("agent_id", c.config.AgentID),
	)

	for scanner.Scan() {
		select {
		case <-ctx.Done():
			return ctx.Err()
		default:
		}

		line := scanner.Text()

		// 添加：记录每一行原始内容（用于诊断）
		slog.Info("Received SSE line",
			slog.String("agent_id", c.config.AgentID),
			slog.String("line", line),
			slog.Int("length", len(line)),
		)

		// Skip empty lines
		if line == "" {
			continue
		}

		// Check for end marker
		if strings.HasPrefix(line, "data: [DONE]") {
			slog.Info("Received SSE end marker",
				slog.String("agent_id", c.config.AgentID),
				slog.Int("total_chunks", chunkCount),
				slog.Int("total_text_length", len(totalText)),
			)
			break
		}

		// Parse SSE data line (兼容 "data:" 和 "data: " 两种格式)
		if !strings.HasPrefix(line, "data:") {
			continue
		}

		// Extract JSON data
		jsonData := strings.TrimPrefix(line, "data:")
		jsonData = strings.TrimSpace(jsonData) // 去除可能的前导/尾随空格

		// Parse response
		var apiResp apiResponse
		if err := json.Unmarshal([]byte(jsonData), &apiResp); err != nil {
			// 从 Warn 改为 Info，确保能看到解析失败的详细信息
			slog.Info("Failed to parse SSE chunk",
				slog.String("agent_id", c.config.AgentID),
				slog.String("error", err.Error()),
				slog.String("data", jsonData),
			)
			continue
		}

		// 日志：记录每个 chunk
		if apiResp.Output.Text != "" {
			chunkCount++
			totalText += apiResp.Output.Text
			slog.Debug("Received SSE chunk",
				slog.String("agent_id", c.config.AgentID),
				slog.Int("chunk_number", chunkCount),
				slog.String("text", apiResp.Output.Text),
				slog.String("finish_reason", apiResp.Output.FinishReason),
			)
		}

		// Call handler with text chunk (先发送内容到前端)
		if apiResp.Output.Text != "" {
			if err := handler(apiResp.Output.Text); err != nil {
				return fmt.Errorf("handler error: %w", err)
			}
		}

		// 检测结束标记 (在发送内容之后再检测，确保所有内容都已发送)
		if apiResp.Output.FinishReason == "stop" {
			previewLen := 100
			if len(totalText) < previewLen {
				previewLen = len(totalText)
			}
			slog.Info("Received finish_reason=stop, ending stream",
				slog.String("agent_id", c.config.AgentID),
				slog.Int("total_chunks", chunkCount),
				slog.String("total_text_preview", totalText[:previewLen]),
			)
			break
		}
	}

	if err := scanner.Err(); err != nil {
		slog.Error("Error reading SSE stream",
			slog.String("agent_id", c.config.AgentID),
			slog.String("error", err.Error()),
		)
		return fmt.Errorf("failed to read stream: %w", err)
	}

	slog.Info("Successfully completed SSE stream",
		slog.String("agent_id", c.config.AgentID),
		slog.Int("total_chunks", chunkCount),
		slog.String("full_response", totalText),
	)

	return nil
}

// TestConnection tests the connection to Bailian API.
func (c *Client) TestConnection(ctx context.Context) error {
	// Validate config
	if c.config.APIKey == "" || c.config.AgentID == "" {
		return errors.New("invalid API configuration")
	}

	slog.Info("Starting connection test",
		slog.String("agent_id", c.config.AgentID),
		slog.String("endpoint", c.config.Endpoint),
	)

	// Send a simple test message
	testMessages := []Message{
		{
			Role:    "user",
			Content: "你好",
		},
	}

	// Use a short timeout for testing
	testCtx, cancel := context.WithTimeout(ctx, 10*time.Second)
	defer cancel()

	// Just check if SendMessage succeeds (no error means connection works)
	receivedChunks := 0
	err := c.SendMessage(testCtx, testMessages, func(chunk string) error {
		// Count chunks for logging
		receivedChunks++
		slog.Debug("Test connection received chunk",
			slog.String("agent_id", c.config.AgentID),
			slog.Int("chunk_number", receivedChunks),
			slog.String("chunk_content", chunk),
		)
		return nil
	})

	if err != nil {
		slog.Error("Connection test failed",
			slog.String("agent_id", c.config.AgentID),
			slog.String("error", err.Error()),
		)
		return fmt.Errorf("connection test failed: %w", err)
	}

	slog.Info("Connection test completed successfully",
		slog.String("agent_id", c.config.AgentID),
		slog.Int("chunks_received", receivedChunks),
	)

	return nil
}
