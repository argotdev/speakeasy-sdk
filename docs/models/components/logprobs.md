# Logprobs

Log probability information for the choice.

## Example Usage

```typescript
import { Logprobs } from "argot-open-ai/models/components";

let value: Logprobs = {
  content: [
    {
      token: "<value>",
      logprob: 7151.89,
      bytes: [
        602763,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 5448.83,
          bytes: [
            423655,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 6458.94,
      bytes: [
        437587,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 8917.73,
          bytes: [
            963663,
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `content`                                                                                        | [components.ChatCompletionTokenLogprob](../../models/components/chatcompletiontokenlogprob.md)[] | :heavy_check_mark:                                                                               | A list of message content tokens with log probability information.                               |
| `refusal`                                                                                        | [components.ChatCompletionTokenLogprob](../../models/components/chatcompletiontokenlogprob.md)[] | :heavy_check_mark:                                                                               | A list of message refusal tokens with log probability information.                               |