# Style

The style of the generated images. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for `dall-e-3`.

## Example Usage

```typescript
import { Style } from "argot-open-ai/models/components";

let value: Style = "vivid";
```

## Values

```typescript
"vivid" | "natural"
```