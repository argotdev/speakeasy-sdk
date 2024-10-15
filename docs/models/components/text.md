# Text

## Example Usage

```typescript
import { Text } from "argot-open-ai/models/components";

let value: Text = {
  value: "<value>",
  annotations: [
    {
      type: "file_path",
      text: "<value>",
      filePath: {
        fileId: "<id>",
      },
      startIndex: 65304,
      endIndex: 783235,
    },
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `value`                          | *string*                         | :heavy_check_mark:               | The data that makes up the text. |
| `annotations`                    | *components.Annotations*[]       | :heavy_check_mark:               | N/A                              |