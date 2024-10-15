# UserDeleteResponse

## Example Usage

```typescript
import { UserDeleteResponse } from "argot-open-ai/models/components";

let value: UserDeleteResponse = {
  object: "organization.user.deleted",
  id: "<id>",
  deleted: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `object`                                                                                   | [components.UserDeleteResponseObject](../../models/components/userdeleteresponseobject.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deleted`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |