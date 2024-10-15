# ProjectApiKey

Represents an individual API key in a project.

## Example Usage

```typescript
import { ProjectApiKey } from "argot-open-ai/models/components";

let value: ProjectApiKey = {
  object: "organization.project.api_key",
  redactedValue: "<value>",
  name: "<value>",
  createdAt: 19122,
  id: "<id>",
  owner: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `object`                                                                         | [components.ProjectApiKeyObject](../../models/components/projectapikeyobject.md) | :heavy_check_mark:                                                               | The object type, which is always `organization.project.api_key`                  |
| `redactedValue`                                                                  | *string*                                                                         | :heavy_check_mark:                                                               | The redacted value of the API key                                                |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | The name of the API key                                                          |
| `createdAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | The Unix timestamp (in seconds) of when the API key was created                  |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The identifier, which can be referenced in API endpoints                         |
| `owner`                                                                          | [components.Owner](../../models/components/owner.md)                             | :heavy_check_mark:                                                               | N/A                                                                              |