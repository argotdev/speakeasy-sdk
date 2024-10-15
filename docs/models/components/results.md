# Results

## Example Usage

```typescript
import { Results } from "argot-open-ai/models/components";

let value: Results = {
  flagged: false,
  categories: {
    hate: false,
    hateThreatening: false,
    harassment: false,
    harassmentThreatening: false,
    illicit: false,
    illicitViolent: false,
    selfHarm: false,
    selfHarmIntent: false,
    selfHarmInstructions: false,
    sexual: false,
    sexualMinors: false,
    violence: false,
    violenceGraphic: false,
  },
  categoryScores: {
    hate: 9443.72,
    hateThreatening: 7395.51,
    harassment: 4904.59,
    harassmentThreatening: 2274.15,
    illicit: 2543.56,
    illicitViolent: 580.29,
    selfHarm: 4344.17,
    selfHarmIntent: 3117.96,
    selfHarmInstructions: 6963.43,
    sexual: 3777.52,
    sexualMinors: 1796.04,
    violence: 246.79,
    violenceGraphic: 672.50,
  },
  categoryAppliedInputTypes: {
    hate: [
      "text",
    ],
    hateThreatening: [
      "text",
    ],
    harassment: [
      "text",
    ],
    harassmentThreatening: [
      "text",
    ],
    illicit: [
      "text",
    ],
    illicitViolent: [
      "text",
    ],
    selfHarm: [
      "image",
    ],
    selfHarmIntent: [
      "text",
    ],
    selfHarmInstructions: [
      "image",
    ],
    sexual: [
      "image",
    ],
    sexualMinors: [
      "text",
    ],
    violence: [
      "image",
    ],
    violenceGraphic: [
      "text",
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `flagged`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Whether any of the below categories are flagged.                                             |
| `categories`                                                                                 | [components.Categories](../../models/components/categories.md)                               | :heavy_check_mark:                                                                           | A list of the categories, and whether they are flagged or not.                               |
| `categoryScores`                                                                             | [components.CategoryScores](../../models/components/categoryscores.md)                       | :heavy_check_mark:                                                                           | A list of the categories along with their scores as predicted by model.                      |
| `categoryAppliedInputTypes`                                                                  | [components.CategoryAppliedInputTypes](../../models/components/categoryappliedinputtypes.md) | :heavy_check_mark:                                                                           | A list of the categories along with the input type(s) that the score applies to.             |