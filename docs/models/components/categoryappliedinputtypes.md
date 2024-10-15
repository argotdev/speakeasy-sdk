# CategoryAppliedInputTypes

A list of the categories along with the input type(s) that the score applies to.

## Example Usage

```typescript
import { CategoryAppliedInputTypes } from "argot-open-ai/models/components";

let value: CategoryAppliedInputTypes = {
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
    "image",
  ],
  selfHarmInstructions: [
    "text",
  ],
  sexual: [
    "text",
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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `hate`                                                                                 | [components.Hate](../../models/components/hate.md)[]                                   | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'hate'.                                     |
| `hateThreatening`                                                                      | [components.HateThreatening](../../models/components/hatethreatening.md)[]             | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'hate/threatening'.                         |
| `harassment`                                                                           | [components.Harassment](../../models/components/harassment.md)[]                       | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'harassment'.                               |
| `harassmentThreatening`                                                                | [components.HarassmentThreatening](../../models/components/harassmentthreatening.md)[] | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'harassment/threatening'.                   |
| `illicit`                                                                              | [components.Illicit](../../models/components/illicit.md)[]                             | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'illicit'.                                  |
| `illicitViolent`                                                                       | [components.IllicitViolent](../../models/components/illicitviolent.md)[]               | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'illicit/violent'.                          |
| `selfHarm`                                                                             | [components.SelfHarm](../../models/components/selfharm.md)[]                           | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'self-harm'.                                |
| `selfHarmIntent`                                                                       | [components.SelfHarmIntent](../../models/components/selfharmintent.md)[]               | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'self-harm/intent'.                         |
| `selfHarmInstructions`                                                                 | [components.SelfHarmInstructions](../../models/components/selfharminstructions.md)[]   | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'self-harm/instructions'.                   |
| `sexual`                                                                               | [components.Sexual](../../models/components/sexual.md)[]                               | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'sexual'.                                   |
| `sexualMinors`                                                                         | [components.SexualMinors](../../models/components/sexualminors.md)[]                   | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'sexual/minors'.                            |
| `violence`                                                                             | [components.Violence](../../models/components/violence.md)[]                           | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'violence'.                                 |
| `violenceGraphic`                                                                      | [components.ViolenceGraphic](../../models/components/violencegraphic.md)[]             | :heavy_check_mark:                                                                     | The applied input type(s) for the category 'violence/graphic'.                         |