/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Project,
  Project$inboundSchema,
  Project$Outbound,
  Project$outboundSchema,
} from "./project.js";

export const ProjectListResponseObject = {
  List: "list",
} as const;
export type ProjectListResponseObject = ClosedEnum<
  typeof ProjectListResponseObject
>;

export type ProjectListResponse = {
  object: ProjectListResponseObject;
  data: Array<Project>;
  firstId: string;
  lastId: string;
  hasMore: boolean;
};

/** @internal */
export const ProjectListResponseObject$inboundSchema: z.ZodNativeEnum<
  typeof ProjectListResponseObject
> = z.nativeEnum(ProjectListResponseObject);

/** @internal */
export const ProjectListResponseObject$outboundSchema: z.ZodNativeEnum<
  typeof ProjectListResponseObject
> = ProjectListResponseObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectListResponseObject$ {
  /** @deprecated use `ProjectListResponseObject$inboundSchema` instead. */
  export const inboundSchema = ProjectListResponseObject$inboundSchema;
  /** @deprecated use `ProjectListResponseObject$outboundSchema` instead. */
  export const outboundSchema = ProjectListResponseObject$outboundSchema;
}

/** @internal */
export const ProjectListResponse$inboundSchema: z.ZodType<
  ProjectListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: ProjectListResponseObject$inboundSchema,
  data: z.array(Project$inboundSchema),
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
export type ProjectListResponse$Outbound = {
  object: string;
  data: Array<Project$Outbound>;
  first_id: string;
  last_id: string;
  has_more: boolean;
};

/** @internal */
export const ProjectListResponse$outboundSchema: z.ZodType<
  ProjectListResponse$Outbound,
  z.ZodTypeDef,
  ProjectListResponse
> = z.object({
  object: ProjectListResponseObject$outboundSchema,
  data: z.array(Project$outboundSchema),
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
export namespace ProjectListResponse$ {
  /** @deprecated use `ProjectListResponse$inboundSchema` instead. */
  export const inboundSchema = ProjectListResponse$inboundSchema;
  /** @deprecated use `ProjectListResponse$outboundSchema` instead. */
  export const outboundSchema = ProjectListResponse$outboundSchema;
  /** @deprecated use `ProjectListResponse$Outbound` instead. */
  export type Outbound = ProjectListResponse$Outbound;
}

export function projectListResponseToJSON(
  projectListResponse: ProjectListResponse,
): string {
  return JSON.stringify(
    ProjectListResponse$outboundSchema.parse(projectListResponse),
  );
}

export function projectListResponseFromJSON(
  jsonString: string,
): SafeParseResult<ProjectListResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProjectListResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProjectListResponse' from JSON`,
  );
}
