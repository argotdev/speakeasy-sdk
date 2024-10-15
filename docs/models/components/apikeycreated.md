# ApiKeyCreated

The details for events with this `type`.

## Example Usage

```typescript
import { ApiKeyCreated } from "argot-open-ai/models/components";

let value: ApiKeyCreated = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | The tracking ID of the API key.                                    |
| `data`                                                             | [components.AuditLogData](../../models/components/auditlogdata.md) | :heavy_minus_sign:                                                 | The payload used to create the API key.                            |