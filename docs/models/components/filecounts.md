# FileCounts

## Example Usage

```typescript
import { FileCounts } from "argot-open-ai/models/components";

let value: FileCounts = {
  inProgress: 695270,
  completed: 671957,
  failed: 948861,
  cancelled: 2703,
  total: 647197,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `inProgress`                                               | *number*                                                   | :heavy_check_mark:                                         | The number of files that are currently being processed.    |
| `completed`                                                | *number*                                                   | :heavy_check_mark:                                         | The number of files that have been successfully processed. |
| `failed`                                                   | *number*                                                   | :heavy_check_mark:                                         | The number of files that have failed to process.           |
| `cancelled`                                                | *number*                                                   | :heavy_check_mark:                                         | The number of files that were cancelled.                   |
| `total`                                                    | *number*                                                   | :heavy_check_mark:                                         | The total number of files.                                 |