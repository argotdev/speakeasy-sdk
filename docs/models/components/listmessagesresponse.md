# ListMessagesResponse

## Example Usage

```typescript
import { ListMessagesResponse } from "argot-open-ai/models/components";

let value: ListMessagesResponse = {
  object: "list",
  data: [
    {
      id: "<id>",
      object: "thread.message",
      createdAt: 356707,
      threadId: "<id>",
      status: "in_progress",
      incompleteDetails: {
        reason: "content_filter",
      },
      completedAt: 401259,
      incompleteAt: 929292,
      role: "user",
      content: [
        {
          type: "refusal",
          refusal: "<value>",
        },
      ],
      assistantId: "<id>",
      runId: "<id>",
      attachments: [
        {},
      ],
      metadata: {},
    },
  ],
  firstId: "msg_abc123",
  lastId: "msg_abc123",
  hasMore: false,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `object`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | list                                                                   |
| `data`                                                                 | [components.MessageObject](../../models/components/messageobject.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `firstId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | msg_abc123                                                             |
| `lastId`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | msg_abc123                                                             |
| `hasMore`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    | false                                                                  |