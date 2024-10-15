# MessageCreation

## Example Usage

```typescript
import { MessageCreation } from "argot-open-ai/models/components";

let value: MessageCreation = {
  messageId: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `messageId`                                              | *string*                                                 | :heavy_check_mark:                                       | The ID of the message that was created by this run step. |