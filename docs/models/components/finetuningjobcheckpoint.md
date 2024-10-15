# FineTuningJobCheckpoint

The `fine_tuning.job.checkpoint` object represents a model checkpoint for a fine-tuning job that is ready to use.


## Example Usage

```typescript
import { FineTuningJobCheckpoint } from "argot-open-ai/models/components";

let value: FineTuningJobCheckpoint = {
  id: "<id>",
  createdAt: 975522,
  fineTunedModelCheckpoint: "<value>",
  stepNumber: 855804,
  metrics: {},
  fineTuningJobId: "<id>",
  object: "fine_tuning.job.checkpoint",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The checkpoint identifier, which can be referenced in the API endpoints.                             |
| `createdAt`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | The Unix timestamp (in seconds) for when the checkpoint was created.                                 |
| `fineTunedModelCheckpoint`                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the fine-tuned checkpoint model that is created.                                         |
| `stepNumber`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | The step number that the checkpoint was created at.                                                  |
| `metrics`                                                                                            | [components.Metrics](../../models/components/metrics.md)                                             | :heavy_check_mark:                                                                                   | Metrics at the step number during the fine-tuning job.                                               |
| `fineTuningJobId`                                                                                    | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the fine-tuning job that this checkpoint was created from.                               |
| `object`                                                                                             | [components.FineTuningJobCheckpointObject](../../models/components/finetuningjobcheckpointobject.md) | :heavy_check_mark:                                                                                   | The object type, which is always "fine_tuning.job.checkpoint".                                       |