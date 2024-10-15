# MessageContentImageUrlObjectDetail

Specifies the detail level of the image. `low` uses fewer tokens, you can opt in to high resolution using `high`. Default value is `auto`

## Example Usage

```typescript
import { MessageContentImageUrlObjectDetail } from "argot-open-ai/models/components";

let value: MessageContentImageUrlObjectDetail = "low";
```

## Values

```typescript
"auto" | "low" | "high"
```