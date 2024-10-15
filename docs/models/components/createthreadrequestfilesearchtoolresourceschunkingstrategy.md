# CreateThreadRequestFileSearchToolResourcesChunkingStrategy

The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.


## Supported Types

### `components.CreateThreadRequestChunkingStrategyToolResourcesAutoChunkingStrategy`

```typescript
const value:
  components.CreateThreadRequestChunkingStrategyToolResourcesAutoChunkingStrategy =
    {
      type: "auto",
    };
```

### `components.CreateThreadRequestChunkingStrategyToolResourcesStaticChunkingStrategy`

```typescript
const value:
  components.CreateThreadRequestChunkingStrategyToolResourcesStaticChunkingStrategy =
    {
      type: "static",
      static: {
        maxChunkSizeTokens: 724168,
        chunkOverlapTokens: 399025,
      },
    };
```

