# ImageFile

## Example Usage

```typescript
import { ImageFile } from "argot-open-ai/models/components";

let value: ImageFile = {
  fileId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fileId`                                                                                                                                                                    | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | The [File](/docs/api-reference/files) ID of the image in the message content. Set `purpose="vision"` when uploading the File if you need to later display the file content. |
| `detail`                                                                                                                                                                    | [components.MessageContentImageFileObjectDetail](../../models/components/messagecontentimagefileobjectdetail.md)                                                            | :heavy_minus_sign:                                                                                                                                                          | Specifies the detail level of the image if specified by the user. `low` uses fewer tokens, you can opt in to high resolution using `high`.                                  |