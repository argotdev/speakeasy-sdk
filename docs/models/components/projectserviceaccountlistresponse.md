# ProjectServiceAccountListResponse

## Example Usage

```typescript
import { ProjectServiceAccountListResponse } from "argot-open-ai/models/components";

let value: ProjectServiceAccountListResponse = {
  object: "list",
  data: [
    {
      object: "organization.project.service_account",
      id: "<id>",
      name: "<value>",
      role: "member",
      createdAt: 959143,
    },
  ],
  firstId: "<id>",
  lastId: "<id>",
  hasMore: false,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                                 | [components.ProjectServiceAccountListResponseObject](../../models/components/projectserviceaccountlistresponseobject.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `data`                                                                                                                   | [components.ProjectServiceAccount](../../models/components/projectserviceaccount.md)[]                                   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `firstId`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `lastId`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `hasMore`                                                                                                                | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |