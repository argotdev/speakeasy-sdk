# AutoChunkingStrategy

The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.

## Example Usage

```typescript
import { AutoChunkingStrategy } from "argot-open-ai/models/components";

let value: AutoChunkingStrategy = {
  type: "auto",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [components.ChunkingStrategyType](../../models/components/chunkingstrategytype.md) | :heavy_check_mark:                                                                 | Always `auto`.                                                                     |