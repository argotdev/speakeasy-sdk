# RunStepObjectStatus

The status of the run step, which can be either `in_progress`, `cancelled`, `failed`, `completed`, or `expired`.

## Example Usage

```typescript
import { RunStepObjectStatus } from "argot-open-ai/models/components";

let value: RunStepObjectStatus = "failed";
```

## Values

```typescript
"in_progress" | "cancelled" | "failed" | "completed" | "expired"
```