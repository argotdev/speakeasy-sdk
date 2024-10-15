# DeleteModelRequest

## Example Usage

```typescript
import { DeleteModelRequest } from "argot-open-ai/models/operations";

let value: DeleteModelRequest = {
  model: "ft:gpt-4o-mini:acemeco:suffix:abc123",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `model`                              | *string*                             | :heavy_check_mark:                   | The model to delete                  | ft:gpt-4o-mini:acemeco:suffix:abc123 |