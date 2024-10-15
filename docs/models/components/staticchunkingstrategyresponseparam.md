# StaticChunkingStrategyResponseParam

## Example Usage

```typescript
import { StaticChunkingStrategyResponseParam } from "argot-open-ai/models/components";

let value: StaticChunkingStrategyResponseParam = {
  type: "static",
  static: {
    maxChunkSizeTokens: 174772,
    chunkOverlapTokens: 389135,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [components.StaticChunkingStrategyResponseParamType](../../models/components/staticchunkingstrategyresponseparamtype.md) | :heavy_check_mark:                                                                                                       | Always `static`.                                                                                                         |
| `static`                                                                                                                 | [components.StaticChunkingStrategy](../../models/components/staticchunkingstrategy.md)                                   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |