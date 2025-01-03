/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The object type, which is always `organization.project.user`
 */
export const ProjectUserObject = {
  OrganizationProjectUser: "organization.project.user",
} as const;
/**
 * The object type, which is always `organization.project.user`
 */
export type ProjectUserObject = ClosedEnum<typeof ProjectUserObject>;

/**
 * `owner` or `member`
 */
export const ProjectUserRole = {
  Owner: "owner",
  Member: "member",
} as const;
/**
 * `owner` or `member`
 */
export type ProjectUserRole = ClosedEnum<typeof ProjectUserRole>;

/**
 * Represents an individual user in a project.
 */
export type ProjectUser = {
  /**
   * The object type, which is always `organization.project.user`
   */
  object: ProjectUserObject;
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;
  /**
   * The name of the user
   */
  name: string;
  /**
   * The email address of the user
   */
  email: string;
  /**
   * `owner` or `member`
   */
  role: ProjectUserRole;
  /**
   * The Unix timestamp (in seconds) of when the project was added.
   */
  addedAt: number;
};

/** @internal */
export const ProjectUserObject$inboundSchema: z.ZodNativeEnum<
  typeof ProjectUserObject
> = z.nativeEnum(ProjectUserObject);

/** @internal */
export const ProjectUserObject$outboundSchema: z.ZodNativeEnum<
  typeof ProjectUserObject
> = ProjectUserObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectUserObject$ {
  /** @deprecated use `ProjectUserObject$inboundSchema` instead. */
  export const inboundSchema = ProjectUserObject$inboundSchema;
  /** @deprecated use `ProjectUserObject$outboundSchema` instead. */
  export const outboundSchema = ProjectUserObject$outboundSchema;
}

/** @internal */
export const ProjectUserRole$inboundSchema: z.ZodNativeEnum<
  typeof ProjectUserRole
> = z.nativeEnum(ProjectUserRole);

/** @internal */
export const ProjectUserRole$outboundSchema: z.ZodNativeEnum<
  typeof ProjectUserRole
> = ProjectUserRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectUserRole$ {
  /** @deprecated use `ProjectUserRole$inboundSchema` instead. */
  export const inboundSchema = ProjectUserRole$inboundSchema;
  /** @deprecated use `ProjectUserRole$outboundSchema` instead. */
  export const outboundSchema = ProjectUserRole$outboundSchema;
}

/** @internal */
export const ProjectUser$inboundSchema: z.ZodType<
  ProjectUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: ProjectUserObject$inboundSchema,
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: ProjectUserRole$inboundSchema,
  added_at: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "added_at": "addedAt",
  });
});

/** @internal */
export type ProjectUser$Outbound = {
  object: string;
  id: string;
  name: string;
  email: string;
  role: string;
  added_at: number;
};

/** @internal */
export const ProjectUser$outboundSchema: z.ZodType<
  ProjectUser$Outbound,
  z.ZodTypeDef,
  ProjectUser
> = z.object({
  object: ProjectUserObject$outboundSchema,
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: ProjectUserRole$outboundSchema,
  addedAt: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    addedAt: "added_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectUser$ {
  /** @deprecated use `ProjectUser$inboundSchema` instead. */
  export const inboundSchema = ProjectUser$inboundSchema;
  /** @deprecated use `ProjectUser$outboundSchema` instead. */
  export const outboundSchema = ProjectUser$outboundSchema;
  /** @deprecated use `ProjectUser$Outbound` instead. */
  export type Outbound = ProjectUser$Outbound;
}
