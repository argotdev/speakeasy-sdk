# ModifyThreadRequestFileSearch

## Example Usage

```typescript
import { ModifyThreadRequestFileSearch } from "argot-open-ai/models/components";

let value: ModifyThreadRequestFileSearch = {};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vectorStoreIds`                                                                                                                                        | *string*[]                                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.<br/> |