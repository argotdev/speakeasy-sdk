# VectorStoreFileObjectLastError

The last error associated with this vector store file. Will be `null` if there are no errors.

## Example Usage

```typescript
import { VectorStoreFileObjectLastError } from "argot-open-ai/models/components";

let value: VectorStoreFileObjectLastError = {
  code: "invalid_file",
  message: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `code`                                                                                       | [components.VectorStoreFileObjectCode](../../models/components/vectorstorefileobjectcode.md) | :heavy_check_mark:                                                                           | One of `server_error` or `rate_limit_exceeded`.                                              |
| `message`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | A human-readable description of the error.                                                   |