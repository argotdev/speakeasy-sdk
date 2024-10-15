# InviteSent

The details for events with this `type`.

## Example Usage

```typescript
import { InviteSent } from "argot-open-ai/models/components";

let value: InviteSent = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | The ID of the invite.                                                                  |
| `data`                                                                                 | [components.AuditLogInviteSentData](../../models/components/auditloginvitesentdata.md) | :heavy_minus_sign:                                                                     | The payload used to create the invite.                                                 |