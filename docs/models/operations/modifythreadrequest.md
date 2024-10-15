# ModifyThreadRequest

## Example Usage

```typescript
import { ModifyThreadRequest } from "argot-open-ai/models/operations";

let value: ModifyThreadRequest = {
  threadId: "<id>",
  modifyThreadRequest: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `threadId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the thread to modify. Only the `metadata` can be modified.             |
| `modifyThreadRequest`                                                            | [components.ModifyThreadRequest](../../models/components/modifythreadrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |