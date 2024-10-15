# DeleteThreadResponse

## Example Usage

```typescript
import { DeleteThreadResponse } from "argot-open-ai/models/components";

let value: DeleteThreadResponse = {
  id: "<id>",
  deleted: false,
  object: "thread.deleted",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deleted`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `object`                                                                                       | [components.DeleteThreadResponseObject](../../models/components/deletethreadresponseobject.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |