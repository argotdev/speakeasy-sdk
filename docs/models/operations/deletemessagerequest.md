# DeleteMessageRequest

## Example Usage

```typescript
import { DeleteMessageRequest } from "argot-open-ai/models/operations";

let value: DeleteMessageRequest = {
  threadId: "<id>",
  messageId: "<id>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `threadId`                                          | *string*                                            | :heavy_check_mark:                                  | The ID of the thread to which this message belongs. |
| `messageId`                                         | *string*                                            | :heavy_check_mark:                                  | The ID of the message to delete.                    |