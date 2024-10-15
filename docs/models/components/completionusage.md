# CompletionUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { CompletionUsage } from "argot-open-ai/models/components";

let value: CompletionUsage = {
  completionTokens: 774234,
  promptTokens: 456150,
  totalTokens: 568434,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `completionTokens`                                                                       | *number*                                                                                 | :heavy_check_mark:                                                                       | Number of tokens in the generated completion.                                            |
| `promptTokens`                                                                           | *number*                                                                                 | :heavy_check_mark:                                                                       | Number of tokens in the prompt.                                                          |
| `totalTokens`                                                                            | *number*                                                                                 | :heavy_check_mark:                                                                       | Total number of tokens used in the request (prompt + completion).                        |
| `completionTokensDetails`                                                                | [components.CompletionTokensDetails](../../models/components/completiontokensdetails.md) | :heavy_minus_sign:                                                                       | Breakdown of tokens used in a completion.                                                |