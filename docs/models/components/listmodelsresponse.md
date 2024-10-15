# ListModelsResponse

## Example Usage

```typescript
import { ListModelsResponse } from "argot-open-ai/models/components";

let value: ListModelsResponse = {
  object: "list",
  data: [
    {
      id: "<id>",
      created: 11714,
      object: "model",
      ownedBy: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `object`                                                                                   | [components.ListModelsResponseObject](../../models/components/listmodelsresponseobject.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [components.Model](../../models/components/model.md)[]                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |