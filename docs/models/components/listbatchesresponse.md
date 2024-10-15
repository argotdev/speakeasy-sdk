# ListBatchesResponse

## Example Usage

```typescript
import { ListBatchesResponse } from "argot-open-ai/models/components";

let value: ListBatchesResponse = {
  data: [
    {
      id: "<id>",
      object: "batch",
      endpoint: "<value>",
      inputFileId: "<id>",
      completionWindow: "<value>",
      status: "cancelled",
      createdAt: 362189,
    },
  ],
  firstId: "batch_abc123",
  lastId: "batch_abc456",
  hasMore: false,
  object: "list",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [components.Batch](../../models/components/batch.md)[]                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `firstId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | batch_abc123                                                                                 |
| `lastId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | batch_abc456                                                                                 |
| `hasMore`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `object`                                                                                     | [components.ListBatchesResponseObject](../../models/components/listbatchesresponseobject.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |