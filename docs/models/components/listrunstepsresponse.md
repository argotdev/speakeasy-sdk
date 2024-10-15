# ListRunStepsResponse

## Example Usage

```typescript
import { ListRunStepsResponse } from "argot-open-ai/models/components";

let value: ListRunStepsResponse = {
  object: "list",
  data: [
    {
      id: "<id>",
      object: "thread.run.step",
      createdAt: 967795,
      assistantId: "<id>",
      threadId: "<id>",
      runId: "<id>",
      type: "tool_calls",
      status: "cancelled",
      stepDetails: {
        type: "tool_calls",
        toolCalls: [
          {
            id: "<id>",
            type: "function",
            function: {
              name: "<value>",
              arguments: "<value>",
              output: "<value>",
            },
          },
        ],
      },
      lastError: {
        code: "server_error",
        message: "<value>",
      },
      expiredAt: 552078,
      cancelledAt: 271653,
      failedAt: 455444,
      completedAt: 401713,
      metadata: {},
      usage: {
        completionTokens: 248413,
        promptTokens: 505866,
        totalTokens: 310381,
      },
    },
  ],
  firstId: "step_abc123",
  lastId: "step_abc456",
  hasMore: false,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `object`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | list                                                                   |
| `data`                                                                 | [components.RunStepObject](../../models/components/runstepobject.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `firstId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | step_abc123                                                            |
| `lastId`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | step_abc456                                                            |
| `hasMore`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    | false                                                                  |