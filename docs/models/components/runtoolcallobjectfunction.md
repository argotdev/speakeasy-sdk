# RunToolCallObjectFunction

The function definition.

## Example Usage

```typescript
import { RunToolCallObjectFunction } from "argot-open-ai/models/components";

let value: RunToolCallObjectFunction = {
  name: "<value>",
  arguments: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The name of the function.                                         |
| `arguments`                                                       | *string*                                                          | :heavy_check_mark:                                                | The arguments that the model expects you to pass to the function. |