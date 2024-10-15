# DeleteMessageResponse

## Example Usage

```typescript
import { DeleteMessageResponse } from "argot-open-ai/models/components";

let value: DeleteMessageResponse = {
  id: "<id>",
  deleted: false,
  object: "thread.message.deleted",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `deleted`                                                                                        | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `object`                                                                                         | [components.DeleteMessageResponseObject](../../models/components/deletemessageresponseobject.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |