# ChatCompletionRequestAssistantMessageContent

The contents of the assistant message. Required unless `tool_calls` or `function_call` is specified.



## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `components.ChatCompletionRequestAssistantMessageContentPart[]`

```typescript
const value: components.ChatCompletionRequestAssistantMessageContentPart[] = [
  {
    type: "text",
    text: "<value>",
  },
];
```

