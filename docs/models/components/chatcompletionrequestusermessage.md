# ChatCompletionRequestUserMessage

## Example Usage

```typescript
import { ChatCompletionRequestUserMessage } from "argot-open-ai/models/components";

let value: ChatCompletionRequestUserMessage = {
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
  role: "user",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                    | *components.ChatCompletionRequestUserMessageContent*                                                                         | :heavy_check_mark:                                                                                                           | The contents of the user message.<br/>                                                                                       |
| `role`                                                                                                                       | [components.ChatCompletionRequestUserMessageRole](../../models/components/chatcompletionrequestusermessagerole.md)           | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case `user`.                                                                        |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |