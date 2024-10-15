# ListVectorStoresResponse

## Example Usage

```typescript
import { ListVectorStoresResponse } from "argot-open-ai/models/components";

let value: ListVectorStoresResponse = {
  object: "list",
  data: [
    {
      id: "<id>",
      object: "vector_store",
      createdAt: 89494,
      name: "<value>",
      usageBytes: 405942,
      fileCounts: {
        inProgress: 24313,
        completed: 342611,
        failed: 622231,
        cancelled: 279068,
        total: 209750,
      },
      status: "expired",
      lastActiveAt: 577140,
      metadata: {},
    },
  ],
  firstId: "vs_abc123",
  lastId: "vs_abc456",
  hasMore: false,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | list                                                                           |
| `data`                                                                         | [components.VectorStoreObject](../../models/components/vectorstoreobject.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `firstId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | vs_abc123                                                                      |
| `lastId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | vs_abc456                                                                      |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            | false                                                                          |