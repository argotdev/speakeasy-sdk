# ToolResources

A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.


## Example Usage

```typescript
import { ToolResources } from "argot-open-ai/models/components";

let value: ToolResources = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `codeInterpreter`                                                                                      | [components.AssistantObjectCodeInterpreter](../../models/components/assistantobjectcodeinterpreter.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `fileSearch`                                                                                           | [components.AssistantObjectFileSearch](../../models/components/assistantobjectfilesearch.md)           | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |