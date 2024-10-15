# RequiredAction

Details on the action required to continue the run. Will be `null` if no action is required.

## Example Usage

```typescript
import { RequiredAction } from "argot-open-ai/models/components";

let value: RequiredAction = {
  type: "submit_tool_outputs",
  submitToolOutputs: {
    toolCalls: [
      {
        id: "<id>",
        type: "function",
        function: {
          name: "<value>",
          arguments: "<value>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [components.RunObjectType](../../models/components/runobjecttype.md)         | :heavy_check_mark:                                                           | For now, this is always `submit_tool_outputs`.                               |
| `submitToolOutputs`                                                          | [components.SubmitToolOutputs](../../models/components/submittooloutputs.md) | :heavy_check_mark:                                                           | Details on the tool outputs needed for this run to continue.                 |