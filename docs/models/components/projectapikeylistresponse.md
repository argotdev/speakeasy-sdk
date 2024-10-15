# ProjectApiKeyListResponse

## Example Usage

```typescript
import { ProjectApiKeyListResponse } from "argot-open-ai/models/components";

let value: ProjectApiKeyListResponse = {
  object: "list",
  data: [
    {
      object: "organization.project.api_key",
      redactedValue: "<value>",
      name: "<value>",
      createdAt: 365100,
      id: "<id>",
      owner: {},
    },
  ],
  firstId: "<id>",
  lastId: "<id>",
  hasMore: false,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                 | [components.ProjectApiKeyListResponseObject](../../models/components/projectapikeylistresponseobject.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.ProjectApiKey](../../models/components/projectapikey.md)[]                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `firstId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `lastId`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `hasMore`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |