# RequestCounts

The request counts for different statuses within the batch.

## Example Usage

```typescript
import { RequestCounts } from "argot-open-ai/models/components";

let value: RequestCounts = {
  total: 739884,
  completed: 898063,
  failed: 672582,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `total`                                                   | *number*                                                  | :heavy_check_mark:                                        | Total number of requests in the batch.                    |
| `completed`                                               | *number*                                                  | :heavy_check_mark:                                        | Number of requests that have been completed successfully. |
| `failed`                                                  | *number*                                                  | :heavy_check_mark:                                        | Number of requests that have failed.                      |