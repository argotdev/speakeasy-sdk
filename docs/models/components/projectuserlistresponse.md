# ProjectUserListResponse

## Example Usage

```typescript
import { ProjectUserListResponse } from "argot-open-ai/models/components";

let value: ProjectUserListResponse = {
  object: "<value>",
  data: [
    {
      object: "organization.project.user",
      id: "<id>",
      name: "<value>",
      email: "Gregg_Hegmann@yahoo.com",
      role: "owner",
      addedAt: 614528,
    },
  ],
  firstId: "<id>",
  lastId: "<id>",
  hasMore: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `object`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.ProjectUser](../../models/components/projectuser.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `firstId`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `lastId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `hasMore`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |