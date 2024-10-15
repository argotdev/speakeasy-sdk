# Usage

The usage information for the request.

## Example Usage

```typescript
import { Usage } from "argot-open-ai/models/components";

let value: Usage = {
  promptTokens: 692472,
  totalTokens: 566602,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `promptTokens`                                  | *number*                                        | :heavy_check_mark:                              | The number of tokens used by the prompt.        |
| `totalTokens`                                   | *number*                                        | :heavy_check_mark:                              | The total number of tokens used by the request. |