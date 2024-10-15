# User

Represents an individual `user` within an organization.

## Example Usage

```typescript
import { User } from "argot-open-ai/models/components";

let value: User = {
  object: "organization.user",
  id: "<id>",
  name: "<value>",
  email: "Avis16@hotmail.com",
  role: "owner",
  addedAt: 470621,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `object`                                                       | [components.UserObject](../../models/components/userobject.md) | :heavy_check_mark:                                             | The object type, which is always `organization.user`           |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | The identifier, which can be referenced in API endpoints       |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of the user                                           |
| `email`                                                        | *string*                                                       | :heavy_check_mark:                                             | The email address of the user                                  |
| `role`                                                         | [components.UserRole](../../models/components/userrole.md)     | :heavy_check_mark:                                             | `owner` or `reader`                                            |
| `addedAt`                                                      | *number*                                                       | :heavy_check_mark:                                             | The Unix timestamp (in seconds) of when the user was added.    |