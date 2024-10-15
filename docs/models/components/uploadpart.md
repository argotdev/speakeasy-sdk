# UploadPart

The upload Part represents a chunk of bytes we can add to an Upload object.


## Example Usage

```typescript
import { UploadPart } from "argot-open-ai/models/components";

let value: UploadPart = {
  id: "<id>",
  createdAt: 298282,
  uploadId: "<id>",
  object: "upload.part",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The upload Part unique identifier, which can be referenced in API endpoints. |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | The Unix timestamp (in seconds) for when the Part was created.               |
| `uploadId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | The ID of the Upload object that this Part was added to.                     |
| `object`                                                                     | [components.UploadPartObject](../../models/components/uploadpartobject.md)   | :heavy_check_mark:                                                           | The object type, which is always `upload.part`.                              |