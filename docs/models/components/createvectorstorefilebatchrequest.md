# CreateVectorStoreFileBatchRequest

## Example Usage

```typescript
import { CreateVectorStoreFileBatchRequest } from "argot-open-ai/models/components";

let value: CreateVectorStoreFileBatchRequest = {
  fileIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `fileIds`                                                                                                                                    | *string*[]                                                                                                                                   | :heavy_check_mark:                                                                                                                           | A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. |
| `chunkingStrategy`                                                                                                                           | *components.ChunkingStrategyRequestParam*                                                                                                    | :heavy_minus_sign:                                                                                                                           | The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.                                                   |