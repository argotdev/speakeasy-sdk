# Project

Represents an individual project.

## Example Usage

```typescript
import { Project } from "argot-open-ai/models/components";

let value: Project = {
  id: "<id>",
  object: "organization.project",
  name: "<value>",
  createdAt: 117315,
  status: "active",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | The identifier, which can be referenced in API endpoints                    |
| `object`                                                                    | [components.ProjectObject](../../models/components/projectobject.md)        | :heavy_check_mark:                                                          | The object type, which is always `organization.project`                     |
| `name`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | The name of the project. This appears in reporting.                         |
| `createdAt`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | The Unix timestamp (in seconds) of when the project was created.            |
| `archivedAt`                                                                | *number*                                                                    | :heavy_minus_sign:                                                          | The Unix timestamp (in seconds) of when the project was archived or `null`. |
| `status`                                                                    | [components.ProjectStatus](../../models/components/projectstatus.md)        | :heavy_check_mark:                                                          | `active` or `archived`                                                      |