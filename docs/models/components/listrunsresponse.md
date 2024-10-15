# ListRunsResponse

## Example Usage

```typescript
import { ListRunsResponse } from "argot-open-ai/models/components";

let value: ListRunsResponse = {
  object: "list",
  data: [
    {
      id: "<id>",
      object: "thread.run",
      createdAt: 237742,
      threadId: "<id>",
      assistantId: "<id>",
      status: "cancelled",
      requiredAction: {
        type: "submit_tool_outputs",
        submitToolOutputs: {
          toolCalls: [
            {
              id: "<id>",
              type: "function",
              function: {
                name: "<value>",
                arguments: "<value>",
              },
            },
          ],
        },
      },
      lastError: {
        code: "invalid_prompt",
        message: "<value>",
      },
      expiresAt: 633998,
      startedAt: 867290,
      cancelledAt: 940210,
      failedAt: 750765,
      completedAt: 699575,
      incompleteDetails: {},
      model: "XC90",
      instructions: "<value>",
      tools: [
        {
          type: "function",
          function: {
            name: "<value>",
          },
        },
      ],
      metadata: {},
      usage: {
        completionTokens: 451822,
        promptTokens: 70869,
        totalTokens: 292794,
      },
      maxPromptTokens: 152354,
      maxCompletionTokens: 417486,
      truncationStrategy: {
        type: "auto",
      },
      toolChoice: {
        type: "code_interpreter",
      },
      responseFormat: {
        type: "json_schema",
        jsonSchema: {
          name: "<value>",
        },
      },
    },
  ],
  firstId: "run_abc123",
  lastId: "run_abc456",
  hasMore: false,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `object`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | list                                                           |
| `data`                                                         | [components.RunObject](../../models/components/runobject.md)[] | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `firstId`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | run_abc123                                                     |
| `lastId`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | run_abc456                                                     |
| `hasMore`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            | false                                                          |