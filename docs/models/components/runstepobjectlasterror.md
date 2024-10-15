# RunStepObjectLastError

The last error associated with this run step. Will be `null` if there are no errors.

## Example Usage

```typescript
import { RunStepObjectLastError } from "argot-open-ai/models/components";

let value: RunStepObjectLastError = {
  code: "rate_limit_exceeded",
  message: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | [components.RunStepObjectCode](../../models/components/runstepobjectcode.md) | :heavy_check_mark:                                                           | One of `server_error` or `rate_limit_exceeded`.                              |
| `message`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | A human-readable description of the error.                                   |