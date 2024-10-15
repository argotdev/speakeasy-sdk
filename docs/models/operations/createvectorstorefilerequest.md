# CreateVectorStoreFileRequest

## Example Usage

```typescript
import { CreateVectorStoreFileRequest } from "argot-open-ai/models/operations";

let value: CreateVectorStoreFileRequest = {
  vectorStoreId: "vs_abc123",
  createVectorStoreFileRequest: {
    fileId: "<id>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `vectorStoreId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the vector store for which to create a File.<br/>                                        | vs_abc123                                                                                          |
| `createVectorStoreFileRequest`                                                                     | [components.CreateVectorStoreFileRequest](../../models/components/createvectorstorefilerequest.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |