# DeleteProjectUserRequest

## Example Usage

```typescript
import { DeleteProjectUserRequest } from "argot-open-ai/models/operations";

let value: DeleteProjectUserRequest = {
  projectId: "<id>",
  userId: "<id>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectId`            | *string*               | :heavy_check_mark:     | The ID of the project. |
| `userId`               | *string*               | :heavy_check_mark:     | The ID of the user.    |