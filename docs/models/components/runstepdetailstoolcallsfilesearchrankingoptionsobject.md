# RunStepDetailsToolCallsFileSearchRankingOptionsObject

The ranking options for the file search.

## Example Usage

```typescript
import { RunStepDetailsToolCallsFileSearchRankingOptionsObject } from "argot-open-ai/models/components";

let value: RunStepDetailsToolCallsFileSearchRankingOptionsObject = {
  ranker: "default_2024_08_21",
  scoreThreshold: 9221.11,
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ranker`                                                                                                                                                         | [components.RunStepDetailsToolCallsFileSearchRankingOptionsObjectRanker](../../models/components/runstepdetailstoolcallsfilesearchrankingoptionsobjectranker.md) | :heavy_check_mark:                                                                                                                                               | The ranker used for the file search.                                                                                                                             |
| `scoreThreshold`                                                                                                                                                 | *number*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The score threshold for the file search. All values must be a floating point number between 0 and 1.                                                             |