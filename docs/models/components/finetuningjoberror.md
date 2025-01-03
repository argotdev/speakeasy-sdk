# FineTuningJobError

For fine-tuning jobs that have `failed`, this will contain more information on the cause of the failure.

## Example Usage

```typescript
import { FineTuningJobError } from "argot-open-ai/models/components";

let value: FineTuningJobError = {
  code: "<value>",
  message: "<value>",
  param: "<value>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                                                           | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | A machine-readable error code.                                                                                                                   |
| `message`                                                                                                                                        | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | A human-readable error message.                                                                                                                  |
| `param`                                                                                                                                          | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The parameter that was invalid, usually `training_file` or `validation_file`. This field will be null if the failure was not parameter-specific. |