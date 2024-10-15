# Owner

## Example Usage

```typescript
import { Owner } from "argot-open-ai/models/components";

let value: Owner = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [components.ProjectApiKeyType](../../models/components/projectapikeytype.md)         | :heavy_minus_sign:                                                                   | `user` or `service_account`                                                          |
| `user`                                                                               | [components.ProjectUser](../../models/components/projectuser.md)                     | :heavy_minus_sign:                                                                   | Represents an individual user in a project.                                          |
| `serviceAccount`                                                                     | [components.ProjectServiceAccount](../../models/components/projectserviceaccount.md) | :heavy_minus_sign:                                                                   | Represents an individual service account in a project.                               |