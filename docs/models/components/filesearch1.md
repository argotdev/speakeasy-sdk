# FileSearch1

## Example Usage

```typescript
import { FileSearch1 } from "argot-open-ai/models/components";

let value: FileSearch1 = {
  vectorStoreIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vectorStoreIds`                                                                                                                                                                                  | *string*[]                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                | The [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.<br/>                                 |
| `vectorStores`                                                                                                                                                                                    | [components.VectorStores](../../models/components/vectorstores.md)[]                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                | A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this assistant. There can be a maximum of 1 vector store attached to the assistant.<br/> |