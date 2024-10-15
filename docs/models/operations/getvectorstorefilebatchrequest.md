# GetVectorStoreFileBatchRequest

## Example Usage

```typescript
import { GetVectorStoreFileBatchRequest } from "argot-open-ai/models/operations";

let value: GetVectorStoreFileBatchRequest = {
  vectorStoreId: "vs_abc123",
  batchId: "vsfb_abc123",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `vectorStoreId`                                            | *string*                                                   | :heavy_check_mark:                                         | The ID of the vector store that the file batch belongs to. | vs_abc123                                                  |
| `batchId`                                                  | *string*                                                   | :heavy_check_mark:                                         | The ID of the file batch being retrieved.                  | vsfb_abc123                                                |