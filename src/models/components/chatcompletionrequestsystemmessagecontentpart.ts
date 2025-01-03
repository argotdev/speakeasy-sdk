/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ChatCompletionRequestMessageContentPartText,
  ChatCompletionRequestMessageContentPartText$inboundSchema,
  ChatCompletionRequestMessageContentPartText$Outbound,
  ChatCompletionRequestMessageContentPartText$outboundSchema,
} from "./chatcompletionrequestmessagecontentparttext.js";

export type ChatCompletionRequestSystemMessageContentPart =
  ChatCompletionRequestMessageContentPartText;

/** @internal */
export const ChatCompletionRequestSystemMessageContentPart$inboundSchema:
  z.ZodType<
    ChatCompletionRequestSystemMessageContentPart,
    z.ZodTypeDef,
    unknown
  > = ChatCompletionRequestMessageContentPartText$inboundSchema;

/** @internal */
export type ChatCompletionRequestSystemMessageContentPart$Outbound =
  ChatCompletionRequestMessageContentPartText$Outbound;

/** @internal */
export const ChatCompletionRequestSystemMessageContentPart$outboundSchema:
  z.ZodType<
    ChatCompletionRequestSystemMessageContentPart$Outbound,
    z.ZodTypeDef,
    ChatCompletionRequestSystemMessageContentPart
  > = ChatCompletionRequestMessageContentPartText$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionRequestSystemMessageContentPart$ {
  /** @deprecated use `ChatCompletionRequestSystemMessageContentPart$inboundSchema` instead. */
  export const inboundSchema =
    ChatCompletionRequestSystemMessageContentPart$inboundSchema;
  /** @deprecated use `ChatCompletionRequestSystemMessageContentPart$outboundSchema` instead. */
  export const outboundSchema =
    ChatCompletionRequestSystemMessageContentPart$outboundSchema;
  /** @deprecated use `ChatCompletionRequestSystemMessageContentPart$Outbound` instead. */
  export type Outbound = ChatCompletionRequestSystemMessageContentPart$Outbound;
}
