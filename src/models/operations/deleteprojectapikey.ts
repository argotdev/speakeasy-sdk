/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteProjectApiKeyRequest = {
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
export const DeleteProjectApiKeyRequest$inboundSchema: z.ZodType<
  DeleteProjectApiKeyRequest,
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
export type DeleteProjectApiKeyRequest$Outbound = {
  project_id: string;
  key_id: string;
};

/** @internal */
export const DeleteProjectApiKeyRequest$outboundSchema: z.ZodType<
  DeleteProjectApiKeyRequest$Outbound,
  z.ZodTypeDef,
  DeleteProjectApiKeyRequest
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
export namespace DeleteProjectApiKeyRequest$ {
  /** @deprecated use `DeleteProjectApiKeyRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteProjectApiKeyRequest$inboundSchema;
  /** @deprecated use `DeleteProjectApiKeyRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteProjectApiKeyRequest$outboundSchema;
  /** @deprecated use `DeleteProjectApiKeyRequest$Outbound` instead. */
  export type Outbound = DeleteProjectApiKeyRequest$Outbound;
}

export function deleteProjectApiKeyRequestToJSON(
  deleteProjectApiKeyRequest: DeleteProjectApiKeyRequest,
): string {
  return JSON.stringify(
    DeleteProjectApiKeyRequest$outboundSchema.parse(deleteProjectApiKeyRequest),
  );
}

export function deleteProjectApiKeyRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteProjectApiKeyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteProjectApiKeyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteProjectApiKeyRequest' from JSON`,
  );
}
