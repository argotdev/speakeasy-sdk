# MessageRequestContentTextObject

The text content that is part of a message.

## Example Usage

```typescript
import { MessageRequestContentTextObject } from "argot-open-ai/models/components";

let value: MessageRequestContentTextObject = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [components.MessageRequestContentTextObjectType](../../models/components/messagerequestcontenttextobjecttype.md) | :heavy_check_mark:                                                                                               | Always `text`.                                                                                                   |
| `text`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Text content to be sent to the model                                                                             |