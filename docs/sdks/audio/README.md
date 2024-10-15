# Audio
(*audio*)

## Overview

Turn audio into text or text into audio.

### Available Operations

* [createSpeech](#createspeech) - Generates audio from the input text.
* [createTranscription](#createtranscription) - Transcribes audio into the input language.
* [createTranslation](#createtranslation) - Translates audio into English.

## createSpeech

Generates audio from the input text.

### Example Usage

```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.audio.createSpeech({
    model: "tts-1",
    input: "<value>",
    voice: "onyx",
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
import { audioCreateSpeech } from "argot-open-ai/funcs/audioCreateSpeech.js";

// Use `ArgotOpenAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const argotOpenAi = new ArgotOpenAiCore({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await audioCreateSpeech(argotOpenAi, {
    model: "tts-1",
    input: "<value>",
    voice: "onyx",
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
| `request`                                                                                                                                                                      | [components.CreateSpeechRequest](../../models/components/createspeechrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSpeechResponse](../../models/operations/createspeechresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createTranscription

Transcribes audio into the input language.

### Example Usage

```typescript
import { ArgotOpenAi } from "argot-open-ai";
import { openAsBlob } from "node:fs";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.audio.createTranscription({
    file: await openAsBlob("example.file"),
    model: "whisper-1",
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
import { audioCreateTranscription } from "argot-open-ai/funcs/audioCreateTranscription.js";
import { openAsBlob } from "node:fs";

// Use `ArgotOpenAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const argotOpenAi = new ArgotOpenAiCore({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await audioCreateTranscription(argotOpenAi, {
    file: await openAsBlob("example.file"),
    model: "whisper-1",
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
| `request`                                                                                                                                                                      | [components.CreateTranscriptionRequest](../../models/components/createtranscriptionrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTranscriptionResponseBody](../../models/operations/createtranscriptionresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createTranslation

Translates audio into English.

### Example Usage

```typescript
import { ArgotOpenAi } from "argot-open-ai";
import { openAsBlob } from "node:fs";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.audio.createTranslation({
    file: await openAsBlob("example.file"),
    model: "whisper-1",
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
import { audioCreateTranslation } from "argot-open-ai/funcs/audioCreateTranslation.js";
import { openAsBlob } from "node:fs";

// Use `ArgotOpenAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const argotOpenAi = new ArgotOpenAiCore({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await audioCreateTranslation(argotOpenAi, {
    file: await openAsBlob("example.file"),
    model: "whisper-1",
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
| `request`                                                                                                                                                                      | [components.CreateTranslationRequest](../../models/components/createtranslationrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTranslationResponseBody](../../models/operations/createtranslationresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |