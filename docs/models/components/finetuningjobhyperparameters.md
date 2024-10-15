# FineTuningJobHyperparameters

The hyperparameters used for the fine-tuning job. See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.

## Example Usage

```typescript
import { FineTuningJobHyperparameters } from "argot-open-ai/models/components";

let value: FineTuningJobHyperparameters = {
  nEpochs: 574325,
};
```

## Fields

| Field                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nEpochs`                                                                                                                                                                                                                                                                 | *components.FineTuningJobNEpochs*                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                        | The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.<br/>"auto" decides the optimal number of epochs based on the size of the dataset. If setting the number manually, we support any number between 1 and 50 epochs. |