# CreateCompletionResponseFinishReason

The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
`length` if the maximum number of tokens specified in the request was reached,
or `content_filter` if content was omitted due to a flag from our content filters.


## Example Usage

```typescript
import { CreateCompletionResponseFinishReason } from "argot-open-ai/models/components";

let value: CreateCompletionResponseFinishReason = "stop";
```

## Values

```typescript
"stop" | "length" | "content_filter"
```