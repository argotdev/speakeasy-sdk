# RunStepDetailsToolCallsCodeObject

Details of the Code Interpreter tool call the run step was involved in.

## Example Usage

```typescript
import { RunStepDetailsToolCallsCodeObject } from "argot-open-ai/models/components";

let value: RunStepDetailsToolCallsCodeObject = {
  id: "<id>",
  type: "code_interpreter",
  codeInterpreter: {
    input: "<value>",
    outputs: [
      {
        type: "logs",
        logs: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the tool call.                                                                                             |
| `type`                                                                                                               | [components.RunStepDetailsToolCallsCodeObjectType](../../models/components/runstepdetailstoolcallscodeobjecttype.md) | :heavy_check_mark:                                                                                                   | The type of tool call. This is always going to be `code_interpreter` for this type of tool call.                     |
| `codeInterpreter`                                                                                                    | [components.CodeInterpreter](../../models/components/codeinterpreter.md)                                             | :heavy_check_mark:                                                                                                   | The Code Interpreter tool call definition.                                                                           |