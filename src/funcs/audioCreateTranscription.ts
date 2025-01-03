/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ArgotOpenAiCore } from "../core.js";
import { readableStreamToArrayBuffer } from "../lib/files.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { isBlobLike } from "../types/blobs.js";
import { Result } from "../types/fp.js";
import { isReadableStream } from "../types/streams.js";

/**
 * Transcribes audio into the input language.
 */
export async function audioCreateTranscription(
  client: ArgotOpenAiCore,
  request: components.CreateTranscriptionRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.CreateTranscriptionResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      components.CreateTranscriptionRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = new FormData();

  if (isBlobLike(payload.file)) {
    body.append("file", payload.file);
  } else if (isReadableStream(payload.file.content)) {
    const buffer = await readableStreamToArrayBuffer(payload.file.content);
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    body.append("file", blob);
  } else {
    body.append(
      "file",
      new Blob([payload.file.content], { type: "application/octet-stream" }),
      payload.file.fileName,
    );
  }
  body.append("model", String(payload.model));
  if (payload.language !== undefined) {
    body.append("language", payload.language);
  }
  if (payload.prompt !== undefined) {
    body.append("prompt", payload.prompt);
  }
  if (payload.response_format !== undefined) {
    body.append("response_format", payload.response_format);
  }
  if (payload.temperature !== undefined) {
    body.append("temperature", String(payload.temperature));
  }
  if (payload["timestamp_granularities[]"] !== undefined) {
    body.append(
      "timestamp_granularities[]",
      String(payload["timestamp_granularities[]"]),
    );
  }

  const path = pathToFunc("/audio/transcriptions")();

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.apiKeyAuth);
  const securityInput = secConfig == null ? {} : { apiKeyAuth: secConfig };
  const context = {
    operationID: "createTranscription",
    oAuth2Scopes: [],
    securitySource: client._options.apiKeyAuth,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    operations.CreateTranscriptionResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.CreateTranscriptionResponseBody$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
