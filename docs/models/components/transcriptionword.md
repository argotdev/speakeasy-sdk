# TranscriptionWord

## Example Usage

```typescript
import { TranscriptionWord } from "argot-open-ai/models/components";

let value: TranscriptionWord = {
  word: "<value>",
  start: 9527.49,
  end: 4471.25,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `word`                             | *string*                           | :heavy_check_mark:                 | The text content of the word.      |
| `start`                            | *number*                           | :heavy_check_mark:                 | Start time of the word in seconds. |
| `end`                              | *number*                           | :heavy_check_mark:                 | End time of the word in seconds.   |