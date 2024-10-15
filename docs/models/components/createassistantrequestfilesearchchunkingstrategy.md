# CreateAssistantRequestFileSearchChunkingStrategy

The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.


## Supported Types

### `components.AutoChunkingStrategy`

```typescript
const value: components.AutoChunkingStrategy = {
  type: "auto",
};
```

### `components.CreateAssistantRequestChunkingStrategyStaticChunkingStrategy`

```typescript
const value:
  components.CreateAssistantRequestChunkingStrategyStaticChunkingStrategy = {
    type: "static",
    static: {
      maxChunkSizeTokens: 956406,
      chunkOverlapTokens: 187131,
    },
  };
```

