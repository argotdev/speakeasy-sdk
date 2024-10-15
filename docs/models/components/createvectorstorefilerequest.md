# CreateVectorStoreFileRequest

## Example Usage

```typescript
import { CreateVectorStoreFileRequest } from "argot-open-ai/models/components";

let value: CreateVectorStoreFileRequest = {
  fileId: "<id>",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `fileId`                                                                                                                            | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | A [File](/docs/api-reference/files) ID that the vector store should use. Useful for tools like `file_search` that can access files. |
| `chunkingStrategy`                                                                                                                  | *components.ChunkingStrategyRequestParam*                                                                                           | :heavy_minus_sign:                                                                                                                  | The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.                                          |