# ChatCompletionRequestMessageContentPartText

## Example Usage

```typescript
import { ChatCompletionRequestMessageContentPartText } from "argot-open-ai/models/components";

let value: ChatCompletionRequestMessageContentPartText = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | The type of the content part.                      |
| `text`                                             | *string*                                           | :heavy_check_mark:                                 | The text content.                                  |