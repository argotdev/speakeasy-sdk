# AssistantsNamedToolChoice

Specifies a tool the model should use. Use to force the model to call a specific tool.

## Example Usage

```typescript
import { AssistantsNamedToolChoice } from "argot-open-ai/models/components";

let value: AssistantsNamedToolChoice = {
  type: "file_search",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.AssistantsNamedToolChoiceType](../../models/components/assistantsnamedtoolchoicetype.md)         | :heavy_check_mark:                                                                                           | The type of the tool. If type is `function`, the function name must be set                                   |
| `function`                                                                                                   | [components.AssistantsNamedToolChoiceFunction](../../models/components/assistantsnamedtoolchoicefunction.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |