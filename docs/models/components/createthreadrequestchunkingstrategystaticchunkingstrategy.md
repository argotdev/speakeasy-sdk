# CreateThreadRequestChunkingStrategyStaticChunkingStrategy

## Example Usage

```typescript
import { CreateThreadRequestChunkingStrategyStaticChunkingStrategy } from "argot-open-ai/models/components";

let value: CreateThreadRequestChunkingStrategyStaticChunkingStrategy = {
  type: "static",
  static: {
    maxChunkSizeTokens: 699622,
    chunkOverlapTokens: 327720,
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | [components.CreateThreadRequestChunkingStrategyToolResourcesType](../../models/components/createthreadrequestchunkingstrategytoolresourcestype.md) | :heavy_check_mark:                                                                                                                                 | Always `static`.                                                                                                                                   |
| `static`                                                                                                                                           | [components.CreateThreadRequestChunkingStrategyStatic](../../models/components/createthreadrequestchunkingstrategystatic.md)                       | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |