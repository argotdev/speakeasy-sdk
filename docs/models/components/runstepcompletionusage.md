# RunStepCompletionUsage

Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`.

## Example Usage

```typescript
import { RunStepCompletionUsage } from "argot-open-ai/models/components";

let value: RunStepCompletionUsage = {
  completionTokens: 676243,
  promptTokens: 879235,
  totalTokens: 543678,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `completionTokens`                                                | *number*                                                          | :heavy_check_mark:                                                | Number of completion tokens used over the course of the run step. |
| `promptTokens`                                                    | *number*                                                          | :heavy_check_mark:                                                | Number of prompt tokens used over the course of the run step.     |
| `totalTokens`                                                     | *number*                                                          | :heavy_check_mark:                                                | Total number of tokens used (prompt + completion).                |