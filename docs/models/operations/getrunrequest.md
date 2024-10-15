# GetRunRequest

## Example Usage

```typescript
import { GetRunRequest } from "argot-open-ai/models/operations";

let value: GetRunRequest = {
  threadId: "<id>",
  runId: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `threadId`                                                        | *string*                                                          | :heavy_check_mark:                                                | The ID of the [thread](/docs/api-reference/threads) that was run. |
| `runId`                                                           | *string*                                                          | :heavy_check_mark:                                                | The ID of the run to retrieve.                                    |