# InviteDeleteResponse

## Example Usage

```typescript
import { InviteDeleteResponse } from "argot-open-ai/models/components";

let value: InviteDeleteResponse = {
  object: "organization.invite.deleted",
  id: "<id>",
  deleted: false,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `object`                                                                                       | [components.InviteDeleteResponseObject](../../models/components/invitedeleteresponseobject.md) | :heavy_check_mark:                                                                             | The object type, which is always `organization.invite.deleted`                                 |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deleted`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |