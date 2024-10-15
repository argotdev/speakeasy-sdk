# FineTuningJob

The `fine_tuning.job` object represents a fine-tuning job that has been created through the API.


## Example Usage

```typescript
import { FineTuningJob } from "argot-open-ai/models/components";

let value: FineTuningJob = {
  id: "<id>",
  createdAt: 652103,
  error: {
    code: "<value>",
    message: "<value>",
    param: "<value>",
  },
  fineTunedModel: "<value>",
  finishedAt: 431418,
  hyperparameters: {
    nEpochs: 367562,
  },
  model: "Expedition",
  object: "fine_tuning.job",
  organizationId: "<id>",
  resultFiles: [
    "file-abc123",
  ],
  status: "cancelled",
  trainedTokens: 806194,
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
  seed: 703889,
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                     | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The object identifier, which can be referenced in the API endpoints.                                                                                     |
| `createdAt`                                                                                                                                              | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The Unix timestamp (in seconds) for when the fine-tuning job was created.                                                                                |
| `error`                                                                                                                                                  | [components.FineTuningJobError](../../models/components/finetuningjoberror.md)                                                                           | :heavy_check_mark:                                                                                                                                       | For fine-tuning jobs that have `failed`, this will contain more information on the cause of the failure.                                                 |
| `fineTunedModel`                                                                                                                                         | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The name of the fine-tuned model that is being created. The value will be null if the fine-tuning job is still running.                                  |
| `finishedAt`                                                                                                                                             | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The Unix timestamp (in seconds) for when the fine-tuning job was finished. The value will be null if the fine-tuning job is still running.               |
| `hyperparameters`                                                                                                                                        | [components.FineTuningJobHyperparameters](../../models/components/finetuningjobhyperparameters.md)                                                       | :heavy_check_mark:                                                                                                                                       | The hyperparameters used for the fine-tuning job. See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.                                |
| `model`                                                                                                                                                  | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The base model that is being fine-tuned.                                                                                                                 |
| `object`                                                                                                                                                 | [components.FineTuningJobObject](../../models/components/finetuningjobobject.md)                                                                         | :heavy_check_mark:                                                                                                                                       | The object type, which is always "fine_tuning.job".                                                                                                      |
| `organizationId`                                                                                                                                         | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The organization that owns the fine-tuning job.                                                                                                          |
| `resultFiles`                                                                                                                                            | *string*[]                                                                                                                                               | :heavy_check_mark:                                                                                                                                       | The compiled results file ID(s) for the fine-tuning job. You can retrieve the results with the [Files API](/docs/api-reference/files/retrieve-contents). |
| `status`                                                                                                                                                 | [components.FineTuningJobStatus](../../models/components/finetuningjobstatus.md)                                                                         | :heavy_check_mark:                                                                                                                                       | The current status of the fine-tuning job, which can be either `validating_files`, `queued`, `running`, `succeeded`, `failed`, or `cancelled`.           |
| `trainedTokens`                                                                                                                                          | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The total number of billable tokens processed by this fine-tuning job. The value will be null if the fine-tuning job is still running.                   |
| `trainingFile`                                                                                                                                           | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The file ID used for training. You can retrieve the training data with the [Files API](/docs/api-reference/files/retrieve-contents).                     |
| `validationFile`                                                                                                                                         | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The file ID used for validation. You can retrieve the validation results with the [Files API](/docs/api-reference/files/retrieve-contents).              |
| `integrations`                                                                                                                                           | *components.FineTuningJobIntegrations*[]                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | A list of integrations to enable for this fine-tuning job.                                                                                               |
| `seed`                                                                                                                                                   | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The seed used for the fine-tuning job.                                                                                                                   |
| `estimatedFinish`                                                                                                                                        | *number*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | The Unix timestamp (in seconds) for when the fine-tuning job is estimated to finish. The value will be null if the fine-tuning job is not running.       |