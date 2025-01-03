/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type RetrieveProjectUserRequest = {
  /**
   * The ID of the project.
   */
  projectId: string;
  /**
   * The ID of the user.
   */
  userId: string;
};

/** @internal */
export const RetrieveProjectUserRequest$inboundSchema: z.ZodType<
  RetrieveProjectUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  project_id: z.string(),
  user_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "project_id": "projectId",
    "user_id": "userId",
  });
});

/** @internal */
export type RetrieveProjectUserRequest$Outbound = {
  project_id: string;
  user_id: string;
};

/** @internal */
export const RetrieveProjectUserRequest$outboundSchema: z.ZodType<
  RetrieveProjectUserRequest$Outbound,
  z.ZodTypeDef,
  RetrieveProjectUserRequest
> = z.object({
  projectId: z.string(),
  userId: z.string(),
}).transform((v) => {
  return remap$(v, {
    projectId: "project_id",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveProjectUserRequest$ {
  /** @deprecated use `RetrieveProjectUserRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveProjectUserRequest$inboundSchema;
  /** @deprecated use `RetrieveProjectUserRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveProjectUserRequest$outboundSchema;
  /** @deprecated use `RetrieveProjectUserRequest$Outbound` instead. */
  export type Outbound = RetrieveProjectUserRequest$Outbound;
}
