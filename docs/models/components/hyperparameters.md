# Hyperparameters

The hyperparameters used for the fine-tuning job.

## Example Usage

```typescript
import { Hyperparameters } from "argot-open-ai/models/components";

let value: Hyperparameters = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `batchSize`                                                                                                                              | *components.BatchSize*                                                                                                                   | :heavy_minus_sign:                                                                                                                       | Number of examples in each batch. A larger batch size means that model parameters<br/>are updated less frequently, but with lower variance.<br/> |
| `learningRateMultiplier`                                                                                                                 | *components.LearningRateMultiplier*                                                                                                      | :heavy_minus_sign:                                                                                                                       | Scaling factor for the learning rate. A smaller learning rate may be useful to avoid<br/>overfitting.<br/>                               |
| `nEpochs`                                                                                                                                | *components.NEpochs*                                                                                                                     | :heavy_minus_sign:                                                                                                                       | The number of epochs to train the model for. An epoch refers to one full cycle<br/>through the training dataset.<br/>                    |