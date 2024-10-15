# UserUpdated

The details for events with this `type`.

## Example Usage

```typescript
import { UserUpdated } from "argot-open-ai/models/components";

let value: UserUpdated = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The project ID.                                                                                                  |
| `changesRequested`                                                                                               | [components.AuditLogUserUpdatedChangesRequested](../../models/components/auditloguserupdatedchangesrequested.md) | :heavy_minus_sign:                                                                                               | The payload used to update the user.                                                                             |