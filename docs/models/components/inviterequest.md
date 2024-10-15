# InviteRequest

## Example Usage

```typescript
import { InviteRequest } from "argot-open-ai/models/components";

let value: InviteRequest = {
  email: "Dean_Lebsack95@gmail.com",
  role: "reader",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `email`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | Send an email to this address                                                |
| `role`                                                                       | [components.InviteRequestRole](../../models/components/inviterequestrole.md) | :heavy_check_mark:                                                           | `owner` or `reader`                                                          |