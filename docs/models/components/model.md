# Model

Describes an OpenAI model offering that can be used with the API.

## Example Usage

```typescript
import { Model } from "argot-open-ai/models/components";

let value: Model = {
  id: "<id>",
  created: 359978,
  object: "model",
  ownedBy: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | The model identifier, which can be referenced in the API endpoints. |
| `created`                                                           | *number*                                                            | :heavy_check_mark:                                                  | The Unix timestamp (in seconds) when the model was created.         |
| `object`                                                            | [components.ModelObject](../../models/components/modelobject.md)    | :heavy_check_mark:                                                  | The object type, which is always "model".                           |
| `ownedBy`                                                           | *string*                                                            | :heavy_check_mark:                                                  | The organization that owns the model.                               |