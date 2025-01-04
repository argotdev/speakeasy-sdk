/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteModelRequest = {
  /**
   * The model to delete
   */
  model: string;
};

/** @internal */
export const DeleteModelRequest$inboundSchema: z.ZodType<
  DeleteModelRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  model: z.string(),
});

/** @internal */
export type DeleteModelRequest$Outbound = {
  model: string;
};

/** @internal */
export const DeleteModelRequest$outboundSchema: z.ZodType<
  DeleteModelRequest$Outbound,
  z.ZodTypeDef,
  DeleteModelRequest
> = z.object({
  model: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteModelRequest$ {
  /** @deprecated use `DeleteModelRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteModelRequest$inboundSchema;
  /** @deprecated use `DeleteModelRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteModelRequest$outboundSchema;
  /** @deprecated use `DeleteModelRequest$Outbound` instead. */
  export type Outbound = DeleteModelRequest$Outbound;
}

export function deleteModelRequestToJSON(
  deleteModelRequest: DeleteModelRequest,
): string {
  return JSON.stringify(
    DeleteModelRequest$outboundSchema.parse(deleteModelRequest),
  );
}

export function deleteModelRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteModelRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteModelRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteModelRequest' from JSON`,
  );
}
