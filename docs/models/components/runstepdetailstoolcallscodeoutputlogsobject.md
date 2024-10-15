# RunStepDetailsToolCallsCodeOutputLogsObject

Text output from the Code Interpreter tool call as part of a run step.

## Example Usage

```typescript
import { RunStepDetailsToolCallsCodeOutputLogsObject } from "argot-open-ai/models/components";

let value: RunStepDetailsToolCallsCodeOutputLogsObject = {
  type: "logs",
  logs: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                   | [components.RunStepDetailsToolCallsCodeOutputLogsObjectType](../../models/components/runstepdetailstoolcallscodeoutputlogsobjecttype.md) | :heavy_check_mark:                                                                                                                       | Always `logs`.                                                                                                                           |
| `logs`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The text output from the Code Interpreter tool call.                                                                                     |