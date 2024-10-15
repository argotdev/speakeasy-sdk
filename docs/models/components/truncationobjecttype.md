# TruncationObjectType

The truncation strategy to use for the thread. The default is `auto`. If set to `last_messages`, the thread will be truncated to the n most recent messages in the thread. When set to `auto`, messages in the middle of the thread will be dropped to fit the context length of the model, `max_prompt_tokens`.

## Example Usage

```typescript
import { TruncationObjectType } from "argot-open-ai/models/components";

let value: TruncationObjectType = "auto";
```

## Values

```typescript
"auto" | "last_messages"
```