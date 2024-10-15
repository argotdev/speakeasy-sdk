# CreateUploadRequest

## Example Usage

```typescript
import { CreateUploadRequest } from "argot-open-ai/models/components";

let value: CreateUploadRequest = {
  filename: "example.file",
  purpose: "batch",
  bytes: 135474,
  mimeType: "<value>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `filename`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The name of the file to upload.<br/>                                                                                                                       |
| `purpose`                                                                                                                                                  | [components.CreateUploadRequestPurpose](../../models/components/createuploadrequestpurpose.md)                                                             | :heavy_check_mark:                                                                                                                                         | The intended purpose of the uploaded file.<br/><br/>See the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).<br/>  |
| `bytes`                                                                                                                                                    | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The number of bytes in the file you are uploading.<br/>                                                                                                    |
| `mimeType`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The MIME type of the file.<br/><br/>This must fall within the supported MIME types for your file purpose. See the supported MIME types for assistants and vision.<br/> |