# CreateThreadRequestFileSearch2

## Example Usage

```typescript
import { CreateThreadRequestFileSearch2 } from "argot-open-ai/models/components";

let value: CreateThreadRequestFileSearch2 = {
  vectorStores: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vectorStoreIds`                                                                                                                                                                            | *string*[]                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                          | The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.<br/>                                 |
| `vectorStores`                                                                                                                                                                              | [components.CreateThreadRequestFileSearchToolResourcesVectorStores](../../models/components/createthreadrequestfilesearchtoolresourcesvectorstores.md)[]                                    | :heavy_check_mark:                                                                                                                                                                          | A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this thread. There can be a maximum of 1 vector store attached to the thread.<br/> |