# MessageContentTextAnnotationsFileCitationObject

A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the "file_search" tool to search files.

## Example Usage

```typescript
import { MessageContentTextAnnotationsFileCitationObject } from "argot-open-ai/models/components";

let value: MessageContentTextAnnotationsFileCitationObject = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 246063,
  endIndex: 665859,
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | [components.MessageContentTextAnnotationsFileCitationObjectType](../../models/components/messagecontenttextannotationsfilecitationobjecttype.md) | :heavy_check_mark:                                                                                                                               | Always `file_citation`.                                                                                                                          |
| `text`                                                                                                                                           | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The text in the message content that needs to be replaced.                                                                                       |
| `fileCitation`                                                                                                                                   | [components.FileCitation](../../models/components/filecitation.md)                                                                               | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `startIndex`                                                                                                                                     | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `endIndex`                                                                                                                                       | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |