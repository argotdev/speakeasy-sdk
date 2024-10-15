# AuditLogUserUpdatedChangesRequested

The payload used to update the user.

## Example Usage

```typescript
import { AuditLogUserUpdatedChangesRequested } from "argot-open-ai/models/components";

let value: AuditLogUserUpdatedChangesRequested = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `role`                                               | *string*                                             | :heavy_minus_sign:                                   | The role of the user. Is either `owner` or `member`. |