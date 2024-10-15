# ServiceAccountCreated

The details for events with this `type`.

## Example Usage

```typescript
import { ServiceAccountCreated } from "argot-open-ai/models/components";

let value: ServiceAccountCreated = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The service account ID.                                                                                      |
| `data`                                                                                                       | [components.AuditLogServiceAccountCreatedData](../../models/components/auditlogserviceaccountcreateddata.md) | :heavy_minus_sign:                                                                                           | The payload used to create the service account.                                                              |