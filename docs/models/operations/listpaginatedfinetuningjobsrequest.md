# ListPaginatedFineTuningJobsRequest

## Example Usage

```typescript
import { ListPaginatedFineTuningJobsRequest } from "argot-open-ai/models/operations";

let value: ListPaginatedFineTuningJobsRequest = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `after`                                                           | *string*                                                          | :heavy_minus_sign:                                                | Identifier for the last job from the previous pagination request. |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Number of fine-tuning jobs to retrieve.                           |