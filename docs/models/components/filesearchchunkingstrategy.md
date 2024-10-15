# FileSearchChunkingStrategy

The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.


## Supported Types

### `components.ChunkingStrategyAutoChunkingStrategy`

```typescript
const value: components.ChunkingStrategyAutoChunkingStrategy = {
  type: "auto",
};
```

### `components.ChunkingStrategyStaticChunkingStrategy`

```typescript
const value: components.ChunkingStrategyStaticChunkingStrategy = {
  type: "static",
  static: {
    maxChunkSizeTokens: 510017,
    chunkOverlapTokens: 536178,
  },
};
```

