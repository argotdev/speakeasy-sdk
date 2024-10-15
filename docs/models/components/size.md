# Size

The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`. Must be one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3` models.

## Example Usage

```typescript
import { Size } from "argot-open-ai/models/components";

let value: Size = "1024x1024";
```

## Values

```typescript
"256x256" | "512x512" | "1024x1024" | "1792x1024" | "1024x1792"
```