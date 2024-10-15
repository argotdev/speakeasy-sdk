# ResponseFormatJsonSchema

## Example Usage

```typescript
import { ResponseFormatJsonSchema } from "argot-open-ai/models/components";

let value: ResponseFormatJsonSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [components.ResponseFormatJsonSchemaType](../../models/components/responseformatjsonschematype.md) | :heavy_check_mark:                                                                                 | The type of response format being defined: `json_schema`                                           |
| `jsonSchema`                                                                                       | [components.JsonSchema](../../models/components/jsonschema.md)                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |