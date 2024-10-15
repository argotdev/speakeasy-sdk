# ProjectUpdated

The details for events with this `type`.

## Example Usage

```typescript
import { ProjectUpdated } from "argot-open-ai/models/components";

let value: ProjectUpdated = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The project ID.                                                                                                        |
| `changesRequested`                                                                                                     | [components.AuditLogProjectUpdatedChangesRequested](../../models/components/auditlogprojectupdatedchangesrequested.md) | :heavy_minus_sign:                                                                                                     | The payload used to update the project.                                                                                |