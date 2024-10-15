# SubmitToolOuputsToRunRequest

## Example Usage

```typescript
import { SubmitToolOuputsToRunRequest } from "argot-open-ai/models/operations";

let value: SubmitToolOuputsToRunRequest = {
  threadId: "<id>",
  runId: "<id>",
  submitToolOutputsRunRequest: {
    toolOutputs: [
      {},
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `threadId`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the [thread](/docs/api-reference/threads) to which this run belongs.                   |
| `runId`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the run that requires the tool output submission.                                      |
| `submitToolOutputsRunRequest`                                                                    | [components.SubmitToolOutputsRunRequest](../../models/components/submittooloutputsrunrequest.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |