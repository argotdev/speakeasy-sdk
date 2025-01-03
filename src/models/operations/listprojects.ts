/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListProjectsRequest = {
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   *
   * @remarks
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   *
   * @remarks
   */
  after?: string | undefined;
  /**
   * If `true` returns all projects including those that have been `archived`. Archived projects are not included by default.
   */
  includeArchived?: boolean | undefined;
};

/** @internal */
export const ListProjectsRequest$inboundSchema: z.ZodType<
  ListProjectsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().default(20),
  after: z.string().optional(),
  include_archived: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    "include_archived": "includeArchived",
  });
});

/** @internal */
export type ListProjectsRequest$Outbound = {
  limit: number;
  after?: string | undefined;
  include_archived: boolean;
};

/** @internal */
export const ListProjectsRequest$outboundSchema: z.ZodType<
  ListProjectsRequest$Outbound,
  z.ZodTypeDef,
  ListProjectsRequest
> = z.object({
  limit: z.number().int().default(20),
  after: z.string().optional(),
  includeArchived: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    includeArchived: "include_archived",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListProjectsRequest$ {
  /** @deprecated use `ListProjectsRequest$inboundSchema` instead. */
  export const inboundSchema = ListProjectsRequest$inboundSchema;
  /** @deprecated use `ListProjectsRequest$outboundSchema` instead. */
  export const outboundSchema = ListProjectsRequest$outboundSchema;
  /** @deprecated use `ListProjectsRequest$Outbound` instead. */
  export type Outbound = ListProjectsRequest$Outbound;
}
