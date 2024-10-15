# ProjectServiceAccount

Represents an individual service account in a project.

## Example Usage

```typescript
import { ProjectServiceAccount } from "argot-open-ai/models/components";

let value: ProjectServiceAccount = {
  object: "organization.project.service_account",
  id: "<id>",
  name: "<value>",
  role: "member",
  createdAt: 29190,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `object`                                                                                         | [components.ProjectServiceAccountObject](../../models/components/projectserviceaccountobject.md) | :heavy_check_mark:                                                                               | The object type, which is always `organization.project.service_account`                          |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The identifier, which can be referenced in API endpoints                                         |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The name of the service account                                                                  |
| `role`                                                                                           | [components.ProjectServiceAccountRole](../../models/components/projectserviceaccountrole.md)     | :heavy_check_mark:                                                                               | `owner` or `member`                                                                              |
| `createdAt`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | The Unix timestamp (in seconds) of when the service account was created                          |