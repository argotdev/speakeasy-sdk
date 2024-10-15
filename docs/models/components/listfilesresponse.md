# ListFilesResponse

## Example Usage

```typescript
import { ListFilesResponse } from "argot-open-ai/models/components";

let value: ListFilesResponse = {
  data: [
    {
      id: "<id>",
      bytes: 813798,
      createdAt: 396506,
      filename: "example.file",
      object: "file",
      purpose: "vision",
      status: "processed",
    },
  ],
  object: "list",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [components.OpenAIFile](../../models/components/openaifile.md)[]                         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `object`                                                                                 | [components.ListFilesResponseObject](../../models/components/listfilesresponseobject.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |