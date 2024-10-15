# AuditLogActorApiKey

The API Key used to perform the audit logged action.

## Example Usage

```typescript
import { AuditLogActorApiKey } from "argot-open-ai/models/components";

let value: AuditLogActorApiKey = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_minus_sign:                                                                               | The tracking id of the API key.                                                                  |
| `type`                                                                                           | [components.AuditLogActorApiKeyType](../../models/components/auditlogactorapikeytype.md)         | :heavy_minus_sign:                                                                               | The type of API key. Can be either `user` or `service_account`.                                  |
| `user`                                                                                           | [components.AuditLogActorUser](../../models/components/auditlogactoruser.md)                     | :heavy_minus_sign:                                                                               | The user who performed the audit logged action.                                                  |
| `serviceAccount`                                                                                 | [components.AuditLogActorServiceAccount](../../models/components/auditlogactorserviceaccount.md) | :heavy_minus_sign:                                                                               | The service account that performed the audit logged action.                                      |