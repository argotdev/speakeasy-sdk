# CreateThreadRequestChunkingStrategyToolResourcesStaticChunkingStrategy

## Example Usage

```typescript
import { CreateThreadRequestChunkingStrategyToolResourcesStaticChunkingStrategy } from "argot-open-ai/models/components";

let value:
  CreateThreadRequestChunkingStrategyToolResourcesStaticChunkingStrategy = {
    type: "static",
    static: {
      maxChunkSizeTokens: 882042,
      chunkOverlapTokens: 458604,
    },
  };
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                   | [components.CreateThreadRequestChunkingStrategyToolResourcesFileSearch2Type](../../models/components/createthreadrequestchunkingstrategytoolresourcesfilesearch2type.md) | :heavy_check_mark:                                                                                                                                                       | Always `static`.                                                                                                                                                         |
| `static`                                                                                                                                                                 | [components.CreateThreadRequestChunkingStrategyToolResourcesStatic](../../models/components/createthreadrequestchunkingstrategytoolresourcesstatic.md)                   | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |