# ModifyAssistantRequestToolResources

A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.


## Example Usage

```typescript
import { ModifyAssistantRequestToolResources } from "argot-open-ai/models/components";

let value: ModifyAssistantRequestToolResources = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `codeInterpreter`                                                                                                    | [components.ModifyAssistantRequestCodeInterpreter](../../models/components/modifyassistantrequestcodeinterpreter.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `fileSearch`                                                                                                         | [components.ModifyAssistantRequestFileSearch](../../models/components/modifyassistantrequestfilesearch.md)           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |