# ListFineTuningJobCheckpointsResponse

## Example Usage

```typescript
import { ListFineTuningJobCheckpointsResponse } from "argot-open-ai/models/components";

let value: ListFineTuningJobCheckpointsResponse = {
  data: [
    {
      id: "<id>",
      createdAt: 722056,
      fineTunedModelCheckpoint: "<value>",
      stepNumber: 866383,
      metrics: {},
      fineTuningJobId: "<id>",
      object: "fine_tuning.job.checkpoint",
    },
  ],
  object: "list",
  hasMore: false,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                         | [components.FineTuningJobCheckpoint](../../models/components/finetuningjobcheckpoint.md)[]                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `object`                                                                                                                       | [components.ListFineTuningJobCheckpointsResponseObject](../../models/components/listfinetuningjobcheckpointsresponseobject.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `firstId`                                                                                                                      | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `lastId`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `hasMore`                                                                                                                      | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |