# ListAuditLogsResponse

## Example Usage

```typescript
import { ListAuditLogsResponse } from "argot-open-ai/models/components";

let value: ListAuditLogsResponse = {
  object: "list",
  data: [
    {
      id: "<id>",
      type: "logout.failed",
      effectiveAt: 378245,
      actor: {},
    },
  ],
  firstId: "audit_log-defb456h8dks",
  lastId: "audit_log-hnbkd8s93s",
  hasMore: false,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `object`                                                                                         | [components.ListAuditLogsResponseObject](../../models/components/listauditlogsresponseobject.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `data`                                                                                           | [components.AuditLog](../../models/components/auditlog.md)[]                                     | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `firstId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | audit_log-defb456h8dks                                                                           |
| `lastId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | audit_log-hnbkd8s93s                                                                             |
| `hasMore`                                                                                        | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |