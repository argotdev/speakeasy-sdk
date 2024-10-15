# AuditLogServiceAccountCreatedData

The payload used to create the service account.

## Example Usage

```typescript
import { AuditLogServiceAccountCreatedData } from "argot-open-ai/models/components";

let value: AuditLogServiceAccountCreatedData = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `role`                                                          | *string*                                                        | :heavy_minus_sign:                                              | The role of the service account. Is either `owner` or `member`. |