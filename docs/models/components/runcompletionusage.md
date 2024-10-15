# RunCompletionUsage

Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.).

## Example Usage

```typescript
import { RunCompletionUsage } from "argot-open-ai/models/components";

let value: RunCompletionUsage = {
  completionTokens: 449292,
  promptTokens: 304468,
  totalTokens: 839189,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `completionTokens`                                           | *number*                                                     | :heavy_check_mark:                                           | Number of completion tokens used over the course of the run. |
| `promptTokens`                                               | *number*                                                     | :heavy_check_mark:                                           | Number of prompt tokens used over the course of the run.     |
| `totalTokens`                                                | *number*                                                     | :heavy_check_mark:                                           | Total number of tokens used (prompt + completion).           |