# ProjectServiceAccountCreateResponse

## Example Usage

```typescript
import { ProjectServiceAccountCreateResponse } from "argot-open-ai/models/components";

let value: ProjectServiceAccountCreateResponse = {
  object: "organization.project.service_account",
  id: "<id>",
  name: "<value>",
  role: "member",
  createdAt: 534917,
  apiKey: {
    object: "organization.project.service_account.api_key",
    value: "<value>",
    name: "<value>",
    createdAt: 404244,
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                                     | [components.ProjectServiceAccountCreateResponseObject](../../models/components/projectserviceaccountcreateresponseobject.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `role`                                                                                                                       | [components.ProjectServiceAccountCreateResponseRole](../../models/components/projectserviceaccountcreateresponserole.md)     | :heavy_check_mark:                                                                                                           | Service accounts can only have one role of type `member`                                                                     |
| `createdAt`                                                                                                                  | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `apiKey`                                                                                                                     | [components.ProjectServiceAccountApiKey](../../models/components/projectserviceaccountapikey.md)                             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |