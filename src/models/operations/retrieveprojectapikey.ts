/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveProjectApiKeyRequest = {
  /**
   * The ID of the project.
   */
  projectId: string;
  /**
   * The ID of the API key.
   */
  keyId: string;
};

/** @internal */
export const RetrieveProjectApiKeyRequest$inboundSchema: z.ZodType<
  RetrieveProjectApiKeyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  project_id: z.string(),
  key_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "project_id": "projectId",
    "key_id": "keyId",
  });
});

/** @internal */
export type RetrieveProjectApiKeyRequest$Outbound = {
  project_id: string;
  key_id: string;
};

/** @internal */
export const RetrieveProjectApiKeyRequest$outboundSchema: z.ZodType<
  RetrieveProjectApiKeyRequest$Outbound,
  z.ZodTypeDef,
  RetrieveProjectApiKeyRequest
> = z.object({
  projectId: z.string(),
  keyId: z.string(),
}).transform((v) => {
  return remap$(v, {
    projectId: "project_id",
    keyId: "key_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveProjectApiKeyRequest$ {
  /** @deprecated use `RetrieveProjectApiKeyRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveProjectApiKeyRequest$inboundSchema;
  /** @deprecated use `RetrieveProjectApiKeyRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveProjectApiKeyRequest$outboundSchema;
  /** @deprecated use `RetrieveProjectApiKeyRequest$Outbound` instead. */
  export type Outbound = RetrieveProjectApiKeyRequest$Outbound;
}

export function retrieveProjectApiKeyRequestToJSON(
  retrieveProjectApiKeyRequest: RetrieveProjectApiKeyRequest,
): string {
  return JSON.stringify(
    RetrieveProjectApiKeyRequest$outboundSchema.parse(
      retrieveProjectApiKeyRequest,
    ),
  );
}

export function retrieveProjectApiKeyRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveProjectApiKeyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveProjectApiKeyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveProjectApiKeyRequest' from JSON`,
  );
}
