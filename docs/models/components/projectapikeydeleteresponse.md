# ProjectApiKeyDeleteResponse

## Example Usage

```typescript
import { ProjectApiKeyDeleteResponse } from "argot-open-ai/models/components";

let value: ProjectApiKeyDeleteResponse = {
  object: "organization.project.api_key.deleted",
  id: "<id>",
  deleted: false,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                     | [components.ProjectApiKeyDeleteResponseObject](../../models/components/projectapikeydeleteresponseobject.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `deleted`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |