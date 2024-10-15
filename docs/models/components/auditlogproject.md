# AuditLogProject

The project that the action was scoped to. Absent for actions not scoped to projects.

## Example Usage

```typescript
import { AuditLogProject } from "argot-open-ai/models/components";

let value: AuditLogProject = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_minus_sign: | The project ID.    |
| `name`             | *string*           | :heavy_minus_sign: | The project title. |