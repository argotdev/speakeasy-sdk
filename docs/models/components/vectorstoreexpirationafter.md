# VectorStoreExpirationAfter

The expiration policy for a vector store.

## Example Usage

```typescript
import { VectorStoreExpirationAfter } from "argot-open-ai/models/components";

let value: VectorStoreExpirationAfter = {
  anchor: "last_active_at",
  days: 442036,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `anchor`                                                                                         | [components.Anchor](../../models/components/anchor.md)                                           | :heavy_check_mark:                                                                               | Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`. |
| `days`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | The number of days after the anchor time that the vector store will expire.                      |