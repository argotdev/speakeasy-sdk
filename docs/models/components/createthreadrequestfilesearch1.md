# CreateThreadRequestFileSearch1

## Example Usage

```typescript
import { CreateThreadRequestFileSearch1 } from "argot-open-ai/models/components";

let value: CreateThreadRequestFileSearch1 = {
  vectorStoreIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vectorStoreIds`                                                                                                                                                                            | *string*[]                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                          | The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.<br/>                                 |
| `vectorStores`                                                                                                                                                                              | [components.CreateThreadRequestFileSearchVectorStores](../../models/components/createthreadrequestfilesearchvectorstores.md)[]                                                              | :heavy_minus_sign:                                                                                                                                                                          | A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this thread. There can be a maximum of 1 vector store attached to the thread.<br/> |