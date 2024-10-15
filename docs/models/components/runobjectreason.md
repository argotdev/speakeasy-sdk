# RunObjectReason

The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run.

## Example Usage

```typescript
import { RunObjectReason } from "argot-open-ai/models/components";

let value: RunObjectReason = "max_completion_tokens";
```

## Values

```typescript
"max_completion_tokens" | "max_prompt_tokens"
```