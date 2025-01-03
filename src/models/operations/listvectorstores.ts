/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
 *
 * @remarks
 */
export const ListVectorStoresQueryParamOrder = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
 *
 * @remarks
 */
export type ListVectorStoresQueryParamOrder = ClosedEnum<
  typeof ListVectorStoresQueryParamOrder
>;

export type ListVectorStoresRequest = {
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
  order?: ListVectorStoresQueryParamOrder | undefined;
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
export const ListVectorStoresQueryParamOrder$inboundSchema: z.ZodNativeEnum<
  typeof ListVectorStoresQueryParamOrder
> = z.nativeEnum(ListVectorStoresQueryParamOrder);

/** @internal */
export const ListVectorStoresQueryParamOrder$outboundSchema: z.ZodNativeEnum<
  typeof ListVectorStoresQueryParamOrder
> = ListVectorStoresQueryParamOrder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListVectorStoresQueryParamOrder$ {
  /** @deprecated use `ListVectorStoresQueryParamOrder$inboundSchema` instead. */
  export const inboundSchema = ListVectorStoresQueryParamOrder$inboundSchema;
  /** @deprecated use `ListVectorStoresQueryParamOrder$outboundSchema` instead. */
  export const outboundSchema = ListVectorStoresQueryParamOrder$outboundSchema;
}

/** @internal */
export const ListVectorStoresRequest$inboundSchema: z.ZodType<
  ListVectorStoresRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(20),
  order: ListVectorStoresQueryParamOrder$inboundSchema.default("desc"),
  after: z.string().optional(),
  before: z.string().optional(),
});

/** @internal */
export type ListVectorStoresRequest$Outbound = {
  limit: number;
  order: string;
  after?: string | undefined;
  before?: string | undefined;
};

/** @internal */
export const ListVectorStoresRequest$outboundSchema: z.ZodType<
  ListVectorStoresRequest$Outbound,
  z.ZodTypeDef,
  ListVectorStoresRequest
> = z.object({
  limit: z.number().int().default(20),
  order: ListVectorStoresQueryParamOrder$outboundSchema.default("desc"),
  after: z.string().optional(),
  before: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListVectorStoresRequest$ {
  /** @deprecated use `ListVectorStoresRequest$inboundSchema` instead. */
  export const inboundSchema = ListVectorStoresRequest$inboundSchema;
  /** @deprecated use `ListVectorStoresRequest$outboundSchema` instead. */
  export const outboundSchema = ListVectorStoresRequest$outboundSchema;
  /** @deprecated use `ListVectorStoresRequest$Outbound` instead. */
  export type Outbound = ListVectorStoresRequest$Outbound;
}
