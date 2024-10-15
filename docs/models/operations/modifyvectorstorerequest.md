# ModifyVectorStoreRequest

## Example Usage

```typescript
import { ModifyVectorStoreRequest } from "argot-open-ai/models/operations";

let value: ModifyVectorStoreRequest = {
  vectorStoreId: "<id>",
  updateVectorStoreRequest: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `vectorStoreId`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of the vector store to modify.                                                      |
| `updateVectorStoreRequest`                                                                 | [components.UpdateVectorStoreRequest](../../models/components/updatevectorstorerequest.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |