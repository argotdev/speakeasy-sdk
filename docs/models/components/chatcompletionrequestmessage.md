# ChatCompletionRequestMessage


## Supported Types

### `components.ChatCompletionRequestSystemMessage`

```typescript
const value: components.ChatCompletionRequestSystemMessage = {
  content: "<value>",
  role: "system",
};
```

### `components.ChatCompletionRequestUserMessage`

```typescript
const value: components.ChatCompletionRequestUserMessage = {
  content: "<value>",
  role: "user",
};
```

### `components.ChatCompletionRequestAssistantMessage`

```typescript
const value: components.ChatCompletionRequestAssistantMessage = {
  role: "assistant",
};
```

### `components.ChatCompletionRequestToolMessage`

```typescript
const value: components.ChatCompletionRequestToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

### `components.ChatCompletionRequestFunctionMessage`

```typescript
const value: components.ChatCompletionRequestFunctionMessage = {
  role: "function",
  content: "<value>",
  name: "<value>",
};
```

