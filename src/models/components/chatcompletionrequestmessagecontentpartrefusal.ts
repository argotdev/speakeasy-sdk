/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of the content part.
 */
export const ChatCompletionRequestMessageContentPartRefusalType = {
  Refusal: "refusal",
} as const;
/**
 * The type of the content part.
 */
export type ChatCompletionRequestMessageContentPartRefusalType = ClosedEnum<
  typeof ChatCompletionRequestMessageContentPartRefusalType
>;

export type ChatCompletionRequestMessageContentPartRefusal = {
  /**
   * The type of the content part.
   */
  type: ChatCompletionRequestMessageContentPartRefusalType;
  /**
   * The refusal message generated by the model.
   */
  refusal: string;
};

/** @internal */
export const ChatCompletionRequestMessageContentPartRefusalType$inboundSchema:
  z.ZodNativeEnum<typeof ChatCompletionRequestMessageContentPartRefusalType> = z
    .nativeEnum(ChatCompletionRequestMessageContentPartRefusalType);

/** @internal */
export const ChatCompletionRequestMessageContentPartRefusalType$outboundSchema:
  z.ZodNativeEnum<typeof ChatCompletionRequestMessageContentPartRefusalType> =
    ChatCompletionRequestMessageContentPartRefusalType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionRequestMessageContentPartRefusalType$ {
  /** @deprecated use `ChatCompletionRequestMessageContentPartRefusalType$inboundSchema` instead. */
  export const inboundSchema =
    ChatCompletionRequestMessageContentPartRefusalType$inboundSchema;
  /** @deprecated use `ChatCompletionRequestMessageContentPartRefusalType$outboundSchema` instead. */
  export const outboundSchema =
    ChatCompletionRequestMessageContentPartRefusalType$outboundSchema;
}

/** @internal */
export const ChatCompletionRequestMessageContentPartRefusal$inboundSchema:
  z.ZodType<
    ChatCompletionRequestMessageContentPartRefusal,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: ChatCompletionRequestMessageContentPartRefusalType$inboundSchema,
    refusal: z.string(),
  });

/** @internal */
export type ChatCompletionRequestMessageContentPartRefusal$Outbound = {
  type: string;
  refusal: string;
};

/** @internal */
export const ChatCompletionRequestMessageContentPartRefusal$outboundSchema:
  z.ZodType<
    ChatCompletionRequestMessageContentPartRefusal$Outbound,
    z.ZodTypeDef,
    ChatCompletionRequestMessageContentPartRefusal
  > = z.object({
    type: ChatCompletionRequestMessageContentPartRefusalType$outboundSchema,
    refusal: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionRequestMessageContentPartRefusal$ {
  /** @deprecated use `ChatCompletionRequestMessageContentPartRefusal$inboundSchema` instead. */
  export const inboundSchema =
    ChatCompletionRequestMessageContentPartRefusal$inboundSchema;
  /** @deprecated use `ChatCompletionRequestMessageContentPartRefusal$outboundSchema` instead. */
  export const outboundSchema =
    ChatCompletionRequestMessageContentPartRefusal$outboundSchema;
  /** @deprecated use `ChatCompletionRequestMessageContentPartRefusal$Outbound` instead. */
  export type Outbound =
    ChatCompletionRequestMessageContentPartRefusal$Outbound;
}
