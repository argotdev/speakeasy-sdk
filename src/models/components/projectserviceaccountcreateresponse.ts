/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  ProjectServiceAccountApiKey,
  ProjectServiceAccountApiKey$inboundSchema,
  ProjectServiceAccountApiKey$Outbound,
  ProjectServiceAccountApiKey$outboundSchema,
} from "./projectserviceaccountapikey.js";

export const ProjectServiceAccountCreateResponseObject = {
  OrganizationProjectServiceAccount: "organization.project.service_account",
} as const;
export type ProjectServiceAccountCreateResponseObject = ClosedEnum<
  typeof ProjectServiceAccountCreateResponseObject
>;

/**
 * Service accounts can only have one role of type `member`
 */
export const ProjectServiceAccountCreateResponseRole = {
  Member: "member",
} as const;
/**
 * Service accounts can only have one role of type `member`
 */
export type ProjectServiceAccountCreateResponseRole = ClosedEnum<
  typeof ProjectServiceAccountCreateResponseRole
>;

export type ProjectServiceAccountCreateResponse = {
  object: ProjectServiceAccountCreateResponseObject;
  id: string;
  name: string;
  /**
   * Service accounts can only have one role of type `member`
   */
  role: ProjectServiceAccountCreateResponseRole;
  createdAt: number;
  apiKey: ProjectServiceAccountApiKey;
};

/** @internal */
export const ProjectServiceAccountCreateResponseObject$inboundSchema:
  z.ZodNativeEnum<typeof ProjectServiceAccountCreateResponseObject> = z
    .nativeEnum(ProjectServiceAccountCreateResponseObject);

/** @internal */
export const ProjectServiceAccountCreateResponseObject$outboundSchema:
  z.ZodNativeEnum<typeof ProjectServiceAccountCreateResponseObject> =
    ProjectServiceAccountCreateResponseObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectServiceAccountCreateResponseObject$ {
  /** @deprecated use `ProjectServiceAccountCreateResponseObject$inboundSchema` instead. */
  export const inboundSchema =
    ProjectServiceAccountCreateResponseObject$inboundSchema;
  /** @deprecated use `ProjectServiceAccountCreateResponseObject$outboundSchema` instead. */
  export const outboundSchema =
    ProjectServiceAccountCreateResponseObject$outboundSchema;
}

/** @internal */
export const ProjectServiceAccountCreateResponseRole$inboundSchema:
  z.ZodNativeEnum<typeof ProjectServiceAccountCreateResponseRole> = z
    .nativeEnum(ProjectServiceAccountCreateResponseRole);

/** @internal */
export const ProjectServiceAccountCreateResponseRole$outboundSchema:
  z.ZodNativeEnum<typeof ProjectServiceAccountCreateResponseRole> =
    ProjectServiceAccountCreateResponseRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectServiceAccountCreateResponseRole$ {
  /** @deprecated use `ProjectServiceAccountCreateResponseRole$inboundSchema` instead. */
  export const inboundSchema =
    ProjectServiceAccountCreateResponseRole$inboundSchema;
  /** @deprecated use `ProjectServiceAccountCreateResponseRole$outboundSchema` instead. */
  export const outboundSchema =
    ProjectServiceAccountCreateResponseRole$outboundSchema;
}

/** @internal */
export const ProjectServiceAccountCreateResponse$inboundSchema: z.ZodType<
  ProjectServiceAccountCreateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: ProjectServiceAccountCreateResponseObject$inboundSchema,
  id: z.string(),
  name: z.string(),
  role: ProjectServiceAccountCreateResponseRole$inboundSchema,
  created_at: z.number().int(),
  api_key: ProjectServiceAccountApiKey$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "api_key": "apiKey",
  });
});

/** @internal */
export type ProjectServiceAccountCreateResponse$Outbound = {
  object: string;
  id: string;
  name: string;
  role: string;
  created_at: number;
  api_key: ProjectServiceAccountApiKey$Outbound;
};

/** @internal */
export const ProjectServiceAccountCreateResponse$outboundSchema: z.ZodType<
  ProjectServiceAccountCreateResponse$Outbound,
  z.ZodTypeDef,
  ProjectServiceAccountCreateResponse
> = z.object({
  object: ProjectServiceAccountCreateResponseObject$outboundSchema,
  id: z.string(),
  name: z.string(),
  role: ProjectServiceAccountCreateResponseRole$outboundSchema,
  createdAt: z.number().int(),
  apiKey: ProjectServiceAccountApiKey$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    apiKey: "api_key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectServiceAccountCreateResponse$ {
  /** @deprecated use `ProjectServiceAccountCreateResponse$inboundSchema` instead. */
  export const inboundSchema =
    ProjectServiceAccountCreateResponse$inboundSchema;
  /** @deprecated use `ProjectServiceAccountCreateResponse$outboundSchema` instead. */
  export const outboundSchema =
    ProjectServiceAccountCreateResponse$outboundSchema;
  /** @deprecated use `ProjectServiceAccountCreateResponse$Outbound` instead. */
  export type Outbound = ProjectServiceAccountCreateResponse$Outbound;
}
