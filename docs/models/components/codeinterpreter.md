# CodeInterpreter

The Code Interpreter tool call definition.

## Example Usage

```typescript
import { CodeInterpreter } from "argot-open-ai/models/components";

let value: CodeInterpreter = {
  input: "<value>",
  outputs: [
    {
      type: "logs",
      logs: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `input`                                                                                                                                                                                                | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The input to the Code Interpreter tool call.                                                                                                                                                           |
| `outputs`                                                                                                                                                                                              | *components.Outputs*[]                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                     | The outputs from the Code Interpreter tool call. Code Interpreter can output one or more items, including text (`logs`) or images (`image`). Each of these are represented by a different object type. |