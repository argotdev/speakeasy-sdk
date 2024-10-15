# CreateMessageRequest

## Example Usage

```typescript
import { CreateMessageRequest } from "argot-open-ai/models/operations";

let value: CreateMessageRequest = {
  threadId: "<id>",
  createMessageRequest: {
    role: "user",
    content: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `threadId`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the [thread](/docs/api-reference/threads) to create a message for.       |
| `createMessageRequest`                                                             | [components.CreateMessageRequest](../../models/components/createmessagerequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |