/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ModifyProjectRequest = {
  /**
   * The ID of the project.
   */
  projectId: string;
  /**
   * The project update request payload.
   */
  projectUpdateRequest: components.ProjectUpdateRequest;
};

/** @internal */
export const ModifyProjectRequest$inboundSchema: z.ZodType<
  ModifyProjectRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  project_id: z.string(),
  ProjectUpdateRequest: components.ProjectUpdateRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "project_id": "projectId",
    "ProjectUpdateRequest": "projectUpdateRequest",
  });
});

/** @internal */
export type ModifyProjectRequest$Outbound = {
  project_id: string;
  ProjectUpdateRequest: components.ProjectUpdateRequest$Outbound;
};

/** @internal */
export const ModifyProjectRequest$outboundSchema: z.ZodType<
  ModifyProjectRequest$Outbound,
  z.ZodTypeDef,
  ModifyProjectRequest
> = z.object({
  projectId: z.string(),
  projectUpdateRequest: components.ProjectUpdateRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    projectId: "project_id",
    projectUpdateRequest: "ProjectUpdateRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModifyProjectRequest$ {
  /** @deprecated use `ModifyProjectRequest$inboundSchema` instead. */
  export const inboundSchema = ModifyProjectRequest$inboundSchema;
  /** @deprecated use `ModifyProjectRequest$outboundSchema` instead. */
  export const outboundSchema = ModifyProjectRequest$outboundSchema;
  /** @deprecated use `ModifyProjectRequest$Outbound` instead. */
  export type Outbound = ModifyProjectRequest$Outbound;
}
