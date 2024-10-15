# CreateUploadRequestPurpose

The intended purpose of the uploaded file.

See the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).


## Example Usage

```typescript
import { CreateUploadRequestPurpose } from "argot-open-ai/models/components";

let value: CreateUploadRequestPurpose = "fine-tune";
```

## Values

```typescript
"assistants" | "batch" | "fine-tune" | "vision"
```