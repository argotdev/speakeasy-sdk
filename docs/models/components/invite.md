# Invite

Represents an individual `invite` to the organization.

## Example Usage

```typescript
import { Invite } from "argot-open-ai/models/components";

let value: Invite = {
  object: "organization.invite",
  id: "<id>",
  email: "Grady81@yahoo.com",
  role: "reader",
  status: "pending",
  invitedAt: 698249,
  expiresAt: 335498,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `object`                                                           | [components.InviteObject](../../models/components/inviteobject.md) | :heavy_check_mark:                                                 | The object type, which is always `organization.invite`             |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | The identifier, which can be referenced in API endpoints           |
| `email`                                                            | *string*                                                           | :heavy_check_mark:                                                 | The email address of the individual to whom the invite was sent    |
| `role`                                                             | [components.InviteRole](../../models/components/inviterole.md)     | :heavy_check_mark:                                                 | `owner` or `reader`                                                |
| `status`                                                           | [components.InviteStatus](../../models/components/invitestatus.md) | :heavy_check_mark:                                                 | `accepted`,`expired`, or `pending`                                 |
| `invitedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | The Unix timestamp (in seconds) of when the invite was sent.       |
| `expiresAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | The Unix timestamp (in seconds) of when the invite expires.        |
| `acceptedAt`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | The Unix timestamp (in seconds) of when the invite was accepted.   |