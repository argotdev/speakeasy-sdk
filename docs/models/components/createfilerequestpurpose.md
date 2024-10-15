# CreateFileRequestPurpose

The intended purpose of the uploaded file.

Use "assistants" for [Assistants](/docs/api-reference/assistants) and [Message](/docs/api-reference/messages) files, "vision" for Assistants image file inputs, "batch" for [Batch API](/docs/guides/batch), and "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning).


## Example Usage

```typescript
import { CreateFileRequestPurpose } from "argot-open-ai/models/components";

let value: CreateFileRequestPurpose = "batch";
```

## Values

```typescript
"assistants" | "batch" | "fine-tune" | "vision"
```