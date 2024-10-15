# CreateTranslationResponseVerboseJson

## Example Usage

```typescript
import { CreateTranslationResponseVerboseJson } from "argot-open-ai/models/components";

let value: CreateTranslationResponseVerboseJson = {
  language: "<value>",
  duration: 2974.37,
  text: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `language`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | The language of the output translation (always `english`).                           |
| `duration`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | The duration of the input audio.                                                     |
| `text`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The translated text.                                                                 |
| `segments`                                                                           | [components.TranscriptionSegment](../../models/components/transcriptionsegment.md)[] | :heavy_minus_sign:                                                                   | Segments of the translated text and their corresponding details.                     |