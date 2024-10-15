/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateProjectUserRequest = {
  /**
   * The ID of the project.
   */
  projectId: string;
  /**
   * The project user create request payload.
   */
  projectUserCreateRequest: components.ProjectUserCreateRequest;
};

/** @internal */
export const CreateProjectUserRequest$inboundSchema: z.ZodType<
  CreateProjectUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  project_id: z.string(),
  ProjectUserCreateRequest: components.ProjectUserCreateRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "project_id": "projectId",
    "ProjectUserCreateRequest": "projectUserCreateRequest",
  });
});

/** @internal */
export type CreateProjectUserRequest$Outbound = {
  project_id: string;
  ProjectUserCreateRequest: components.ProjectUserCreateRequest$Outbound;
};

/** @internal */
export const CreateProjectUserRequest$outboundSchema: z.ZodType<
  CreateProjectUserRequest$Outbound,
  z.ZodTypeDef,
  CreateProjectUserRequest
> = z.object({
  projectId: z.string(),
  projectUserCreateRequest: components.ProjectUserCreateRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    projectId: "project_id",
    projectUserCreateRequest: "ProjectUserCreateRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProjectUserRequest$ {
  /** @deprecated use `CreateProjectUserRequest$inboundSchema` instead. */
  export const inboundSchema = CreateProjectUserRequest$inboundSchema;
  /** @deprecated use `CreateProjectUserRequest$outboundSchema` instead. */
  export const outboundSchema = CreateProjectUserRequest$outboundSchema;
  /** @deprecated use `CreateProjectUserRequest$Outbound` instead. */
  export type Outbound = CreateProjectUserRequest$Outbound;
}
