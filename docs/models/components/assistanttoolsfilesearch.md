# AssistantToolsFileSearch

## Example Usage

```typescript
import { AssistantToolsFileSearch } from "argot-open-ai/models/components";

let value: AssistantToolsFileSearch = {
  type: "file_search",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [components.AssistantToolsFileSearchType](../../models/components/assistanttoolsfilesearchtype.md) | :heavy_check_mark:                                                                                 | The type of tool being defined: `file_search`                                                      |
| `fileSearch`                                                                                       | [components.FileSearch](../../models/components/filesearch.md)                                     | :heavy_minus_sign:                                                                                 | Overrides for the file search tool.                                                                |