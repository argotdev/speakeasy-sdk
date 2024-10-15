# RetrieveProjectServiceAccountRequest

## Example Usage

```typescript
import { RetrieveProjectServiceAccountRequest } from "argot-open-ai/models/operations";

let value: RetrieveProjectServiceAccountRequest = {
  projectId: "<id>",
  serviceAccountId: "<id>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `projectId`                    | *string*                       | :heavy_check_mark:             | The ID of the project.         |
| `serviceAccountId`             | *string*                       | :heavy_check_mark:             | The ID of the service account. |