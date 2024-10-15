# DeleteProjectApiKeyRequest

## Example Usage

```typescript
import { DeleteProjectApiKeyRequest } from "argot-open-ai/models/operations";

let value: DeleteProjectApiKeyRequest = {
  projectId: "<id>",
  keyId: "<id>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectId`            | *string*               | :heavy_check_mark:     | The ID of the project. |
| `keyId`                | *string*               | :heavy_check_mark:     | The ID of the API key. |