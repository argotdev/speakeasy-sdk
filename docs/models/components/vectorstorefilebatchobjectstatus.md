# VectorStoreFileBatchObjectStatus

The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`.

## Example Usage

```typescript
import { VectorStoreFileBatchObjectStatus } from "argot-open-ai/models/components";

let value: VectorStoreFileBatchObjectStatus = "in_progress";
```

## Values

```typescript
"in_progress" | "completed" | "cancelled" | "failed"
```