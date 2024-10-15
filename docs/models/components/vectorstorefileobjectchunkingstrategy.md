# VectorStoreFileObjectChunkingStrategy

The strategy used to chunk the file.


## Supported Types

### `components.StaticChunkingStrategyResponseParam`

```typescript
const value: components.StaticChunkingStrategyResponseParam = {
  type: "static",
  static: {
    maxChunkSizeTokens: 541381,
    chunkOverlapTokens: 923306,
  },
};
```

### `components.OtherChunkingStrategyResponseParam`

```typescript
const value: components.OtherChunkingStrategyResponseParam = {
  type: "other",
};
```

