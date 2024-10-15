# LastError

The last error associated with this run. Will be `null` if there are no errors.

## Example Usage

```typescript
import { LastError } from "argot-open-ai/models/components";

let value: LastError = {
  code: "invalid_prompt",
  message: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `code`                                                             | [components.Code](../../models/components/code.md)                 | :heavy_check_mark:                                                 | One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`. |
| `message`                                                          | *string*                                                           | :heavy_check_mark:                                                 | A human-readable description of the error.                         |