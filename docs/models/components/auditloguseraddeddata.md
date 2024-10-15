# AuditLogUserAddedData

The payload used to add the user to the project.

## Example Usage

```typescript
import { AuditLogUserAddedData } from "argot-open-ai/models/components";

let value: AuditLogUserAddedData = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `role`                                               | *string*                                             | :heavy_minus_sign:                                   | The role of the user. Is either `owner` or `member`. |