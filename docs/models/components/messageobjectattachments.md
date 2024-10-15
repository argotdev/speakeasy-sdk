# MessageObjectAttachments

## Example Usage

```typescript
import { MessageObjectAttachments } from "argot-open-ai/models/components";

let value: MessageObjectAttachments = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `fileId`                                     | *string*                                     | :heavy_minus_sign:                           | The ID of the file to attach to the message. |
| `tools`                                      | *components.MessageObjectTools*[]            | :heavy_minus_sign:                           | The tools to add this file to.               |