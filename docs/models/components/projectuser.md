# ProjectUser

Represents an individual user in a project.

## Example Usage

```typescript
import { ProjectUser } from "argot-open-ai/models/components";

let value: ProjectUser = {
  object: "organization.project.user",
  id: "<id>",
  name: "<value>",
  email: "Madalyn.Leuschke@hotmail.com",
  role: "owner",
  addedAt: 29950,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | [components.ProjectUserObject](../../models/components/projectuserobject.md) | :heavy_check_mark:                                                           | The object type, which is always `organization.project.user`                 |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The identifier, which can be referenced in API endpoints                     |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name of the user                                                         |
| `email`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | The email address of the user                                                |
| `role`                                                                       | [components.ProjectUserRole](../../models/components/projectuserrole.md)     | :heavy_check_mark:                                                           | `owner` or `member`                                                          |
| `addedAt`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | The Unix timestamp (in seconds) of when the project was added.               |