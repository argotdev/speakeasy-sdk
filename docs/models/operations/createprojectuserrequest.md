# CreateProjectUserRequest

## Example Usage

```typescript
import { CreateProjectUserRequest } from "argot-open-ai/models/operations";

let value: CreateProjectUserRequest = {
  projectId: "<id>",
  projectUserCreateRequest: {
    userId: "<id>",
    role: "owner",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projectId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of the project.                                                                     |
| `projectUserCreateRequest`                                                                 | [components.ProjectUserCreateRequest](../../models/components/projectusercreaterequest.md) | :heavy_check_mark:                                                                         | The project user create request payload.                                                   |