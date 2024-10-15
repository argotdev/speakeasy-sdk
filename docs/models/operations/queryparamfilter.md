# QueryParamFilter

Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`.

## Example Usage

```typescript
import { QueryParamFilter } from "argot-open-ai/models/operations";

let value: QueryParamFilter = "in_progress";
```

## Values

```typescript
"in_progress" | "completed" | "failed" | "cancelled"
```