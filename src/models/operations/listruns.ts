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
export const ListRunsQueryParamOrder = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
 *
 * @remarks
 */
export type ListRunsQueryParamOrder = ClosedEnum<
  typeof ListRunsQueryParamOrder
>;

export type ListRunsRequest = {
  /**
   * The ID of the thread the run belongs to.
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
  order?: ListRunsQueryParamOrder | undefined;
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
};

/** @internal */
export const ListRunsQueryParamOrder$inboundSchema: z.ZodNativeEnum<
  typeof ListRunsQueryParamOrder
> = z.nativeEnum(ListRunsQueryParamOrder);

/** @internal */
export const ListRunsQueryParamOrder$outboundSchema: z.ZodNativeEnum<
  typeof ListRunsQueryParamOrder
> = ListRunsQueryParamOrder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRunsQueryParamOrder$ {
  /** @deprecated use `ListRunsQueryParamOrder$inboundSchema` instead. */
  export const inboundSchema = ListRunsQueryParamOrder$inboundSchema;
  /** @deprecated use `ListRunsQueryParamOrder$outboundSchema` instead. */
  export const outboundSchema = ListRunsQueryParamOrder$outboundSchema;
}

/** @internal */
export const ListRunsRequest$inboundSchema: z.ZodType<
  ListRunsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  thread_id: z.string(),
  limit: z.number().int().default(20),
  order: ListRunsQueryParamOrder$inboundSchema.default("desc"),
  after: z.string().optional(),
  before: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "thread_id": "threadId",
  });
});

/** @internal */
export type ListRunsRequest$Outbound = {
  thread_id: string;
  limit: number;
  order: string;
  after?: string | undefined;
  before?: string | undefined;
};

/** @internal */
export const ListRunsRequest$outboundSchema: z.ZodType<
  ListRunsRequest$Outbound,
  z.ZodTypeDef,
  ListRunsRequest
> = z.object({
  threadId: z.string(),
  limit: z.number().int().default(20),
  order: ListRunsQueryParamOrder$outboundSchema.default("desc"),
  after: z.string().optional(),
  before: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    threadId: "thread_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRunsRequest$ {
  /** @deprecated use `ListRunsRequest$inboundSchema` instead. */
  export const inboundSchema = ListRunsRequest$inboundSchema;
  /** @deprecated use `ListRunsRequest$outboundSchema` instead. */
  export const outboundSchema = ListRunsRequest$outboundSchema;
  /** @deprecated use `ListRunsRequest$Outbound` instead. */
  export type Outbound = ListRunsRequest$Outbound;
}
