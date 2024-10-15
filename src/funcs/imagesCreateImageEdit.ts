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
import { isBlobLike } from "../types/blobs.js";
import { Result } from "../types/fp.js";
import { isReadableStream } from "../types/streams.js";

/**
 * Creates an edited or extended image given an original image and a prompt.
 */
export async function imagesCreateImageEdit(
  client: ArgotOpenAiCore,
  request: components.CreateImageEditRequest,
  options?: RequestOptions,
): Promise<
  Result<
    components.ImagesResponse,
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
    (value) => components.CreateImageEditRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = new FormData();

  if (isBlobLike(payload.image)) {
    body.append("image", payload.image);
  } else if (isReadableStream(payload.image.content)) {
    const buffer = await readableStreamToArrayBuffer(payload.image.content);
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    body.append("image", blob);
  } else {
    body.append(
      "image",
      new Blob([payload.image.content], { type: "application/octet-stream" }),
      payload.image.fileName,
    );
  }
  body.append("prompt", payload.prompt);
  if (payload.mask !== undefined) {
    if (isBlobLike(payload.mask)) {
      body.append("mask", payload.mask);
    } else if (isReadableStream(payload.mask.content)) {
      const buffer = await readableStreamToArrayBuffer(payload.mask.content);
      const blob = new Blob([buffer], { type: "application/octet-stream" });
      body.append("mask", blob);
    } else {
      body.append(
        "mask",
        new Blob([payload.mask.content], { type: "application/octet-stream" }),
        payload.mask.fileName,
      );
    }
  }
  if (payload.model !== undefined) {
    body.append("model", String(payload.model));
  }
  if (payload.n !== undefined) {
    body.append("n", String(payload.n));
  }
  if (payload.response_format !== undefined) {
    body.append("response_format", String(payload.response_format));
  }
  if (payload.size !== undefined) {
    body.append("size", String(payload.size));
  }
  if (payload.user !== undefined) {
    body.append("user", payload.user);
  }

  const path = pathToFunc("/images/edits")();

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.apiKeyAuth);
  const securityInput = secConfig == null ? {} : { apiKeyAuth: secConfig };
  const context = {
    operationID: "createImageEdit",
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
    components.ImagesResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.ImagesResponse$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
