# FineTuningJobEvent

Fine-tuning job event object

## Example Usage

```typescript
import { FineTuningJobEvent } from "argot-open-ai/models/components";

let value: FineTuningJobEvent = {
  id: "<id>",
  createdAt: 697429,
  level: "warn",
  message: "<value>",
  object: "fine_tuning.job.event",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `level`                                                                                    | [components.Level](../../models/components/level.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `message`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `object`                                                                                   | [components.FineTuningJobEventObject](../../models/components/finetuningjobeventobject.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |