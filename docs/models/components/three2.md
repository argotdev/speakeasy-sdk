# Three2

An object describing text to classify.

## Example Usage

```typescript
import { Three2 } from "argot-open-ai/models/components";

let value: Three2 = {
  type: "text",
  text: "I want to kill them",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [components.CreateModerationRequest3Type](../../models/components/createmoderationrequest3type.md) | :heavy_check_mark:                                                                                 | Always `text`.                                                                                     |                                                                                                    |
| `text`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | A string of text to classify.                                                                      | I want to kill them                                                                                |