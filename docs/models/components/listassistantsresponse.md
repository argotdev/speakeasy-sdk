# ListAssistantsResponse

## Example Usage

```typescript
import { ListAssistantsResponse } from "argot-open-ai/models/components";

let value: ListAssistantsResponse = {
  object: "list",
  data: [
    {
      id: "<id>",
      object: "assistant",
      createdAt: 207470,
      name: "<value>",
      description: "league given only trash within ack",
      model: "Land Cruiser",
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
      temperature: 1,
      topP: 1,
    },
  ],
  firstId: "asst_abc123",
  lastId: "asst_abc456",
  hasMore: false,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | list                                                                       |
| `data`                                                                     | [components.AssistantObject](../../models/components/assistantobject.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `firstId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | asst_abc123                                                                |
| `lastId`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | asst_abc456                                                                |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        | false                                                                      |