# ChatCompletionToolChoiceOption1

`none` means the model will not call any tool and instead generates a message. `auto` means the model can pick between generating a message or calling one or more tools. `required` means the model must call one or more tools.


## Example Usage

```typescript
import { ChatCompletionToolChoiceOption1 } from "argot-open-ai/models/components";

let value: ChatCompletionToolChoiceOption1 = "required";
```

## Values

```typescript
"none" | "auto" | "required"
```