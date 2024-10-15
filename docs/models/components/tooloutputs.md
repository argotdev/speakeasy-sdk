# ToolOutputs

## Example Usage

```typescript
import { ToolOutputs } from "argot-open-ai/models/components";

let value: ToolOutputs = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `toolCallId`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The ID of the tool call in the `required_action` object within the run object the output is being submitted for. |
| `output`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The output of the tool call to be submitted to continue the run.                                                 |