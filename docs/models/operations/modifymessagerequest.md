# ModifyMessageRequest

## Example Usage

```typescript
import { ModifyMessageRequest } from "argot-open-ai/models/operations";

let value: ModifyMessageRequest = {
  threadId: "<id>",
  messageId: "<id>",
  modifyMessageRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `threadId`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the thread to which this message belongs.                                |
| `messageId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the message to modify.                                                   |
| `modifyMessageRequest`                                                             | [components.ModifyMessageRequest](../../models/components/modifymessagerequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |