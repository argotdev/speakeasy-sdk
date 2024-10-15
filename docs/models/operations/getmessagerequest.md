# GetMessageRequest

## Example Usage

```typescript
import { GetMessageRequest } from "argot-open-ai/models/operations";

let value: GetMessageRequest = {
  threadId: "<id>",
  messageId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `threadId`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the [thread](/docs/api-reference/threads) to which this message belongs. |
| `messageId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the message to retrieve.                                                 |