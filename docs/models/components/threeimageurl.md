# ThreeImageUrl

Contains either an image URL or a data URL for a base64 encoded image.

## Example Usage

```typescript
import { ThreeImageUrl } from "argot-open-ai/models/components";

let value: ThreeImageUrl = {
  url: "https://example.com/image.jpg",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `url`                                                       | *string*                                                    | :heavy_check_mark:                                          | Either a URL of the image or the base64 encoded image data. | https://example.com/image.jpg                               |