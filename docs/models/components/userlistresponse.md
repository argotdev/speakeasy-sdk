# UserListResponse

## Example Usage

```typescript
import { UserListResponse } from "argot-open-ai/models/components";

let value: UserListResponse = {
  object: "list",
  data: [
    {
      object: "organization.user",
      id: "<id>",
      name: "<value>",
      email: "Nathanial_Weber@yahoo.com",
      role: "owner",
      addedAt: 684935,
    },
  ],
  firstId: "<id>",
  lastId: "<id>",
  hasMore: false,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `object`                                                                               | [components.UserListResponseObject](../../models/components/userlistresponseobject.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [components.User](../../models/components/user.md)[]                                   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `firstId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `lastId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `hasMore`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |