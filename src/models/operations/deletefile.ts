/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteFileRequest = {
  /**
   * The ID of the file to use for this request.
   */
  fileId: string;
};

/** @internal */
export const DeleteFileRequest$inboundSchema: z.ZodType<
  DeleteFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "file_id": "fileId",
  });
});

/** @internal */
export type DeleteFileRequest$Outbound = {
  file_id: string;
};

/** @internal */
export const DeleteFileRequest$outboundSchema: z.ZodType<
  DeleteFileRequest$Outbound,
  z.ZodTypeDef,
  DeleteFileRequest
> = z.object({
  fileId: z.string(),
}).transform((v) => {
  return remap$(v, {
    fileId: "file_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteFileRequest$ {
  /** @deprecated use `DeleteFileRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteFileRequest$inboundSchema;
  /** @deprecated use `DeleteFileRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteFileRequest$outboundSchema;
  /** @deprecated use `DeleteFileRequest$Outbound` instead. */
  export type Outbound = DeleteFileRequest$Outbound;
}

export function deleteFileRequestToJSON(
  deleteFileRequest: DeleteFileRequest,
): string {
  return JSON.stringify(
    DeleteFileRequest$outboundSchema.parse(deleteFileRequest),
  );
}

export function deleteFileRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteFileRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteFileRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteFileRequest' from JSON`,
  );
}
