# CategoryScores

A list of the categories along with their scores as predicted by model.

## Example Usage

```typescript
import { CategoryScores } from "argot-open-ai/models/components";

let value: CategoryScores = {
  hate: 7299.91,
  hateThreatening: 1716.30,
  harassment: 5210.37,
  harassmentThreatening: 543.38,
  illicit: 1999.97,
  illicitViolent: 185.22,
  selfHarm: 7936.98,
  selfHarmIntent: 2239.25,
  selfHarmInstructions: 3453.52,
  sexual: 9280.81,
  sexualMinors: 7044.14,
  violence: 318.39,
  violenceGraphic: 1646.94,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `hate`                                               | *number*                                             | :heavy_check_mark:                                   | The score for the category 'hate'.                   |
| `hateThreatening`                                    | *number*                                             | :heavy_check_mark:                                   | The score for the category 'hate/threatening'.       |
| `harassment`                                         | *number*                                             | :heavy_check_mark:                                   | The score for the category 'harassment'.             |
| `harassmentThreatening`                              | *number*                                             | :heavy_check_mark:                                   | The score for the category 'harassment/threatening'. |
| `illicit`                                            | *number*                                             | :heavy_check_mark:                                   | The score for the category 'illicit'.                |
| `illicitViolent`                                     | *number*                                             | :heavy_check_mark:                                   | The score for the category 'illicit/violent'.        |
| `selfHarm`                                           | *number*                                             | :heavy_check_mark:                                   | The score for the category 'self-harm'.              |
| `selfHarmIntent`                                     | *number*                                             | :heavy_check_mark:                                   | The score for the category 'self-harm/intent'.       |
| `selfHarmInstructions`                               | *number*                                             | :heavy_check_mark:                                   | The score for the category 'self-harm/instructions'. |
| `sexual`                                             | *number*                                             | :heavy_check_mark:                                   | The score for the category 'sexual'.                 |
| `sexualMinors`                                       | *number*                                             | :heavy_check_mark:                                   | The score for the category 'sexual/minors'.          |
| `violence`                                           | *number*                                             | :heavy_check_mark:                                   | The score for the category 'violence'.               |
| `violenceGraphic`                                    | *number*                                             | :heavy_check_mark:                                   | The score for the category 'violence/graphic'.       |