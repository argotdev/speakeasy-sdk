# AutoChunkingStrategyRequestParam

The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.

## Example Usage

```typescript
import { AutoChunkingStrategyRequestParam } from "argot-open-ai/models/components";

let value: AutoChunkingStrategyRequestParam = {
  type: "auto",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [components.AutoChunkingStrategyRequestParamType](../../models/components/autochunkingstrategyrequestparamtype.md) | :heavy_check_mark:                                                                                                 | Always `auto`.                                                                                                     |