# ChatCompletionRequestToolMessage

## Example Usage

```typescript
import { ChatCompletionRequestToolMessage } from "argot-open-ai/models/components";

let value: ChatCompletionRequestToolMessage = {
  role: "tool",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                             | [components.ChatCompletionRequestToolMessageRole](../../models/components/chatcompletionrequesttoolmessagerole.md) | :heavy_check_mark:                                                                                                 | The role of the messages author, in this case `tool`.                                                              |
| `content`                                                                                                          | *components.ChatCompletionRequestToolMessageContent*                                                               | :heavy_check_mark:                                                                                                 | The contents of the tool message.                                                                                  |
| `toolCallId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Tool call that this message is responding to.                                                                      |