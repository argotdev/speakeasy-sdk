# ModifyProjectRequest

## Example Usage

```typescript
import { ModifyProjectRequest } from "argot-open-ai/models/operations";

let value: ModifyProjectRequest = {
  projectId: "<id>",
  projectUpdateRequest: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the project.                                                             |
| `projectUpdateRequest`                                                             | [components.ProjectUpdateRequest](../../models/components/projectupdaterequest.md) | :heavy_check_mark:                                                                 | The project update request payload.                                                |