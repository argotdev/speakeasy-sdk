# CreateVectorStoreFileBatchRequest

## Example Usage

```typescript
import { CreateVectorStoreFileBatchRequest } from "argot-open-ai/models/operations";

let value: CreateVectorStoreFileBatchRequest = {
  vectorStoreId: "vs_abc123",
  createVectorStoreFileBatchRequest: {
    fileIds: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `vectorStoreId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the vector store for which to create a File Batch.<br/>                                            | vs_abc123                                                                                                    |
| `createVectorStoreFileBatchRequest`                                                                          | [components.CreateVectorStoreFileBatchRequest](../../models/components/createvectorstorefilebatchrequest.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |