# Embedding

Represents an embedding vector returned by embedding endpoint.


## Example Usage

```typescript
import { Embedding } from "argot-open-ai/models/components";

let value: Embedding = {
  index: 318569,
  embedding: [
    6674.10,
  ],
  object: "embedding",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index`                                                                                                                                                  | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The index of the embedding in the list of embeddings.                                                                                                    |
| `embedding`                                                                                                                                              | *number*[]                                                                                                                                               | :heavy_check_mark:                                                                                                                                       | The embedding vector, which is a list of floats. The length of vector depends on the model as listed in the [embedding guide](/docs/guides/embeddings).<br/> |
| `object`                                                                                                                                                 | [components.EmbeddingObject](../../models/components/embeddingobject.md)                                                                                 | :heavy_check_mark:                                                                                                                                       | The object type, which is always "embedding".                                                                                                            |