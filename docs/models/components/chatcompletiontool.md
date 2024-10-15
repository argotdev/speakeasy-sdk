# ChatCompletionTool

## Example Usage

```typescript
import { ChatCompletionTool } from "argot-open-ai/models/components";

let value: ChatCompletionTool = {
  type: "function",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [components.ChatCompletionToolType](../../models/components/chatcompletiontooltype.md) | :heavy_check_mark:                                                                     | The type of the tool. Currently, only `function` is supported.                         |
| `function`                                                                             | [components.FunctionObject](../../models/components/functionobject.md)                 | :heavy_check_mark:                                                                     | N/A                                                                                    |