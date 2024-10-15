# Moderations
(*moderations*)

## Overview

Given text and/or image inputs, classifies if those inputs are potentially harmful.

### Available Operations

* [createModeration](#createmoderation) - Classifies if text and/or image inputs are potentially harmful. Learn
more in the [moderation guide](/docs/guides/moderation).


## createModeration

Classifies if text and/or image inputs are potentially harmful. Learn
more in the [moderation guide](/docs/guides/moderation).


### Example Usage

```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.moderations.createModeration({
    input: [
      {
        type: "image_url",
        imageUrl: {
          url: "https://example.com/image.jpg",
        },
      },
      {
        type: "text",
        text: "I want to kill them",
      },
      {
        type: "image_url",
        imageUrl: {
          url: "https://example.com/image.jpg",
        },
      },
    ],
    model: "omni-moderation-2024-09-26",
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
import { moderationsCreateModeration } from "argot-open-ai/funcs/moderationsCreateModeration.js";

// Use `ArgotOpenAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const argotOpenAi = new ArgotOpenAiCore({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await moderationsCreateModeration(argotOpenAi, {
    input: [
      {
        type: "image_url",
        imageUrl: {
          url: "https://example.com/image.jpg",
        },
      },
      {
        type: "text",
        text: "I want to kill them",
      },
      {
        type: "image_url",
        imageUrl: {
          url: "https://example.com/image.jpg",
        },
      },
    ],
    model: "omni-moderation-2024-09-26",
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
| `request`                                                                                                                                                                      | [components.CreateModerationRequest](../../models/components/createmoderationrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateModerationResponse](../../models/components/createmoderationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |