# VectorStoreFileBatchObjectFileCounts

## Example Usage

```typescript
import { VectorStoreFileBatchObjectFileCounts } from "argot-open-ai/models/components";

let value: VectorStoreFileBatchObjectFileCounts = {
  inProgress: 886305,
  completed: 446394,
  failed: 907876,
  cancelled: 160230,
  total: 661118,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `inProgress`                                            | *number*                                                | :heavy_check_mark:                                      | The number of files that are currently being processed. |
| `completed`                                             | *number*                                                | :heavy_check_mark:                                      | The number of files that have been processed.           |
| `failed`                                                | *number*                                                | :heavy_check_mark:                                      | The number of files that have failed to process.        |
| `cancelled`                                             | *number*                                                | :heavy_check_mark:                                      | The number of files that where cancelled.               |
| `total`                                                 | *number*                                                | :heavy_check_mark:                                      | The total number of files.                              |