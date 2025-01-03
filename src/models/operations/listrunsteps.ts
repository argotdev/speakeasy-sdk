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
export const ListRunStepsQueryParamOrder = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
 *
 * @remarks
 */
export type ListRunStepsQueryParamOrder = ClosedEnum<
  typeof ListRunStepsQueryParamOrder
>;

export const QueryParamInclude = {
  StepDetailsToolCallsWildcardFileSearchResultsWildcardContent:
    "step_details.tool_calls[*].file_search.results[*].content",
} as const;
export type QueryParamInclude = ClosedEnum<typeof QueryParamInclude>;

export type ListRunStepsRequest = {
  /**
   * The ID of the thread the run and run steps belong to.
   */
  threadId: string;
  /**
   * The ID of the run the run steps belong to.
   */
  runId: string;
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
  order?: ListRunStepsQueryParamOrder | undefined;
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
   * A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
   *
   * @remarks
   *
   * See the [file search tool documentation](/docs/assistants/tools/file-search/customizing-file-search-settings) for more information.
   */
  include?: Array<QueryParamInclude> | undefined;
};

/** @internal */
export const ListRunStepsQueryParamOrder$inboundSchema: z.ZodNativeEnum<
  typeof ListRunStepsQueryParamOrder
> = z.nativeEnum(ListRunStepsQueryParamOrder);

/** @internal */
export const ListRunStepsQueryParamOrder$outboundSchema: z.ZodNativeEnum<
  typeof ListRunStepsQueryParamOrder
> = ListRunStepsQueryParamOrder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRunStepsQueryParamOrder$ {
  /** @deprecated use `ListRunStepsQueryParamOrder$inboundSchema` instead. */
  export const inboundSchema = ListRunStepsQueryParamOrder$inboundSchema;
  /** @deprecated use `ListRunStepsQueryParamOrder$outboundSchema` instead. */
  export const outboundSchema = ListRunStepsQueryParamOrder$outboundSchema;
}

/** @internal */
export const QueryParamInclude$inboundSchema: z.ZodNativeEnum<
  typeof QueryParamInclude
> = z.nativeEnum(QueryParamInclude);

/** @internal */
export const QueryParamInclude$outboundSchema: z.ZodNativeEnum<
  typeof QueryParamInclude
> = QueryParamInclude$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamInclude$ {
  /** @deprecated use `QueryParamInclude$inboundSchema` instead. */
  export const inboundSchema = QueryParamInclude$inboundSchema;
  /** @deprecated use `QueryParamInclude$outboundSchema` instead. */
  export const outboundSchema = QueryParamInclude$outboundSchema;
}

/** @internal */
export const ListRunStepsRequest$inboundSchema: z.ZodType<
  ListRunStepsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  thread_id: z.string(),
  run_id: z.string(),
  limit: z.number().int().default(20),
  order: ListRunStepsQueryParamOrder$inboundSchema.default("desc"),
  after: z.string().optional(),
  before: z.string().optional(),
  "include[]": z.array(QueryParamInclude$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "thread_id": "threadId",
    "run_id": "runId",
    "include[]": "include",
  });
});

/** @internal */
export type ListRunStepsRequest$Outbound = {
  thread_id: string;
  run_id: string;
  limit: number;
  order: string;
  after?: string | undefined;
  before?: string | undefined;
  "include[]"?: Array<string> | undefined;
};

/** @internal */
export const ListRunStepsRequest$outboundSchema: z.ZodType<
  ListRunStepsRequest$Outbound,
  z.ZodTypeDef,
  ListRunStepsRequest
> = z.object({
  threadId: z.string(),
  runId: z.string(),
  limit: z.number().int().default(20),
  order: ListRunStepsQueryParamOrder$outboundSchema.default("desc"),
  after: z.string().optional(),
  before: z.string().optional(),
  include: z.array(QueryParamInclude$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    threadId: "thread_id",
    runId: "run_id",
    include: "include[]",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListRunStepsRequest$ {
  /** @deprecated use `ListRunStepsRequest$inboundSchema` instead. */
  export const inboundSchema = ListRunStepsRequest$inboundSchema;
  /** @deprecated use `ListRunStepsRequest$outboundSchema` instead. */
  export const outboundSchema = ListRunStepsRequest$outboundSchema;
  /** @deprecated use `ListRunStepsRequest$Outbound` instead. */
  export type Outbound = ListRunStepsRequest$Outbound;
}
