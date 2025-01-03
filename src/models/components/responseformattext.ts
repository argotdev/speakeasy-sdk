/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of response format being defined: `text`
 */
export const ResponseFormatTextType = {
  Text: "text",
} as const;
/**
 * The type of response format being defined: `text`
 */
export type ResponseFormatTextType = ClosedEnum<typeof ResponseFormatTextType>;

export type ResponseFormatText = {
  /**
   * The type of response format being defined: `text`
   */
  type: ResponseFormatTextType;
};

/** @internal */
export const ResponseFormatTextType$inboundSchema: z.ZodNativeEnum<
  typeof ResponseFormatTextType
> = z.nativeEnum(ResponseFormatTextType);

/** @internal */
export const ResponseFormatTextType$outboundSchema: z.ZodNativeEnum<
  typeof ResponseFormatTextType
> = ResponseFormatTextType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseFormatTextType$ {
  /** @deprecated use `ResponseFormatTextType$inboundSchema` instead. */
  export const inboundSchema = ResponseFormatTextType$inboundSchema;
  /** @deprecated use `ResponseFormatTextType$outboundSchema` instead. */
  export const outboundSchema = ResponseFormatTextType$outboundSchema;
}

/** @internal */
export const ResponseFormatText$inboundSchema: z.ZodType<
  ResponseFormatText,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: ResponseFormatTextType$inboundSchema,
});

/** @internal */
export type ResponseFormatText$Outbound = {
  type: string;
};

/** @internal */
export const ResponseFormatText$outboundSchema: z.ZodType<
  ResponseFormatText$Outbound,
  z.ZodTypeDef,
  ResponseFormatText
> = z.object({
  type: ResponseFormatTextType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseFormatText$ {
  /** @deprecated use `ResponseFormatText$inboundSchema` instead. */
  export const inboundSchema = ResponseFormatText$inboundSchema;
  /** @deprecated use `ResponseFormatText$outboundSchema` instead. */
  export const outboundSchema = ResponseFormatText$outboundSchema;
  /** @deprecated use `ResponseFormatText$Outbound` instead. */
  export type Outbound = ResponseFormatText$Outbound;
}
