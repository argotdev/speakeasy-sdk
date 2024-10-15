# ModifyProjectUserRequest

## Example Usage

```typescript
import { ModifyProjectUserRequest } from "argot-open-ai/models/operations";

let value: ModifyProjectUserRequest = {
  projectId: "<id>",
  userId: "<id>",
  projectUserUpdateRequest: {
    role: "owner",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projectId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of the project.                                                                     |
| `userId`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of the user.                                                                        |
| `projectUserUpdateRequest`                                                                 | [components.ProjectUserUpdateRequest](../../models/components/projectuserupdaterequest.md) | :heavy_check_mark:                                                                         | The project user update request payload.                                                   |