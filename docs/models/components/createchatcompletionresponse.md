# CreateChatCompletionResponse

Represents a chat completion response returned by model, based on the provided input.

## Example Usage

```typescript
import { CreateChatCompletionResponse } from "argot-open-ai/models/components";

let value: CreateChatCompletionResponse = {
  id: "<id>",
  choices: [
    {
      finishReason: "function_call",
      index: 978619,
      message: {
        content: "<value>",
        refusal: "<value>",
        role: "assistant",
      },
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 7991.59,
            bytes: [
              461479,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 7805.29,
                bytes: [
                  118274,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 6399.21,
            bytes: [
              143353,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 9446.69,
                bytes: [
                  521848,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 414662,
  model: "Challenger",
  serviceTier: "scale",
  object: "chat.completion",
};
```

## Fields

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | A unique identifier for the chat completion.                                                                                                                                                                                    |                                                                                                                                                                                                                                 |
| `choices`                                                                                                                                                                                                                       | [components.Choices](../../models/components/choices.md)[]                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                              | A list of chat completion choices. Can be more than one if `n` is greater than 1.                                                                                                                                               |                                                                                                                                                                                                                                 |
| `created`                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | The Unix timestamp (in seconds) of when the chat completion was created.                                                                                                                                                        |                                                                                                                                                                                                                                 |
| `model`                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | The model used for the chat completion.                                                                                                                                                                                         |                                                                                                                                                                                                                                 |
| `serviceTier`                                                                                                                                                                                                                   | [components.CreateChatCompletionResponseServiceTier](../../models/components/createchatcompletionresponseservicetier.md)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | The service tier used for processing the request. This field is only included if the `service_tier` parameter is specified in the request.                                                                                      | scale                                                                                                                                                                                                                           |
| `systemFingerprint`                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | This fingerprint represents the backend configuration that the model runs with.<br/><br/>Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.<br/> |                                                                                                                                                                                                                                 |
| `object`                                                                                                                                                                                                                        | [components.ObjectT](../../models/components/objectt.md)                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | The object type, which is always `chat.completion`.                                                                                                                                                                             |                                                                                                                                                                                                                                 |
| `usage`                                                                                                                                                                                                                         | [components.CompletionUsage](../../models/components/completionusage.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | Usage statistics for the completion request.                                                                                                                                                                                    |                                                                                                                                                                                                                                 |