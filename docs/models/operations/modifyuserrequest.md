# ModifyUserRequest

## Example Usage

```typescript
import { ModifyUserRequest } from "argot-open-ai/models/operations";

let value: ModifyUserRequest = {
  userId: "<id>",
  userRoleUpdateRequest: {
    role: "owner",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `userId`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the user.                                                                  |
| `userRoleUpdateRequest`                                                              | [components.UserRoleUpdateRequest](../../models/components/userroleupdaterequest.md) | :heavy_check_mark:                                                                   | The new user role to modify. This must be one of `owner` or `member`.                |