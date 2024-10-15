# CreateTranscriptionResponseVerboseJson

Represents a verbose json transcription response returned by model, based on the provided input.

## Example Usage

```typescript
import { CreateTranscriptionResponseVerboseJson } from "argot-open-ai/models/components";

let value: CreateTranscriptionResponseVerboseJson = {
  language: "<value>",
  duration: 46.95,
  text: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `language`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | The language of the input audio.                                                     |
| `duration`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | The duration of the input audio.                                                     |
| `text`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The transcribed text.                                                                |
| `words`                                                                              | [components.TranscriptionWord](../../models/components/transcriptionword.md)[]       | :heavy_minus_sign:                                                                   | Extracted words and their corresponding timestamps.                                  |
| `segments`                                                                           | [components.TranscriptionSegment](../../models/components/transcriptionsegment.md)[] | :heavy_minus_sign:                                                                   | Segments of the transcribed text and their corresponding details.                    |