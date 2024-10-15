# ChatCompletionMessageToolCall

## Example Usage

```typescript
import { ChatCompletionMessageToolCall } from "argot-open-ai/models/components";

let value: ChatCompletionMessageToolCall = {
  id: "<id>",
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the tool call.                                                                                     |
| `type`                                                                                                       | [components.ChatCompletionMessageToolCallType](../../models/components/chatcompletionmessagetoolcalltype.md) | :heavy_check_mark:                                                                                           | The type of the tool. Currently, only `function` is supported.                                               |
| `function`                                                                                                   | [components.FunctionT](../../models/components/functiont.md)                                                 | :heavy_check_mark:                                                                                           | The function that the model called.                                                                          |