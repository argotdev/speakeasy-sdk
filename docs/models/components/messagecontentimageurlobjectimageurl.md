# MessageContentImageUrlObjectImageUrl

## Example Usage

```typescript
import { MessageContentImageUrlObjectImageUrl } from "argot-open-ai/models/components";

let value: MessageContentImageUrlObjectImageUrl = {
  url: "https://beneficial-hippodrome.biz/",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                     | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The external URL of the image, must be a supported image types: jpeg, jpg, png, gif, webp.                                                |
| `detail`                                                                                                                                  | [components.MessageContentImageUrlObjectDetail](../../models/components/messagecontentimageurlobjectdetail.md)                            | :heavy_minus_sign:                                                                                                                        | Specifies the detail level of the image. `low` uses fewer tokens, you can opt in to high resolution using `high`. Default value is `auto` |