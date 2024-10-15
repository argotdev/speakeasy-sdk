# ProjectListResponse

## Example Usage

```typescript
import { ProjectListResponse } from "argot-open-ai/models/components";

let value: ProjectListResponse = {
  object: "list",
  data: [
    {
      id: "<id>",
      object: "organization.project",
      name: "<value>",
      createdAt: 979963,
      status: "active",
    },
  ],
  firstId: "<id>",
  lastId: "<id>",
  hasMore: false,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `object`                                                                                     | [components.ProjectListResponseObject](../../models/components/projectlistresponseobject.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [components.Project](../../models/components/project.md)[]                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `firstId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `lastId`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `hasMore`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |