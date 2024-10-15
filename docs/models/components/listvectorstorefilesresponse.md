# ListVectorStoreFilesResponse

## Example Usage

```typescript
import { ListVectorStoreFilesResponse } from "argot-open-ai/models/components";

let value: ListVectorStoreFilesResponse = {
  object: "list",
  data: [
    {
      id: "<id>",
      object: "vector_store.file",
      usageBytes: 886961,
      createdAt: 618826,
      vectorStoreId: "<id>",
      status: "in_progress",
      lastError: {
        code: "invalid_file",
        message: "<value>",
      },
    },
  ],
  firstId: "file-abc123",
  lastId: "file-abc456",
  hasMore: false,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `object`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | list                                                                                   |
| `data`                                                                                 | [components.VectorStoreFileObject](../../models/components/vectorstorefileobject.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `firstId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | file-abc123                                                                            |
| `lastId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | file-abc456                                                                            |
| `hasMore`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    | false                                                                                  |