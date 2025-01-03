/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of tool being defined: `file_search`
 */
export const AssistantToolsFileSearchTypeOnlyType = {
  FileSearch: "file_search",
} as const;
/**
 * The type of tool being defined: `file_search`
 */
export type AssistantToolsFileSearchTypeOnlyType = ClosedEnum<
  typeof AssistantToolsFileSearchTypeOnlyType
>;

export type AssistantToolsFileSearchTypeOnly = {
  /**
   * The type of tool being defined: `file_search`
   */
  type: AssistantToolsFileSearchTypeOnlyType;
};

/** @internal */
export const AssistantToolsFileSearchTypeOnlyType$inboundSchema:
  z.ZodNativeEnum<typeof AssistantToolsFileSearchTypeOnlyType> = z.nativeEnum(
    AssistantToolsFileSearchTypeOnlyType,
  );

/** @internal */
export const AssistantToolsFileSearchTypeOnlyType$outboundSchema:
  z.ZodNativeEnum<typeof AssistantToolsFileSearchTypeOnlyType> =
    AssistantToolsFileSearchTypeOnlyType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssistantToolsFileSearchTypeOnlyType$ {
  /** @deprecated use `AssistantToolsFileSearchTypeOnlyType$inboundSchema` instead. */
  export const inboundSchema =
    AssistantToolsFileSearchTypeOnlyType$inboundSchema;
  /** @deprecated use `AssistantToolsFileSearchTypeOnlyType$outboundSchema` instead. */
  export const outboundSchema =
    AssistantToolsFileSearchTypeOnlyType$outboundSchema;
}

/** @internal */
export const AssistantToolsFileSearchTypeOnly$inboundSchema: z.ZodType<
  AssistantToolsFileSearchTypeOnly,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: AssistantToolsFileSearchTypeOnlyType$inboundSchema,
});

/** @internal */
export type AssistantToolsFileSearchTypeOnly$Outbound = {
  type: string;
};

/** @internal */
export const AssistantToolsFileSearchTypeOnly$outboundSchema: z.ZodType<
  AssistantToolsFileSearchTypeOnly$Outbound,
  z.ZodTypeDef,
  AssistantToolsFileSearchTypeOnly
> = z.object({
  type: AssistantToolsFileSearchTypeOnlyType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssistantToolsFileSearchTypeOnly$ {
  /** @deprecated use `AssistantToolsFileSearchTypeOnly$inboundSchema` instead. */
  export const inboundSchema = AssistantToolsFileSearchTypeOnly$inboundSchema;
  /** @deprecated use `AssistantToolsFileSearchTypeOnly$outboundSchema` instead. */
  export const outboundSchema = AssistantToolsFileSearchTypeOnly$outboundSchema;
  /** @deprecated use `AssistantToolsFileSearchTypeOnly$Outbound` instead. */
  export type Outbound = AssistantToolsFileSearchTypeOnly$Outbound;
}
