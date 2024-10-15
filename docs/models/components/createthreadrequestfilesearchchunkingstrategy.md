# CreateThreadRequestFileSearchChunkingStrategy

The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.


## Supported Types

### `components.CreateThreadRequestChunkingStrategyAutoChunkingStrategy`

```typescript
const value:
  components.CreateThreadRequestChunkingStrategyAutoChunkingStrategy = {
    type: "auto",
  };
```

### `components.CreateThreadRequestChunkingStrategyStaticChunkingStrategy`

```typescript
const value:
  components.CreateThreadRequestChunkingStrategyStaticChunkingStrategy = {
    type: "static",
    static: {
      maxChunkSizeTokens: 756779,
      chunkOverlapTokens: 636061,
    },
  };
```

