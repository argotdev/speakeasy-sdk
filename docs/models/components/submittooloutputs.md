# SubmitToolOutputs

Details on the tool outputs needed for this run to continue.

## Example Usage

```typescript
import { SubmitToolOutputs } from "argot-open-ai/models/components";

let value: SubmitToolOutputs = {
  toolCalls: [
    {
      id: "<id>",
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `toolCalls`                                                                    | [components.RunToolCallObject](../../models/components/runtoolcallobject.md)[] | :heavy_check_mark:                                                             | A list of the relevant tool calls.                                             |