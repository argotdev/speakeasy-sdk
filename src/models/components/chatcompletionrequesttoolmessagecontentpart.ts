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

export type ChatCompletionRequestToolMessageContentPart =
  ChatCompletionRequestMessageContentPartText;

/** @internal */
export const ChatCompletionRequestToolMessageContentPart$inboundSchema:
  z.ZodType<
    ChatCompletionRequestToolMessageContentPart,
    z.ZodTypeDef,
    unknown
  > = ChatCompletionRequestMessageContentPartText$inboundSchema;

/** @internal */
export type ChatCompletionRequestToolMessageContentPart$Outbound =
  ChatCompletionRequestMessageContentPartText$Outbound;

/** @internal */
export const ChatCompletionRequestToolMessageContentPart$outboundSchema:
  z.ZodType<
    ChatCompletionRequestToolMessageContentPart$Outbound,
    z.ZodTypeDef,
    ChatCompletionRequestToolMessageContentPart
  > = ChatCompletionRequestMessageContentPartText$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionRequestToolMessageContentPart$ {
  /** @deprecated use `ChatCompletionRequestToolMessageContentPart$inboundSchema` instead. */
  export const inboundSchema =
    ChatCompletionRequestToolMessageContentPart$inboundSchema;
  /** @deprecated use `ChatCompletionRequestToolMessageContentPart$outboundSchema` instead. */
  export const outboundSchema =
    ChatCompletionRequestToolMessageContentPart$outboundSchema;
  /** @deprecated use `ChatCompletionRequestToolMessageContentPart$Outbound` instead. */
  export type Outbound = ChatCompletionRequestToolMessageContentPart$Outbound;
}
