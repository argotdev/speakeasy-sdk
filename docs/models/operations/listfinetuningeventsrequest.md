# ListFineTuningEventsRequest

## Example Usage

```typescript
import { ListFineTuningEventsRequest } from "argot-open-ai/models/operations";

let value: ListFineTuningEventsRequest = {
  fineTuningJobId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `fineTuningJobId`                                                   | *string*                                                            | :heavy_check_mark:                                                  | The ID of the fine-tuning job to get events for.<br/>               | ft-AF1WoRqd3aJAHsqc9NY7iL8F                                         |
| `after`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | Identifier for the last event from the previous pagination request. |                                                                     |
| `limit`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | Number of events to retrieve.                                       |                                                                     |