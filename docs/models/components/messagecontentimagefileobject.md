# MessageContentImageFileObject

References an image [File](/docs/api-reference/files) in the content of a message.

## Example Usage

```typescript
import { MessageContentImageFileObject } from "argot-open-ai/models/components";

let value: MessageContentImageFileObject = {
  type: "image_file",
  imageFile: {
    fileId: "<id>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.MessageContentImageFileObjectType](../../models/components/messagecontentimagefileobjecttype.md) | :heavy_check_mark:                                                                                           | Always `image_file`.                                                                                         |
| `imageFile`                                                                                                  | [components.ImageFile](../../models/components/imagefile.md)                                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |