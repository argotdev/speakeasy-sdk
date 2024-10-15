# OtherChunkingStrategyResponseParam

This is returned when the chunking strategy is unknown. Typically, this is because the file was indexed before the `chunking_strategy` concept was introduced in the API.

## Example Usage

```typescript
import { OtherChunkingStrategyResponseParam } from "argot-open-ai/models/components";

let value: OtherChunkingStrategyResponseParam = {
  type: "other",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.OtherChunkingStrategyResponseParamType](../../models/components/otherchunkingstrategyresponseparamtype.md) | :heavy_check_mark:                                                                                                     | Always `other`.                                                                                                        |