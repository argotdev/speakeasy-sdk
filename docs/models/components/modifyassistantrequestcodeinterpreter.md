# ModifyAssistantRequestCodeInterpreter

## Example Usage

```typescript
import { ModifyAssistantRequestCodeInterpreter } from "argot-open-ai/models/components";

let value: ModifyAssistantRequestCodeInterpreter = {};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fileIds`                                                                                                                                                                | *string*[]                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                       | Overrides the list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.<br/> |