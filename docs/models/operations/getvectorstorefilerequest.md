# GetVectorStoreFileRequest

## Example Usage

```typescript
import { GetVectorStoreFileRequest } from "argot-open-ai/models/operations";

let value: GetVectorStoreFileRequest = {
  vectorStoreId: "vs_abc123",
  fileId: "file-abc123",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `vectorStoreId`                                      | *string*                                             | :heavy_check_mark:                                   | The ID of the vector store that the file belongs to. | vs_abc123                                            |
| `fileId`                                             | *string*                                             | :heavy_check_mark:                                   | The ID of the file being retrieved.                  | file-abc123                                          |