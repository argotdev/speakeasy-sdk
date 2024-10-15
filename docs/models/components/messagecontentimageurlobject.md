# MessageContentImageUrlObject

References an image URL in the content of a message.

## Example Usage

```typescript
import { MessageContentImageUrlObject } from "argot-open-ai/models/components";

let value: MessageContentImageUrlObject = {
  type: "image_url",
  imageUrl: {
    url: "https://animated-velocity.info",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [components.MessageContentImageUrlObjectType](../../models/components/messagecontentimageurlobjecttype.md)         | :heavy_check_mark:                                                                                                 | The type of the content part.                                                                                      |
| `imageUrl`                                                                                                         | [components.MessageContentImageUrlObjectImageUrl](../../models/components/messagecontentimageurlobjectimageurl.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |