# UserRoleUpdateRequest

## Example Usage

```typescript
import { UserRoleUpdateRequest } from "argot-open-ai/models/components";

let value: UserRoleUpdateRequest = {
  role: "owner",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `role`                                                                                       | [components.UserRoleUpdateRequestRole](../../models/components/userroleupdaterequestrole.md) | :heavy_check_mark:                                                                           | `owner` or `reader`                                                                          |