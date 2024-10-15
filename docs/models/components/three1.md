# Three1

An object describing an image to classify.

## Example Usage

```typescript
import { Three1 } from "argot-open-ai/models/components";

let value: Three1 = {
  type: "image_url",
  imageUrl: {
    url: "https://example.com/image.jpg",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [components.ThreeType](../../models/components/threetype.md)           | :heavy_check_mark:                                                     | Always `image_url`.                                                    |
| `imageUrl`                                                             | [components.ThreeImageUrl](../../models/components/threeimageurl.md)   | :heavy_check_mark:                                                     | Contains either an image URL or a data URL for a base64 encoded image. |