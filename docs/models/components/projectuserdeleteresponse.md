# ProjectUserDeleteResponse

## Example Usage

```typescript
import { ProjectUserDeleteResponse } from "argot-open-ai/models/components";

let value: ProjectUserDeleteResponse = {
  object: "organization.project.user.deleted",
  id: "<id>",
  deleted: false,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                 | [components.ProjectUserDeleteResponseObject](../../models/components/projectuserdeleteresponseobject.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `deleted`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |