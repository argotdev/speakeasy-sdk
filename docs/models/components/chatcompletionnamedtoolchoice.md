# ChatCompletionNamedToolChoice

Specifies a tool the model should use. Use to force the model to call a specific function.

## Example Usage

```typescript
import { ChatCompletionNamedToolChoice } from "argot-open-ai/models/components";

let value: ChatCompletionNamedToolChoice = {
  type: "function",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.ChatCompletionNamedToolChoiceType](../../models/components/chatcompletionnamedtoolchoicetype.md)         | :heavy_check_mark:                                                                                                   | The type of the tool. Currently, only `function` is supported.                                                       |
| `function`                                                                                                           | [components.ChatCompletionNamedToolChoiceFunction](../../models/components/chatcompletionnamedtoolchoicefunction.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |