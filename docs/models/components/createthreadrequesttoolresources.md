# CreateThreadRequestToolResources

A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.


## Example Usage

```typescript
import { CreateThreadRequestToolResources } from "argot-open-ai/models/components";

let value: CreateThreadRequestToolResources = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `codeInterpreter`                                                                                              | [components.CreateThreadRequestCodeInterpreter](../../models/components/createthreadrequestcodeinterpreter.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `fileSearch`                                                                                                   | *components.CreateThreadRequestFileSearch*                                                                     | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |