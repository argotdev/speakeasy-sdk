# MessageContentImageFileObjectDetail

Specifies the detail level of the image if specified by the user. `low` uses fewer tokens, you can opt in to high resolution using `high`.

## Example Usage

```typescript
import { MessageContentImageFileObjectDetail } from "argot-open-ai/models/components";

let value: MessageContentImageFileObjectDetail = "auto";
```

## Values

```typescript
"auto" | "low" | "high"
```