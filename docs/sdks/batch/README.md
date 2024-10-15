# Batch
(*batch*)

## Overview

Create large batches of API requests to run asynchronously.

### Available Operations

* [createBatch](#createbatch) - Creates and executes a batch from an uploaded file of requests
* [listBatches](#listbatches) - List your organization's batches.
* [retrieveBatch](#retrievebatch) - Retrieves a batch.
* [cancelBatch](#cancelbatch) - Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file.

## createBatch

Creates and executes a batch from an uploaded file of requests

### Example Usage

```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.batch.createBatch({
    inputFileId: "<id>",
    endpoint: "/v1/completions",
    completionWindow: "24h",
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
import { batchCreateBatch } from "argot-open-ai/funcs/batchCreateBatch.js";

// Use `ArgotOpenAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const argotOpenAi = new ArgotOpenAiCore({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await batchCreateBatch(argotOpenAi, {
    inputFileId: "<id>",
    endpoint: "/v1/completions",
    completionWindow: "24h",
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
| `request`                                                                                                                                                                      | [operations.CreateBatchRequestBody](../../models/operations/createbatchrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Batch](../../models/components/batch.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listBatches

List your organization's batches.

### Example Usage

```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.batch.listBatches({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArgotOpenAiCore } from "argot-open-ai/core.js";
import { batchListBatches } from "argot-open-ai/funcs/batchListBatches.js";

// Use `ArgotOpenAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const argotOpenAi = new ArgotOpenAiCore({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await batchListBatches(argotOpenAi, {});

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
| `request`                                                                                                                                                                      | [operations.ListBatchesRequest](../../models/operations/listbatchesrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListBatchesResponse](../../models/components/listbatchesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## retrieveBatch

Retrieves a batch.

### Example Usage

```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.batch.retrieveBatch({
    batchId: "<id>",
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
import { batchRetrieveBatch } from "argot-open-ai/funcs/batchRetrieveBatch.js";

// Use `ArgotOpenAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const argotOpenAi = new ArgotOpenAiCore({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await batchRetrieveBatch(argotOpenAi, {
    batchId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.RetrieveBatchRequest](../../models/operations/retrievebatchrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Batch](../../models/components/batch.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## cancelBatch

Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file.

### Example Usage

```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.batch.cancelBatch({
    batchId: "<id>",
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
import { batchCancelBatch } from "argot-open-ai/funcs/batchCancelBatch.js";

// Use `ArgotOpenAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const argotOpenAi = new ArgotOpenAiCore({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await batchCancelBatch(argotOpenAi, {
    batchId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.CancelBatchRequest](../../models/operations/cancelbatchrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Batch](../../models/components/batch.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |