# SubmitToolOutputsRunRequest

## Example Usage

```typescript
import { SubmitToolOutputsRunRequest } from "argot-open-ai/models/components";

let value: SubmitToolOutputsRunRequest = {
  toolOutputs: [
    {},
  ],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `toolOutputs`                                                                                                                                                            | [components.ToolOutputs](../../models/components/tooloutputs.md)[]                                                                                                       | :heavy_check_mark:                                                                                                                                                       | A list of tools for which the outputs are being submitted.                                                                                                               |
| `stream`                                                                                                                                                                 | *boolean*                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                       | If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.<br/> |