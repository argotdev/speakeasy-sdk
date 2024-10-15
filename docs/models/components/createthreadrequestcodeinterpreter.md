# CreateThreadRequestCodeInterpreter

## Example Usage

```typescript
import { CreateThreadRequestCodeInterpreter } from "argot-open-ai/models/components";

let value: CreateThreadRequestCodeInterpreter = {};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fileIds`                                                                                                                                                    | *string*[]                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                           | A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.<br/> |