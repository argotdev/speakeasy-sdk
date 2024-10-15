# Attachments

## Example Usage

```typescript
import { Attachments } from "argot-open-ai/models/components";

let value: Attachments = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `fileId`                                     | *string*                                     | :heavy_minus_sign:                           | The ID of the file to attach to the message. |
| `tools`                                      | *components.CreateMessageRequestTools*[]     | :heavy_minus_sign:                           | The tools to add this file to.               |