# RunObjectStatus

The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, `incomplete`, or `expired`.

## Example Usage

```typescript
import { RunObjectStatus } from "argot-open-ai/models/components";

let value: RunObjectStatus = "cancelled";
```

## Values

```typescript
"queued" | "in_progress" | "requires_action" | "cancelling" | "cancelled" | "failed" | "completed" | "incomplete" | "expired"
```