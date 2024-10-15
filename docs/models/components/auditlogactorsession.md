# AuditLogActorSession

The session in which the audit logged action was performed.

## Example Usage

```typescript
import { AuditLogActorSession } from "argot-open-ai/models/components";

let value: AuditLogActorSession = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `user`                                                                       | [components.AuditLogActorUser](../../models/components/auditlogactoruser.md) | :heavy_minus_sign:                                                           | The user who performed the audit logged action.                              |
| `ipAddress`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | The IP address from which the action was performed.                          |