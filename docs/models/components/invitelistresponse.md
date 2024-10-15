# InviteListResponse

## Example Usage

```typescript
import { InviteListResponse } from "argot-open-ai/models/components";

let value: InviteListResponse = {
  object: "list",
  data: [
    {
      object: "organization.invite",
      id: "<id>",
      email: "Jasper_Ferry@yahoo.com",
      role: "owner",
      status: "pending",
      invitedAt: 133439,
      expiresAt: 96804,
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `object`                                                                                   | [components.InviteListResponseObject](../../models/components/invitelistresponseobject.md) | :heavy_check_mark:                                                                         | The object type, which is always `list`                                                    |
| `data`                                                                                     | [components.Invite](../../models/components/invite.md)[]                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `firstId`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | The first `invite_id` in the retrieved `list`                                              |
| `lastId`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | The last `invite_id` in the retrieved `list`                                               |
| `hasMore`                                                                                  | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | The `has_more` property is used for pagination to indicate there are additional results.   |