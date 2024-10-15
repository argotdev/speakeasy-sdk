# AuditLogChangesRequested

The payload used to update the organization settings.

## Example Usage

```typescript
import { AuditLogChangesRequested } from "argot-open-ai/models/components";

let value: AuditLogChangesRequested = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `title`                                                    | *string*                                                   | :heavy_minus_sign:                                         | The organization title.                                    |
| `description`                                              | *string*                                                   | :heavy_minus_sign:                                         | The organization description.                              |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | The organization name.                                     |
| `settings`                                                 | [components.Settings](../../models/components/settings.md) | :heavy_minus_sign:                                         | N/A                                                        |