# ProjectCreated

The details for events with this `type`.

## Example Usage

```typescript
import { ProjectCreated } from "argot-open-ai/models/components";

let value: ProjectCreated = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | The project ID.                                                                                |
| `data`                                                                                         | [components.AuditLogProjectCreatedData](../../models/components/auditlogprojectcreateddata.md) | :heavy_minus_sign:                                                                             | The payload used to create the project.                                                        |