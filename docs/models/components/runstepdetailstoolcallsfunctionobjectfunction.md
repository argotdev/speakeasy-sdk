# RunStepDetailsToolCallsFunctionObjectFunction

The definition of the function that was called.

## Example Usage

```typescript
import { RunStepDetailsToolCallsFunctionObjectFunction } from "argot-open-ai/models/components";

let value: RunStepDetailsToolCallsFunctionObjectFunction = {
  name: "<value>",
  arguments: "<value>",
  output: "<value>",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                    | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The name of the function.                                                                                                                 |
| `arguments`                                                                                                                               | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The arguments passed to the function.                                                                                                     |
| `output`                                                                                                                                  | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet. |