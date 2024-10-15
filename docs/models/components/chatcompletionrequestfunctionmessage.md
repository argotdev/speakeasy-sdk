# ~~ChatCompletionRequestFunctionMessage~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { ChatCompletionRequestFunctionMessage } from "argot-open-ai/models/components";

let value: ChatCompletionRequestFunctionMessage = {
  role: "function",
  content: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                     | [components.ChatCompletionRequestFunctionMessageRole](../../models/components/chatcompletionrequestfunctionmessagerole.md) | :heavy_check_mark:                                                                                                         | The role of the messages author, in this case `function`.                                                                  |
| `content`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The contents of the function message.                                                                                      |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The name of the function to call.                                                                                          |