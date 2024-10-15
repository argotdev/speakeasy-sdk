# FileSearch2

## Example Usage

```typescript
import { FileSearch2 } from "argot-open-ai/models/components";

let value: FileSearch2 = {
  vectorStores: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vectorStoreIds`                                                                                                                                                                                  | *string*[]                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                | The [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.<br/>                                 |
| `vectorStores`                                                                                                                                                                                    | [components.FileSearchVectorStores](../../models/components/filesearchvectorstores.md)[]                                                                                                          | :heavy_check_mark:                                                                                                                                                                                | A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this assistant. There can be a maximum of 1 vector store attached to the assistant.<br/> |