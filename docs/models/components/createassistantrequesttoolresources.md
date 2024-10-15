# CreateAssistantRequestToolResources

A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.


## Example Usage

```typescript
import { CreateAssistantRequestToolResources } from "argot-open-ai/models/components";

let value: CreateAssistantRequestToolResources = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `codeInterpreter`                                                                                                    | [components.CreateAssistantRequestCodeInterpreter](../../models/components/createassistantrequestcodeinterpreter.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `fileSearch`                                                                                                         | *components.CreateAssistantRequestFileSearch*                                                                        | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |