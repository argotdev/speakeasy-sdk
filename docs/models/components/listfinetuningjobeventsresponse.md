# ListFineTuningJobEventsResponse

## Example Usage

```typescript
import { ListFineTuningJobEventsResponse } from "argot-open-ai/models/components";

let value: ListFineTuningJobEventsResponse = {
  data: [
    {
      id: "<id>",
      createdAt: 569101,
      level: "warn",
      message: "<value>",
      object: "fine_tuning.job.event",
    },
  ],
  object: "list",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                               | [components.FineTuningJobEvent](../../models/components/finetuningjobevent.md)[]                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `object`                                                                                                             | [components.ListFineTuningJobEventsResponseObject](../../models/components/listfinetuningjobeventsresponseobject.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |