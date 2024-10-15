# CancelRunRequest

## Example Usage

```typescript
import { CancelRunRequest } from "argot-open-ai/models/operations";

let value: CancelRunRequest = {
  threadId: "<id>",
  runId: "<id>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `threadId`                                      | *string*                                        | :heavy_check_mark:                              | The ID of the thread to which this run belongs. |
| `runId`                                         | *string*                                        | :heavy_check_mark:                              | The ID of the run to cancel.                    |