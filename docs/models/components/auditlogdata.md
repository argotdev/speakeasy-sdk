# AuditLogData

The payload used to create the API key.

## Example Usage

```typescript
import { AuditLogData } from "argot-open-ai/models/components";

let value: AuditLogData = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `scopes`                                                               | *string*[]                                                             | :heavy_minus_sign:                                                     | A list of scopes allowed for the API key, e.g. `["api.model.request"]` |