# DeleteVectorStoreFileRequest

## Example Usage

```typescript
import { DeleteVectorStoreFileRequest } from "argot-open-ai/models/operations";

let value: DeleteVectorStoreFileRequest = {
  vectorStoreId: "<id>",
  fileId: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `vectorStoreId`                                      | *string*                                             | :heavy_check_mark:                                   | The ID of the vector store that the file belongs to. |
| `fileId`                                             | *string*                                             | :heavy_check_mark:                                   | The ID of the file to delete.                        |