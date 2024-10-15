# CreateModerationResponse

Represents if a given text input is potentially harmful.

## Example Usage

```typescript
import { CreateModerationResponse } from "argot-open-ai/models/components";

let value: CreateModerationResponse = {
  id: "<id>",
  model: "Malibu",
  results: [
    {
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
        hate: 2633.22,
        hateThreatening: 206.51,
        harassment: 7583.79,
        harassmentThreatening: 3200.17,
        illicit: 3834.64,
        illicitViolent: 5883.17,
        selfHarm: 8310.48,
        selfHarmIntent: 6289.82,
        selfHarmInstructions: 8726.51,
        sexual: 2735.42,
        sexualMinors: 7980.47,
        violence: 1856.36,
        violenceGraphic: 9527.92,
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
          "text",
        ],
        violenceGraphic: [
          "text",
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | The unique identifier for the moderation request.          |
| `model`                                                    | *string*                                                   | :heavy_check_mark:                                         | The model used to generate the moderation results.         |
| `results`                                                  | [components.Results](../../models/components/results.md)[] | :heavy_check_mark:                                         | A list of moderation objects.                              |