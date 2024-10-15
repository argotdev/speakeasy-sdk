# CompleteUploadRequest

## Example Usage

```typescript
import { CompleteUploadRequest } from "argot-open-ai/models/components";

let value: CompleteUploadRequest = {
  partIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `partIds`                                                                                                 | *string*[]                                                                                                | :heavy_check_mark:                                                                                        | The ordered list of Part IDs.<br/>                                                                        |
| `md5`                                                                                                     | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The optional md5 checksum for the file contents to verify if the bytes uploaded matches what you expect.<br/> |