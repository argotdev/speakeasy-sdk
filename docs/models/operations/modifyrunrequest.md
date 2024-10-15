# ModifyRunRequest

## Example Usage

```typescript
import { ModifyRunRequest } from "argot-open-ai/models/operations";

let value: ModifyRunRequest = {
  threadId: "<id>",
  runId: "<id>",
  modifyRunRequest: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `threadId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the [thread](/docs/api-reference/threads) that was run.          |
| `runId`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the run to modify.                                               |
| `modifyRunRequest`                                                         | [components.ModifyRunRequest](../../models/components/modifyrunrequest.md) | :heavy_check_mark:                                                         | N/A                                                                        |