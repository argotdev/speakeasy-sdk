# OrganizationUpdated

The details for events with this `type`.

## Example Usage

```typescript
import { OrganizationUpdated } from "argot-open-ai/models/components";

let value: OrganizationUpdated = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | The organization ID.                                                                       |
| `changesRequested`                                                                         | [components.AuditLogChangesRequested](../../models/components/auditlogchangesrequested.md) | :heavy_minus_sign:                                                                         | The payload used to update the organization settings.                                      |