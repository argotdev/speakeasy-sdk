# BatchStatus

The current status of the batch.

## Example Usage

```typescript
import { BatchStatus } from "argot-open-ai/models/components";

let value: BatchStatus = "cancelled";
```

## Values

```typescript
"validating" | "failed" | "in_progress" | "finalizing" | "completed" | "expired" | "cancelling" | "cancelled"
```