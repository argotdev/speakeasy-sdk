# ChunkingStrategy

The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. Only applicable if `file_ids` is non-empty.


## Supported Types

### `components.AutoChunkingStrategyRequestParam`

```typescript
const value: components.AutoChunkingStrategyRequestParam = {
  type: "auto",
};
```

### `components.StaticChunkingStrategyRequestParam`

```typescript
const value: components.StaticChunkingStrategyRequestParam = {
  type: "static",
  static: {
    maxChunkSizeTokens: 519952,
    chunkOverlapTokens: 693957,
  },
};
```

