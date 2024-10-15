# AuditLogServiceAccountUpdatedChangesRequested

The payload used to updated the service account.

## Example Usage

```typescript
import { AuditLogServiceAccountUpdatedChangesRequested } from "argot-open-ai/models/components";

let value: AuditLogServiceAccountUpdatedChangesRequested = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `role`                                                          | *string*                                                        | :heavy_minus_sign:                                              | The role of the service account. Is either `owner` or `member`. |