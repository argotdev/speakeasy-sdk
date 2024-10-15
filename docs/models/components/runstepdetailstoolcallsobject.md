# RunStepDetailsToolCallsObject

Details of the tool call.

## Example Usage

```typescript
import { RunStepDetailsToolCallsObject } from "argot-open-ai/models/components";

let value: RunStepDetailsToolCallsObject = {
  type: "tool_calls",
  toolCalls: [
    {
      id: "<id>",
      type: "code_interpreter",
      codeInterpreter: {
        input: "<value>",
        outputs: [
          {
            type: "image",
            image: {
              fileId: "<id>",
            },
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                            | [components.RunStepDetailsToolCallsObjectType](../../models/components/runstepdetailstoolcallsobjecttype.md)                                                      | :heavy_check_mark:                                                                                                                                                | Always `tool_calls`.                                                                                                                                              |
| `toolCalls`                                                                                                                                                       | *components.ToolCalls*[]                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `file_search`, or `function`.<br/> |