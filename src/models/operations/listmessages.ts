/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
 *
 * @remarks
 */
export const QueryParamOrder = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
 *
 * @remarks
 */
export type QueryParamOrder = ClosedEnum<typeof QueryParamOrder>;

export type ListMessagesRequest = {
  /**
   * The ID of the [thread](/docs/api-reference/threads) the messages belong to.
   */
  threadId: string;
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
  order?: QueryParamOrder | undefined;
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
   * Filter messages by the run ID that generated them.
   *
   * @remarks
   */
  runId?: string | undefined;
};

/** @internal */
export const QueryParamOrder$inboundSchema: z.ZodNativeEnum<
  typeof QueryParamOrder
> = z.nativeEnum(QueryParamOrder);

/** @internal */
export const QueryParamOrder$outboundSchema: z.ZodNativeEnum<
  typeof QueryParamOrder
> = QueryParamOrder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamOrder$ {
  /** @deprecated use `QueryParamOrder$inboundSchema` instead. */
  export const inboundSchema = QueryParamOrder$inboundSchema;
  /** @deprecated use `QueryParamOrder$outboundSchema` instead. */
  export const outboundSchema = QueryParamOrder$outboundSchema;
}

/** @internal */
export const ListMessagesRequest$inboundSchema: z.ZodType<
  ListMessagesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  thread_id: z.string(),
  limit: z.number().int().default(20),
  order: QueryParamOrder$inboundSchema.default("desc"),
  after: z.string().optional(),
  before: z.string().optional(),
  run_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "thread_id": "threadId",
    "run_id": "runId",
  });
});

/** @internal */
export type ListMessagesRequest$Outbound = {
  thread_id: string;
  limit: number;
  order: string;
  after?: string | undefined;
  before?: string | undefined;
  run_id?: string | undefined;
};

/** @internal */
export const ListMessagesRequest$outboundSchema: z.ZodType<
  ListMessagesRequest$Outbound,
  z.ZodTypeDef,
  ListMessagesRequest
> = z.object({
  threadId: z.string(),
  limit: z.number().int().default(20),
  order: QueryParamOrder$outboundSchema.default("desc"),
  after: z.string().optional(),
  before: z.string().optional(),
  runId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    threadId: "thread_id",
    runId: "run_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMessagesRequest$ {
  /** @deprecated use `ListMessagesRequest$inboundSchema` instead. */
  export const inboundSchema = ListMessagesRequest$inboundSchema;
  /** @deprecated use `ListMessagesRequest$outboundSchema` instead. */
  export const outboundSchema = ListMessagesRequest$outboundSchema;
  /** @deprecated use `ListMessagesRequest$Outbound` instead. */
  export type Outbound = ListMessagesRequest$Outbound;
}
