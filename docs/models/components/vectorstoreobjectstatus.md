# VectorStoreObjectStatus

The status of the vector store, which can be either `expired`, `in_progress`, or `completed`. A status of `completed` indicates that the vector store is ready for use.

## Example Usage

```typescript
import { VectorStoreObjectStatus } from "argot-open-ai/models/components";

let value: VectorStoreObjectStatus = "in_progress";
```

## Values

```typescript
"expired" | "in_progress" | "completed"
```