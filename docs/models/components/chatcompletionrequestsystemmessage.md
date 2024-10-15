# ChatCompletionRequestSystemMessage

## Example Usage

```typescript
import { ChatCompletionRequestSystemMessage } from "argot-open-ai/models/components";

let value: ChatCompletionRequestSystemMessage = {
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
  role: "system",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                    | *components.Content*                                                                                                         | :heavy_check_mark:                                                                                                           | The contents of the system message.                                                                                          |
| `role`                                                                                                                       | [components.Role](../../models/components/role.md)                                                                           | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case `system`.                                                                      |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |