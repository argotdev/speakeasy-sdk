# LogoutFailed

The details for events with this `type`.

## Example Usage

```typescript
import { LogoutFailed } from "argot-open-ai/models/components";

let value: LogoutFailed = {};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `errorCode`                       | *string*                          | :heavy_minus_sign:                | The error code of the failure.    |
| `errorMessage`                    | *string*                          | :heavy_minus_sign:                | The error message of the failure. |