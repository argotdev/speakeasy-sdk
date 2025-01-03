/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveFileRequest = {
  /**
   * The ID of the file to use for this request.
   */
  fileId: string;
};

/** @internal */
export const RetrieveFileRequest$inboundSchema: z.ZodType<
  RetrieveFileRequest,
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
export type RetrieveFileRequest$Outbound = {
  file_id: string;
};

/** @internal */
export const RetrieveFileRequest$outboundSchema: z.ZodType<
  RetrieveFileRequest$Outbound,
  z.ZodTypeDef,
  RetrieveFileRequest
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
export namespace RetrieveFileRequest$ {
  /** @deprecated use `RetrieveFileRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveFileRequest$inboundSchema;
  /** @deprecated use `RetrieveFileRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveFileRequest$outboundSchema;
  /** @deprecated use `RetrieveFileRequest$Outbound` instead. */
  export type Outbound = RetrieveFileRequest$Outbound;
}
