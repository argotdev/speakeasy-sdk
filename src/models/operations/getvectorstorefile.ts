/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetVectorStoreFileRequest = {
  /**
   * The ID of the vector store that the file belongs to.
   */
  vectorStoreId: string;
  /**
   * The ID of the file being retrieved.
   */
  fileId: string;
};

/** @internal */
export const GetVectorStoreFileRequest$inboundSchema: z.ZodType<
  GetVectorStoreFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  vector_store_id: z.string(),
  file_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "vector_store_id": "vectorStoreId",
    "file_id": "fileId",
  });
});

/** @internal */
export type GetVectorStoreFileRequest$Outbound = {
  vector_store_id: string;
  file_id: string;
};

/** @internal */
export const GetVectorStoreFileRequest$outboundSchema: z.ZodType<
  GetVectorStoreFileRequest$Outbound,
  z.ZodTypeDef,
  GetVectorStoreFileRequest
> = z.object({
  vectorStoreId: z.string(),
  fileId: z.string(),
}).transform((v) => {
  return remap$(v, {
    vectorStoreId: "vector_store_id",
    fileId: "file_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVectorStoreFileRequest$ {
  /** @deprecated use `GetVectorStoreFileRequest$inboundSchema` instead. */
  export const inboundSchema = GetVectorStoreFileRequest$inboundSchema;
  /** @deprecated use `GetVectorStoreFileRequest$outboundSchema` instead. */
  export const outboundSchema = GetVectorStoreFileRequest$outboundSchema;
  /** @deprecated use `GetVectorStoreFileRequest$Outbound` instead. */
  export type Outbound = GetVectorStoreFileRequest$Outbound;
}
