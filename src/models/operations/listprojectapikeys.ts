/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListProjectApiKeysRequest = {
  /**
   * The ID of the project.
   */
  projectId: string;
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
};

/** @internal */
export const ListProjectApiKeysRequest$inboundSchema: z.ZodType<
  ListProjectApiKeysRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  project_id: z.string(),
  limit: z.number().int().default(20),
  after: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "project_id": "projectId",
  });
});

/** @internal */
export type ListProjectApiKeysRequest$Outbound = {
  project_id: string;
  limit: number;
  after?: string | undefined;
};

/** @internal */
export const ListProjectApiKeysRequest$outboundSchema: z.ZodType<
  ListProjectApiKeysRequest$Outbound,
  z.ZodTypeDef,
  ListProjectApiKeysRequest
> = z.object({
  projectId: z.string(),
  limit: z.number().int().default(20),
  after: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    projectId: "project_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListProjectApiKeysRequest$ {
  /** @deprecated use `ListProjectApiKeysRequest$inboundSchema` instead. */
  export const inboundSchema = ListProjectApiKeysRequest$inboundSchema;
  /** @deprecated use `ListProjectApiKeysRequest$outboundSchema` instead. */
  export const outboundSchema = ListProjectApiKeysRequest$outboundSchema;
  /** @deprecated use `ListProjectApiKeysRequest$Outbound` instead. */
  export type Outbound = ListProjectApiKeysRequest$Outbound;
}

export function listProjectApiKeysRequestToJSON(
  listProjectApiKeysRequest: ListProjectApiKeysRequest,
): string {
  return JSON.stringify(
    ListProjectApiKeysRequest$outboundSchema.parse(listProjectApiKeysRequest),
  );
}

export function listProjectApiKeysRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListProjectApiKeysRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListProjectApiKeysRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListProjectApiKeysRequest' from JSON`,
  );
}
