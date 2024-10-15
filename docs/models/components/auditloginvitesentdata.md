# AuditLogInviteSentData

The payload used to create the invite.

## Example Usage

```typescript
import { AuditLogInviteSentData } from "argot-open-ai/models/components";

let value: AuditLogInviteSentData = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `email`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | The email invited to the organization.                               |
| `role`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | The role the email was invited to be. Is either `owner` or `member`. |