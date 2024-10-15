# CompleteUploadRequest

## Example Usage

```typescript
import { CompleteUploadRequest } from "argot-open-ai/models/operations";

let value: CompleteUploadRequest = {
  uploadId: "upload_abc123",
  completeUploadRequest: {
    partIds: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `uploadId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the Upload.<br/>                                                           | upload_abc123                                                                        |
| `completeUploadRequest`                                                              | [components.CompleteUploadRequest](../../models/components/completeuploadrequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |