# CreateAssistantRequestChunkingStrategyStaticChunkingStrategy

## Example Usage

```typescript
import { CreateAssistantRequestChunkingStrategyStaticChunkingStrategy } from "argot-open-ai/models/components";

let value: CreateAssistantRequestChunkingStrategyStaticChunkingStrategy = {
  type: "static",
  static: {
    maxChunkSizeTokens: 128860,
    chunkOverlapTokens: 392676,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [components.CreateAssistantRequestChunkingStrategyType](../../models/components/createassistantrequestchunkingstrategytype.md) | :heavy_check_mark:                                                                                                             | Always `static`.                                                                                                               |
| `static`                                                                                                                       | [components.Static](../../models/components/static.md)                                                                         | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |