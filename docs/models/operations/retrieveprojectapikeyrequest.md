# RetrieveProjectApiKeyRequest

## Example Usage

```typescript
import { RetrieveProjectApiKeyRequest } from "argot-open-ai/models/operations";

let value: RetrieveProjectApiKeyRequest = {
  projectId: "<id>",
  keyId: "<id>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectId`            | *string*               | :heavy_check_mark:     | The ID of the project. |
| `keyId`                | *string*               | :heavy_check_mark:     | The ID of the API key. |