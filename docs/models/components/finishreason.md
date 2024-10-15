# FinishReason

The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
`length` if the maximum number of tokens specified in the request was reached,
`content_filter` if content was omitted due to a flag from our content filters,
`tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.


## Example Usage

```typescript
import { FinishReason } from "argot-open-ai/models/components";

let value: FinishReason = "tool_calls";
```

## Values

```typescript
"stop" | "length" | "tool_calls" | "content_filter" | "function_call"
```