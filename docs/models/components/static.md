# Static

## Example Usage

```typescript
import { Static } from "argot-open-ai/models/components";

let value: Static = {
  maxChunkSizeTokens: 681393,
  chunkOverlapTokens: 277596,
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `maxChunkSizeTokens`                                                                                                                                   | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`.                    |
| `chunkOverlapTokens`                                                                                                                                   | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The number of tokens that overlap between chunks. The default value is `400`.<br/><br/>Note that the overlap must not exceed half of `max_chunk_size_tokens`.<br/> |