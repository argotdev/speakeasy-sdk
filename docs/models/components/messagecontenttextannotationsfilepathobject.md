# MessageContentTextAnnotationsFilePathObject

A URL for the file that's generated when the assistant used the `code_interpreter` tool to generate a file.

## Example Usage

```typescript
import { MessageContentTextAnnotationsFilePathObject } from "argot-open-ai/models/components";

let value: MessageContentTextAnnotationsFilePathObject = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 517309,
  endIndex: 424089,
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                   | [components.MessageContentTextAnnotationsFilePathObjectType](../../models/components/messagecontenttextannotationsfilepathobjecttype.md) | :heavy_check_mark:                                                                                                                       | Always `file_path`.                                                                                                                      |
| `text`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The text in the message content that needs to be replaced.                                                                               |
| `filePath`                                                                                                                               | [components.FilePath](../../models/components/filepath.md)                                                                               | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `startIndex`                                                                                                                             | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `endIndex`                                                                                                                               | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |