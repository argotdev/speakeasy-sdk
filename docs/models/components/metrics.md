# Metrics

Metrics at the step number during the fine-tuning job.

## Example Usage

```typescript
import { Metrics } from "argot-open-ai/models/components";

let value: Metrics = {};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `step`                       | *number*                     | :heavy_minus_sign:           | N/A                          |
| `trainLoss`                  | *number*                     | :heavy_minus_sign:           | N/A                          |
| `trainMeanTokenAccuracy`     | *number*                     | :heavy_minus_sign:           | N/A                          |
| `validLoss`                  | *number*                     | :heavy_minus_sign:           | N/A                          |
| `validMeanTokenAccuracy`     | *number*                     | :heavy_minus_sign:           | N/A                          |
| `fullValidLoss`              | *number*                     | :heavy_minus_sign:           | N/A                          |
| `fullValidMeanTokenAccuracy` | *number*                     | :heavy_minus_sign:           | N/A                          |