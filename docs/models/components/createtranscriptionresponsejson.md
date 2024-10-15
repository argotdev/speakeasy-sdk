# CreateTranscriptionResponseJson

Represents a transcription response returned by model, based on the provided input.

## Example Usage

```typescript
import { CreateTranscriptionResponseJson } from "argot-open-ai/models/components";

let value: CreateTranscriptionResponseJson = {
  text: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `text`                | *string*              | :heavy_check_mark:    | The transcribed text. |