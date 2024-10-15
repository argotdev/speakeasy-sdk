# StaticChunkingStrategyRequestParam

## Example Usage

```typescript
import { StaticChunkingStrategyRequestParam } from "argot-open-ai/models/components";

let value: StaticChunkingStrategyRequestParam = {
  type: "static",
  static: {
    maxChunkSizeTokens: 90885,
    chunkOverlapTokens: 227759,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.StaticChunkingStrategyRequestParamType](../../models/components/staticchunkingstrategyrequestparamtype.md) | :heavy_check_mark:                                                                                                     | Always `static`.                                                                                                       |
| `static`                                                                                                               | [components.StaticChunkingStrategy](../../models/components/staticchunkingstrategy.md)                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |