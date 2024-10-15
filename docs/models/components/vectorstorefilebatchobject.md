# VectorStoreFileBatchObject

A batch of files attached to a vector store.

## Example Usage

```typescript
import { VectorStoreFileBatchObject } from "argot-open-ai/models/components";

let value: VectorStoreFileBatchObject = {
  id: "<id>",
  object: "vector_store.files_batch",
  createdAt: 440264,
  vectorStoreId: "<id>",
  status: "in_progress",
  fileCounts: {
    inProgress: 696463,
    completed: 247399,
    failed: 39615,
    cancelled: 59944,
    total: 61078,
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                              | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The identifier, which can be referenced in API endpoints.                                                                         |
| `object`                                                                                                                          | [components.VectorStoreFileBatchObjectObject](../../models/components/vectorstorefilebatchobjectobject.md)                        | :heavy_check_mark:                                                                                                                | The object type, which is always `vector_store.file_batch`.                                                                       |
| `createdAt`                                                                                                                       | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | The Unix timestamp (in seconds) for when the vector store files batch was created.                                                |
| `vectorStoreId`                                                                                                                   | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to. |
| `status`                                                                                                                          | [components.VectorStoreFileBatchObjectStatus](../../models/components/vectorstorefilebatchobjectstatus.md)                        | :heavy_check_mark:                                                                                                                | The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`.              |
| `fileCounts`                                                                                                                      | [components.VectorStoreFileBatchObjectFileCounts](../../models/components/vectorstorefilebatchobjectfilecounts.md)                | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |