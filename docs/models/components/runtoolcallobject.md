# RunToolCallObject

Tool call objects

## Example Usage

```typescript
import { RunToolCallObject } from "argot-open-ai/models/components";

let value: RunToolCallObject = {
  id: "<id>",
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                 | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The ID of the tool call. This ID must be referenced when you submit the tool outputs in using the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint. |
| `type`                                                                                                                                                                               | [components.RunToolCallObjectType](../../models/components/runtoolcallobjecttype.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                                   | The type of tool call the output is required for. For now, this is always `function`.                                                                                                |
| `function`                                                                                                                                                                           | [components.RunToolCallObjectFunction](../../models/components/runtoolcallobjectfunction.md)                                                                                         | :heavy_check_mark:                                                                                                                                                                   | The function definition.                                                                                                                                                             |