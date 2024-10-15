# VectorStoreFileObjectStatus

The status of the vector store file, which can be either `in_progress`, `completed`, `cancelled`, or `failed`. The status `completed` indicates that the vector store file is ready for use.

## Example Usage

```typescript
import { VectorStoreFileObjectStatus } from "argot-open-ai/models/components";

let value: VectorStoreFileObjectStatus = "failed";
```

## Values

```typescript
"in_progress" | "completed" | "cancelled" | "failed"
```