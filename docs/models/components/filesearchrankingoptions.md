# FileSearchRankingOptions

The ranking options for the file search. If not specified, the file search tool will use the `auto` ranker and a score_threshold of 0.

See the [file search tool documentation](/docs/assistants/tools/file-search/customizing-file-search-settings) for more information.


## Example Usage

```typescript
import { FileSearchRankingOptions } from "argot-open-ai/models/components";

let value: FileSearchRankingOptions = {
  scoreThreshold: 5775.43,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `ranker`                                                                                             | [components.Ranker](../../models/components/ranker.md)                                               | :heavy_minus_sign:                                                                                   | The ranker to use for the file search. If not specified will use the `auto` ranker.                  |
| `scoreThreshold`                                                                                     | *number*                                                                                             | :heavy_check_mark:                                                                                   | The score threshold for the file search. All values must be a floating point number between 0 and 1. |