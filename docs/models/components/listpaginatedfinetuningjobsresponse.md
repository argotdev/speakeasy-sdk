# ListPaginatedFineTuningJobsResponse

## Example Usage

```typescript
import { ListPaginatedFineTuningJobsResponse } from "argot-open-ai/models/components";

let value: ListPaginatedFineTuningJobsResponse = {
  data: [
    {
      id: "<id>",
      createdAt: 998848,
      error: {
        code: "<value>",
        message: "<value>",
        param: "<value>",
      },
      fineTunedModel: "<value>",
      finishedAt: 149448,
      hyperparameters: {
        nEpochs: 162493,
      },
      model: "Jetta",
      object: "fine_tuning.job",
      organizationId: "<id>",
      resultFiles: [
        "file-abc123",
      ],
      status: "validating_files",
      trainedTokens: 848009,
      trainingFile: "<value>",
      validationFile: "<value>",
      integrations: [
        {
          type: "wandb",
          wandb: {
            project: "my-wandb-project",
            tags: [
              "custom-tag",
            ],
          },
        },
      ],
      seed: 807319,
    },
  ],
  hasMore: false,
  object: "list",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                       | [components.FineTuningJob](../../models/components/finetuningjob.md)[]                                                       | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `hasMore`                                                                                                                    | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `object`                                                                                                                     | [components.ListPaginatedFineTuningJobsResponseObject](../../models/components/listpaginatedfinetuningjobsresponseobject.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |