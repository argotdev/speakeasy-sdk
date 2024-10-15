# CancelVectorStoreFileBatchRequest

## Example Usage

```typescript
import { CancelVectorStoreFileBatchRequest } from "argot-open-ai/models/operations";

let value: CancelVectorStoreFileBatchRequest = {
  vectorStoreId: "<id>",
  batchId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `vectorStoreId`                                            | *string*                                                   | :heavy_check_mark:                                         | The ID of the vector store that the file batch belongs to. |
| `batchId`                                                  | *string*                                                   | :heavy_check_mark:                                         | The ID of the file batch to cancel.                        |