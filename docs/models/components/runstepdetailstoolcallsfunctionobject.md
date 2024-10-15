# RunStepDetailsToolCallsFunctionObject

## Example Usage

```typescript
import { RunStepDetailsToolCallsFunctionObject } from "argot-open-ai/models/components";

let value: RunStepDetailsToolCallsFunctionObject = {
  id: "<id>",
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
    output: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The ID of the tool call object.                                                                                                      |
| `type`                                                                                                                               | [components.RunStepDetailsToolCallsFunctionObjectType](../../models/components/runstepdetailstoolcallsfunctionobjecttype.md)         | :heavy_check_mark:                                                                                                                   | The type of tool call. This is always going to be `function` for this type of tool call.                                             |
| `function`                                                                                                                           | [components.RunStepDetailsToolCallsFunctionObjectFunction](../../models/components/runstepdetailstoolcallsfunctionobjectfunction.md) | :heavy_check_mark:                                                                                                                   | The definition of the function that was called.                                                                                      |