/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ArgotOpenAiCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
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
import { Result } from "../types/fp.js";

/**
 * Deletes a service account from the project.
 */
export async function projectsDeleteProjectServiceAccount(
  client: ArgotOpenAiCore,
  request: operations.DeleteProjectServiceAccountRequest,
  options?: RequestOptions,
): Promise<
  Result<
    components.ProjectServiceAccountDeleteResponse,
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
      operations.DeleteProjectServiceAccountRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    project_id: encodeSimple("project_id", payload.project_id, {
      explode: false,
      charEncoding: "percent",
    }),
    service_account_id: encodeSimple(
      "service_account_id",
      payload.service_account_id,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path = pathToFunc(
    "/organization/projects/{project_id}/service_accounts/{service_account_id}",
  )(pathParams);

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.apiKeyAuth);
  const securityInput = secConfig == null ? {} : { apiKeyAuth: secConfig };
  const context = {
    operationID: "delete-project-service-account",
    oAuth2Scopes: [],
    securitySource: client._options.apiKeyAuth,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "DELETE",
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
    components.ProjectServiceAccountDeleteResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.ProjectServiceAccountDeleteResponse$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
