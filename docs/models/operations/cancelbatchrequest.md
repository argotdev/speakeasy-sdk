# CancelBatchRequest

## Example Usage

```typescript
import { CancelBatchRequest } from "argot-open-ai/models/operations";

let value: CancelBatchRequest = {
  batchId: "<id>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `batchId`                      | *string*                       | :heavy_check_mark:             | The ID of the batch to cancel. |