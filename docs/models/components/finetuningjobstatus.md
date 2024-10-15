# FineTuningJobStatus

The current status of the fine-tuning job, which can be either `validating_files`, `queued`, `running`, `succeeded`, `failed`, or `cancelled`.

## Example Usage

```typescript
import { FineTuningJobStatus } from "argot-open-ai/models/components";

let value: FineTuningJobStatus = "succeeded";
```

## Values

```typescript
"validating_files" | "queued" | "running" | "succeeded" | "failed" | "cancelled"
```