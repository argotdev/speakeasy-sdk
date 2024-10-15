# MessageContentTextObject

The text content that is part of a message.

## Example Usage

```typescript
import { MessageContentTextObject } from "argot-open-ai/models/components";

let value: MessageContentTextObject = {
  type: "text",
  text: {
    value: "<value>",
    annotations: [
      {
        type: "file_citation",
        text: "<value>",
        fileCitation: {
          fileId: "<id>",
        },
        startIndex: 241418,
        endIndex: 662505,
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [components.MessageContentTextObjectType](../../models/components/messagecontenttextobjecttype.md) | :heavy_check_mark:                                                                                 | Always `text`.                                                                                     |
| `text`                                                                                             | [components.Text](../../models/components/text.md)                                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |