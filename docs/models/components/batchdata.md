# BatchData

## Example Usage

```typescript
import { BatchData } from "argot-open-ai/models/components";

let value: BatchData = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `code`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | An error code identifying the error type.                                  |
| `message`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | A human-readable message providing more details about the error.           |
| `param`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | The name of the parameter that caused the error, if applicable.            |
| `line`                                                                     | *number*                                                                   | :heavy_minus_sign:                                                         | The line number of the input file where the error occurred, if applicable. |