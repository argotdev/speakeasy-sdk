# ServiceAccountUpdated

The details for events with this `type`.

## Example Usage

```typescript
import { ServiceAccountUpdated } from "argot-open-ai/models/components";

let value: ServiceAccountUpdated = {};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The service account ID.                                                                                                              |
| `changesRequested`                                                                                                                   | [components.AuditLogServiceAccountUpdatedChangesRequested](../../models/components/auditlogserviceaccountupdatedchangesrequested.md) | :heavy_minus_sign:                                                                                                                   | The payload used to updated the service account.                                                                                     |