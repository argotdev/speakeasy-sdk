# ChatCompletionRequestMessageContentPartImage

## Example Usage

```typescript
import { ChatCompletionRequestMessageContentPartImage } from "argot-open-ai/models/components";

let value: ChatCompletionRequestMessageContentPartImage = {
  type: "image_url",
  imageUrl: {
    url: "https://dirty-fundraising.net/",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [components.ChatCompletionRequestMessageContentPartImageType](../../models/components/chatcompletionrequestmessagecontentpartimagetype.md) | :heavy_check_mark:                                                                                                                         | The type of the content part.                                                                                                              |
| `imageUrl`                                                                                                                                 | [components.ImageUrl](../../models/components/imageurl.md)                                                                                 | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |