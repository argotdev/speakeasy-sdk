/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChunkingStrategyRequestParam,
  ChunkingStrategyRequestParam$inboundSchema,
  ChunkingStrategyRequestParam$Outbound,
  ChunkingStrategyRequestParam$outboundSchema,
} from "./chunkingstrategyrequestparam.js";

export type CreateVectorStoreFileBatchRequest = {
  /**
   * A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files.
   */
  fileIds: Array<string>;
  /**
   * The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy.
   */
  chunkingStrategy?: ChunkingStrategyRequestParam | undefined;
};

/** @internal */
export const CreateVectorStoreFileBatchRequest$inboundSchema: z.ZodType<
  CreateVectorStoreFileBatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_ids: z.array(z.string()),
  chunking_strategy: ChunkingStrategyRequestParam$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "file_ids": "fileIds",
    "chunking_strategy": "chunkingStrategy",
  });
});

/** @internal */
export type CreateVectorStoreFileBatchRequest$Outbound = {
  file_ids: Array<string>;
  chunking_strategy?: ChunkingStrategyRequestParam$Outbound | undefined;
};

/** @internal */
export const CreateVectorStoreFileBatchRequest$outboundSchema: z.ZodType<
  CreateVectorStoreFileBatchRequest$Outbound,
  z.ZodTypeDef,
  CreateVectorStoreFileBatchRequest
> = z.object({
  fileIds: z.array(z.string()),
  chunkingStrategy: ChunkingStrategyRequestParam$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    fileIds: "file_ids",
    chunkingStrategy: "chunking_strategy",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateVectorStoreFileBatchRequest$ {
  /** @deprecated use `CreateVectorStoreFileBatchRequest$inboundSchema` instead. */
  export const inboundSchema = CreateVectorStoreFileBatchRequest$inboundSchema;
  /** @deprecated use `CreateVectorStoreFileBatchRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateVectorStoreFileBatchRequest$outboundSchema;
  /** @deprecated use `CreateVectorStoreFileBatchRequest$Outbound` instead. */
  export type Outbound = CreateVectorStoreFileBatchRequest$Outbound;
}

export function createVectorStoreFileBatchRequestToJSON(
  createVectorStoreFileBatchRequest: CreateVectorStoreFileBatchRequest,
): string {
  return JSON.stringify(
    CreateVectorStoreFileBatchRequest$outboundSchema.parse(
      createVectorStoreFileBatchRequest,
    ),
  );
}

export function createVectorStoreFileBatchRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateVectorStoreFileBatchRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateVectorStoreFileBatchRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateVectorStoreFileBatchRequest' from JSON`,
  );
}
