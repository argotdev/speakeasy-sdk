# EffectiveAt

Return only events whose `effective_at` (Unix seconds) is in this range.

## Example Usage

```typescript
import { EffectiveAt } from "argot-open-ai/models/operations";

let value: EffectiveAt = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `gt`                                                                                           | *number*                                                                                       | :heavy_minus_sign:                                                                             | Return only events whose `effective_at` (Unix seconds) is greater than this value.             |
| `gte`                                                                                          | *number*                                                                                       | :heavy_minus_sign:                                                                             | Return only events whose `effective_at` (Unix seconds) is greater than or equal to this value. |
| `lt`                                                                                           | *number*                                                                                       | :heavy_minus_sign:                                                                             | Return only events whose `effective_at` (Unix seconds) is less than this value.                |
| `lte`                                                                                          | *number*                                                                                       | :heavy_minus_sign:                                                                             | Return only events whose `effective_at` (Unix seconds) is less than or equal to this value.    |