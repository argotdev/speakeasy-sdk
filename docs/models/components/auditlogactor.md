# AuditLogActor

The actor who performed the audit logged action.

## Example Usage

```typescript
import { AuditLogActor } from "argot-open-ai/models/components";

let value: AuditLogActor = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [components.AuditLogActorType](../../models/components/auditlogactortype.md)       | :heavy_minus_sign:                                                                 | The type of actor. Is either `session` or `api_key`.                               |
| `session`                                                                          | [components.AuditLogActorSession](../../models/components/auditlogactorsession.md) | :heavy_minus_sign:                                                                 | The session in which the audit logged action was performed.                        |
| `apiKey`                                                                           | [components.AuditLogActorApiKey](../../models/components/auditlogactorapikey.md)   | :heavy_minus_sign:                                                                 | The API Key used to perform the audit logged action.                               |