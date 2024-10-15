# AuditLogEventType

The event type.

## Example Usage

```typescript
import { AuditLogEventType } from "argot-open-ai/models/components";

let value: AuditLogEventType = "api_key.updated";
```

## Values

```typescript
"api_key.created" | "api_key.updated" | "api_key.deleted" | "invite.sent" | "invite.accepted" | "invite.deleted" | "login.succeeded" | "login.failed" | "logout.succeeded" | "logout.failed" | "organization.updated" | "project.created" | "project.updated" | "project.archived" | "service_account.created" | "service_account.updated" | "service_account.deleted" | "user.added" | "user.updated" | "user.deleted"
```