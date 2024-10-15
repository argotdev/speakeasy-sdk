# AssistantsApiToolChoiceOption1

`none` means the model will not call any tools and instead generates a message. `auto` means the model can pick between generating a message or calling one or more tools. `required` means the model must call one or more tools before responding to the user.


## Example Usage

```typescript
import { AssistantsApiToolChoiceOption1 } from "argot-open-ai/models/components";

let value: AssistantsApiToolChoiceOption1 = "required";
```

## Values

```typescript
"none" | "auto" | "required"
```