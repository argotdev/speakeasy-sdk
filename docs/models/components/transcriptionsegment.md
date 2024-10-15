# TranscriptionSegment

## Example Usage

```typescript
import { TranscriptionSegment } from "argot-open-ai/models/components";

let value: TranscriptionSegment = {
  id: 677817,
  seek: 270008,
  start: 7351.94,
  end: 9621.89,
  text: "<value>",
  tokens: [
    248753,
  ],
  temperature: 5761.57,
  avgLogprob: 5920.42,
  compressionRatio: 5722.52,
  noSpeechProb: 2230.82,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                      | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Unique identifier of the segment.                                                                                                         |
| `seek`                                                                                                                                    | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Seek offset of the segment.                                                                                                               |
| `start`                                                                                                                                   | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Start time of the segment in seconds.                                                                                                     |
| `end`                                                                                                                                     | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | End time of the segment in seconds.                                                                                                       |
| `text`                                                                                                                                    | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Text content of the segment.                                                                                                              |
| `tokens`                                                                                                                                  | *number*[]                                                                                                                                | :heavy_check_mark:                                                                                                                        | Array of token IDs for the text content.                                                                                                  |
| `temperature`                                                                                                                             | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Temperature parameter used for generating the segment.                                                                                    |
| `avgLogprob`                                                                                                                              | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Average logprob of the segment. If the value is lower than -1, consider the logprobs failed.                                              |
| `compressionRatio`                                                                                                                        | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Compression ratio of the segment. If the value is greater than 2.4, consider the compression failed.                                      |
| `noSpeechProb`                                                                                                                            | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Probability of no speech in the segment. If the value is higher than 1.0 and the `avg_logprob` is below -1, consider this segment silent. |