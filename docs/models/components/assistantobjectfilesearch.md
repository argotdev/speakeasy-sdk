# AssistantObjectFileSearch

## Example Usage

```typescript
import { AssistantObjectFileSearch } from "argot-open-ai/models/components";

let value: AssistantObjectFileSearch = {};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vectorStoreIds`                                                                                                                                                        | *string*[]                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                      | The ID of the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.<br/> |