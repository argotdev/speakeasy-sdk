# Chat
(*chat*)

## Overview

Given a list of messages comprising a conversation, the model will return a response.

### Available Operations

* [createChatCompletion](#createchatcompletion) - Creates a model response for the given chat conversation.

## createChatCompletion

Creates a model response for the given chat conversation.

### Example Usage

```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.chat.createChatCompletion({
    messages: [
      {
        content: "<value>",
        role: "user",
      },
      {
        content: [
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "image_url",
            imageUrl: {
              url: "https://fixed-circumference.com",
            },
          },
        ],
        role: "user",
      },
      {
        role: "tool",
        content: "<value>",
        toolCallId: "<id>",
      },
    ],
    model: "gpt-4o",
    n: 1,
    temperature: 1,
    topP: 1,
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArgotOpenAiCore } from "argot-open-ai/core.js";
import { chatCreateChatCompletion } from "argot-open-ai/funcs/chatCreateChatCompletion.js";

// Use `ArgotOpenAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const argotOpenAi = new ArgotOpenAiCore({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await chatCreateChatCompletion(argotOpenAi, {
    messages: [
      {
        content: "<value>",
        role: "user",
      },
      {
        content: [
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "image_url",
            imageUrl: {
              url: "https://fixed-circumference.com",
            },
          },
        ],
        role: "user",
      },
      {
        role: "tool",
        content: "<value>",
        toolCallId: "<id>",
      },
    ],
    model: "gpt-4o",
    n: 1,
    temperature: 1,
    topP: 1,
    user: "user-1234",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateChatCompletionRequest](../../models/components/createchatcompletionrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateChatCompletionResponse](../../models/components/createchatcompletionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |