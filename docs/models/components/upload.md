# Upload

The Upload object can accept byte chunks in the form of Parts.


## Example Usage

```typescript
import { Upload } from "argot-open-ai/models/components";

let value: Upload = {
  id: "<id>",
  createdAt: 19193,
  filename: "example.file",
  bytes: 301575,
  purpose: "<value>",
  status: "cancelled",
  expiresAt: 290077,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The Upload unique identifier, which can be referenced in API endpoints.                                                             |
| `createdAt`                                                                                                                         | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The Unix timestamp (in seconds) for when the Upload was created.                                                                    |
| `filename`                                                                                                                          | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The name of the file to be uploaded.                                                                                                |
| `bytes`                                                                                                                             | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The intended number of bytes to be uploaded.                                                                                        |
| `purpose`                                                                                                                           | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The intended purpose of the file. [Please refer here](/docs/api-reference/files/object#files/object-purpose) for acceptable values. |
| `status`                                                                                                                            | [components.UploadStatus](../../models/components/uploadstatus.md)                                                                  | :heavy_check_mark:                                                                                                                  | The status of the Upload.                                                                                                           |
| `expiresAt`                                                                                                                         | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The Unix timestamp (in seconds) for when the Upload was created.                                                                    |
| `object`                                                                                                                            | [components.UploadObject](../../models/components/uploadobject.md)                                                                  | :heavy_minus_sign:                                                                                                                  | The object type, which is always "upload".                                                                                          |
| `file`                                                                                                                              | [components.OpenAIFile](../../models/components/openaifile.md)                                                                      | :heavy_minus_sign:                                                                                                                  | The `File` object represents a document that has been uploaded to OpenAI.                                                           |