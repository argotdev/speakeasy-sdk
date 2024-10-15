# AuditLogs
(*auditLogs*)

## Overview

List user actions and configuration changes within this organization.

### Available Operations

* [listAuditLogs](#listauditlogs) - List user actions and configuration changes within this organization.

## listAuditLogs

List user actions and configuration changes within this organization.

### Example Usage

```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.auditLogs.listAuditLogs({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ArgotOpenAiCore } from "argot-open-ai/core.js";
import { auditLogsListAuditLogs } from "argot-open-ai/funcs/auditLogsListAuditLogs.js";

// Use `ArgotOpenAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const argotOpenAi = new ArgotOpenAiCore({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await auditLogsListAuditLogs(argotOpenAi, {});

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
| `request`                                                                                                                                                                      | [operations.ListAuditLogsRequest](../../models/operations/listauditlogsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListAuditLogsResponse](../../models/components/listauditlogsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |