/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CancelVectorStoreFileBatchRequest = {
  /**
   * The ID of the vector store that the file batch belongs to.
   */
  vectorStoreId: string;
  /**
   * The ID of the file batch to cancel.
   */
  batchId: string;
};

/** @internal */
export const CancelVectorStoreFileBatchRequest$inboundSchema: z.ZodType<
  CancelVectorStoreFileBatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  vector_store_id: z.string(),
  batch_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "vector_store_id": "vectorStoreId",
    "batch_id": "batchId",
  });
});

/** @internal */
export type CancelVectorStoreFileBatchRequest$Outbound = {
  vector_store_id: string;
  batch_id: string;
};

/** @internal */
export const CancelVectorStoreFileBatchRequest$outboundSchema: z.ZodType<
  CancelVectorStoreFileBatchRequest$Outbound,
  z.ZodTypeDef,
  CancelVectorStoreFileBatchRequest
> = z.object({
  vectorStoreId: z.string(),
  batchId: z.string(),
}).transform((v) => {
  return remap$(v, {
    vectorStoreId: "vector_store_id",
    batchId: "batch_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelVectorStoreFileBatchRequest$ {
  /** @deprecated use `CancelVectorStoreFileBatchRequest$inboundSchema` instead. */
  export const inboundSchema = CancelVectorStoreFileBatchRequest$inboundSchema;
  /** @deprecated use `CancelVectorStoreFileBatchRequest$outboundSchema` instead. */
  export const outboundSchema =
    CancelVectorStoreFileBatchRequest$outboundSchema;
  /** @deprecated use `CancelVectorStoreFileBatchRequest$Outbound` instead. */
  export type Outbound = CancelVectorStoreFileBatchRequest$Outbound;
}

export function cancelVectorStoreFileBatchRequestToJSON(
  cancelVectorStoreFileBatchRequest: CancelVectorStoreFileBatchRequest,
): string {
  return JSON.stringify(
    CancelVectorStoreFileBatchRequest$outboundSchema.parse(
      cancelVectorStoreFileBatchRequest,
    ),
  );
}

export function cancelVectorStoreFileBatchRequestFromJSON(
  jsonString: string,
): SafeParseResult<CancelVectorStoreFileBatchRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CancelVectorStoreFileBatchRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CancelVectorStoreFileBatchRequest' from JSON`,
  );
}
