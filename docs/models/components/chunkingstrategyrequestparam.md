# ChunkingStrategyRequestParam

The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.


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
    maxChunkSizeTokens: 952143,
    chunkOverlapTokens: 300029,
  },
};
```

