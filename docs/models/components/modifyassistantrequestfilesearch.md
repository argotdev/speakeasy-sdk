# ModifyAssistantRequestFileSearch

## Example Usage

```typescript
import { ModifyAssistantRequestFileSearch } from "argot-open-ai/models/components";

let value: ModifyAssistantRequestFileSearch = {};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vectorStoreIds`                                                                                                                                                        | *string*[]                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                      | Overrides the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.<br/> |