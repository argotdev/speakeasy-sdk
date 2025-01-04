/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
 *
 * @remarks
 */
export const ListFilesInVectorStoreBatchQueryParamOrder = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
 *
 * @remarks
 */
export type ListFilesInVectorStoreBatchQueryParamOrder = ClosedEnum<
  typeof ListFilesInVectorStoreBatchQueryParamOrder
>;

/**
 * Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`.
 */
export const QueryParamFilter = {
  InProgress: "in_progress",
  Completed: "completed",
  Failed: "failed",
  Cancelled: "cancelled",
} as const;
/**
 * Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`.
 */
export type QueryParamFilter = ClosedEnum<typeof QueryParamFilter>;

export type ListFilesInVectorStoreBatchRequest = {
  /**
   * The ID of the vector store that the files belong to.
   */
  vectorStoreId: string;
  /**
   * The ID of the file batch that the files belong to.
   */
  batchId: string;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   *
   * @remarks
   */
  limit?: number | undefined;
  /**
   * Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
   *
   * @remarks
   */
  order?: ListFilesInVectorStoreBatchQueryParamOrder | undefined;
  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   *
   * @remarks
   */
  after?: string | undefined;
  /**
   * A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   *
   * @remarks
   */
  before?: string | undefined;
  /**
   * Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`.
   */
  filter?: QueryParamFilter | undefined;
};

/** @internal */
export const ListFilesInVectorStoreBatchQueryParamOrder$inboundSchema:
  z.ZodNativeEnum<typeof ListFilesInVectorStoreBatchQueryParamOrder> = z
    .nativeEnum(ListFilesInVectorStoreBatchQueryParamOrder);

/** @internal */
export const ListFilesInVectorStoreBatchQueryParamOrder$outboundSchema:
  z.ZodNativeEnum<typeof ListFilesInVectorStoreBatchQueryParamOrder> =
    ListFilesInVectorStoreBatchQueryParamOrder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFilesInVectorStoreBatchQueryParamOrder$ {
  /** @deprecated use `ListFilesInVectorStoreBatchQueryParamOrder$inboundSchema` instead. */
  export const inboundSchema =
    ListFilesInVectorStoreBatchQueryParamOrder$inboundSchema;
  /** @deprecated use `ListFilesInVectorStoreBatchQueryParamOrder$outboundSchema` instead. */
  export const outboundSchema =
    ListFilesInVectorStoreBatchQueryParamOrder$outboundSchema;
}

/** @internal */
export const QueryParamFilter$inboundSchema: z.ZodNativeEnum<
  typeof QueryParamFilter
> = z.nativeEnum(QueryParamFilter);

/** @internal */
export const QueryParamFilter$outboundSchema: z.ZodNativeEnum<
  typeof QueryParamFilter
> = QueryParamFilter$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamFilter$ {
  /** @deprecated use `QueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = QueryParamFilter$inboundSchema;
  /** @deprecated use `QueryParamFilter$outboundSchema` instead. */
  export const outboundSchema = QueryParamFilter$outboundSchema;
}

/** @internal */
export const ListFilesInVectorStoreBatchRequest$inboundSchema: z.ZodType<
  ListFilesInVectorStoreBatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  vector_store_id: z.string(),
  batch_id: z.string(),
  limit: z.number().int().default(20),
  order: ListFilesInVectorStoreBatchQueryParamOrder$inboundSchema.default(
    "desc",
  ),
  after: z.string().optional(),
  before: z.string().optional(),
  filter: QueryParamFilter$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "vector_store_id": "vectorStoreId",
    "batch_id": "batchId",
  });
});

/** @internal */
export type ListFilesInVectorStoreBatchRequest$Outbound = {
  vector_store_id: string;
  batch_id: string;
  limit: number;
  order: string;
  after?: string | undefined;
  before?: string | undefined;
  filter?: string | undefined;
};

/** @internal */
export const ListFilesInVectorStoreBatchRequest$outboundSchema: z.ZodType<
  ListFilesInVectorStoreBatchRequest$Outbound,
  z.ZodTypeDef,
  ListFilesInVectorStoreBatchRequest
> = z.object({
  vectorStoreId: z.string(),
  batchId: z.string(),
  limit: z.number().int().default(20),
  order: ListFilesInVectorStoreBatchQueryParamOrder$outboundSchema.default(
    "desc",
  ),
  after: z.string().optional(),
  before: z.string().optional(),
  filter: QueryParamFilter$outboundSchema.optional(),
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
export namespace ListFilesInVectorStoreBatchRequest$ {
  /** @deprecated use `ListFilesInVectorStoreBatchRequest$inboundSchema` instead. */
  export const inboundSchema = ListFilesInVectorStoreBatchRequest$inboundSchema;
  /** @deprecated use `ListFilesInVectorStoreBatchRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListFilesInVectorStoreBatchRequest$outboundSchema;
  /** @deprecated use `ListFilesInVectorStoreBatchRequest$Outbound` instead. */
  export type Outbound = ListFilesInVectorStoreBatchRequest$Outbound;
}

export function listFilesInVectorStoreBatchRequestToJSON(
  listFilesInVectorStoreBatchRequest: ListFilesInVectorStoreBatchRequest,
): string {
  return JSON.stringify(
    ListFilesInVectorStoreBatchRequest$outboundSchema.parse(
      listFilesInVectorStoreBatchRequest,
    ),
  );
}

export function listFilesInVectorStoreBatchRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListFilesInVectorStoreBatchRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListFilesInVectorStoreBatchRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListFilesInVectorStoreBatchRequest' from JSON`,
  );
}
