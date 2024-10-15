# ProjectUserCreateRequest

## Example Usage

```typescript
import { ProjectUserCreateRequest } from "argot-open-ai/models/components";

let value: ProjectUserCreateRequest = {
  userId: "<id>",
  role: "owner",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `userId`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the user.                                                                                |
| `role`                                                                                             | [components.ProjectUserCreateRequestRole](../../models/components/projectusercreaterequestrole.md) | :heavy_check_mark:                                                                                 | `owner` or `member`                                                                                |