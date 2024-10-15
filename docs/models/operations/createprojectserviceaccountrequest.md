# CreateProjectServiceAccountRequest

## Example Usage

```typescript
import { CreateProjectServiceAccountRequest } from "argot-open-ai/models/operations";

let value: CreateProjectServiceAccountRequest = {
  projectId: "<id>",
  projectServiceAccountCreateRequest: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the project.                                                                                         |
| `projectServiceAccountCreateRequest`                                                                           | [components.ProjectServiceAccountCreateRequest](../../models/components/projectserviceaccountcreaterequest.md) | :heavy_check_mark:                                                                                             | The project service account create request payload.                                                            |