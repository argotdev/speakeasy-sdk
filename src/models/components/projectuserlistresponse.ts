/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ProjectUser,
  ProjectUser$inboundSchema,
  ProjectUser$Outbound,
  ProjectUser$outboundSchema,
} from "./projectuser.js";

export type ProjectUserListResponse = {
  object: string;
  data: Array<ProjectUser>;
  firstId: string;
  lastId: string;
  hasMore: boolean;
};

/** @internal */
export const ProjectUserListResponse$inboundSchema: z.ZodType<
  ProjectUserListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: z.string(),
  data: z.array(ProjectUser$inboundSchema),
  first_id: z.string(),
  last_id: z.string(),
  has_more: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "first_id": "firstId",
    "last_id": "lastId",
    "has_more": "hasMore",
  });
});

/** @internal */
export type ProjectUserListResponse$Outbound = {
  object: string;
  data: Array<ProjectUser$Outbound>;
  first_id: string;
  last_id: string;
  has_more: boolean;
};

/** @internal */
export const ProjectUserListResponse$outboundSchema: z.ZodType<
  ProjectUserListResponse$Outbound,
  z.ZodTypeDef,
  ProjectUserListResponse
> = z.object({
  object: z.string(),
  data: z.array(ProjectUser$outboundSchema),
  firstId: z.string(),
  lastId: z.string(),
  hasMore: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    firstId: "first_id",
    lastId: "last_id",
    hasMore: "has_more",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectUserListResponse$ {
  /** @deprecated use `ProjectUserListResponse$inboundSchema` instead. */
  export const inboundSchema = ProjectUserListResponse$inboundSchema;
  /** @deprecated use `ProjectUserListResponse$outboundSchema` instead. */
  export const outboundSchema = ProjectUserListResponse$outboundSchema;
  /** @deprecated use `ProjectUserListResponse$Outbound` instead. */
  export type Outbound = ProjectUserListResponse$Outbound;
}

export function projectUserListResponseToJSON(
  projectUserListResponse: ProjectUserListResponse,
): string {
  return JSON.stringify(
    ProjectUserListResponse$outboundSchema.parse(projectUserListResponse),
  );
}

export function projectUserListResponseFromJSON(
  jsonString: string,
): SafeParseResult<ProjectUserListResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProjectUserListResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProjectUserListResponse' from JSON`,
  );
}
