# ChunkingStrategyStaticChunkingStrategy

## Example Usage

```typescript
import { ChunkingStrategyStaticChunkingStrategy } from "argot-open-ai/models/components";

let value: ChunkingStrategyStaticChunkingStrategy = {
  type: "static",
  static: {
    maxChunkSizeTokens: 35362,
    chunkOverlapTokens: 430402,
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                       | [components.CreateAssistantRequestChunkingStrategyToolResourcesFileSearchType](../../models/components/createassistantrequestchunkingstrategytoolresourcesfilesearchtype.md) | :heavy_check_mark:                                                                                                                                                           | Always `static`.                                                                                                                                                             |
| `static`                                                                                                                                                                     | [components.ChunkingStrategyStatic](../../models/components/chunkingstrategystatic.md)                                                                                       | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |