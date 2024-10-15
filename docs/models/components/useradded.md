# UserAdded

The details for events with this `type`.

## Example Usage

```typescript
import { UserAdded } from "argot-open-ai/models/components";

let value: UserAdded = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The user ID.                                                                         |
| `data`                                                                               | [components.AuditLogUserAddedData](../../models/components/auditloguseraddeddata.md) | :heavy_minus_sign:                                                                   | The payload used to add the user to the project.                                     |