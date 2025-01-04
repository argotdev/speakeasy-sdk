/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChatCompletionRequestAssistantMessage,
  ChatCompletionRequestAssistantMessage$inboundSchema,
  ChatCompletionRequestAssistantMessage$Outbound,
  ChatCompletionRequestAssistantMessage$outboundSchema,
} from "./chatcompletionrequestassistantmessage.js";
import {
  ChatCompletionRequestFunctionMessage,
  ChatCompletionRequestFunctionMessage$inboundSchema,
  ChatCompletionRequestFunctionMessage$Outbound,
  ChatCompletionRequestFunctionMessage$outboundSchema,
} from "./chatcompletionrequestfunctionmessage.js";
import {
  ChatCompletionRequestSystemMessage,
  ChatCompletionRequestSystemMessage$inboundSchema,
  ChatCompletionRequestSystemMessage$Outbound,
  ChatCompletionRequestSystemMessage$outboundSchema,
} from "./chatcompletionrequestsystemmessage.js";
import {
  ChatCompletionRequestToolMessage,
  ChatCompletionRequestToolMessage$inboundSchema,
  ChatCompletionRequestToolMessage$Outbound,
  ChatCompletionRequestToolMessage$outboundSchema,
} from "./chatcompletionrequesttoolmessage.js";
import {
  ChatCompletionRequestUserMessage,
  ChatCompletionRequestUserMessage$inboundSchema,
  ChatCompletionRequestUserMessage$Outbound,
  ChatCompletionRequestUserMessage$outboundSchema,
} from "./chatcompletionrequestusermessage.js";

export type ChatCompletionRequestMessage =
  | ChatCompletionRequestSystemMessage
  | ChatCompletionRequestUserMessage
  | ChatCompletionRequestToolMessage
  | ChatCompletionRequestFunctionMessage
  | ChatCompletionRequestAssistantMessage;

/** @internal */
export const ChatCompletionRequestMessage$inboundSchema: z.ZodType<
  ChatCompletionRequestMessage,
  z.ZodTypeDef,
  unknown
> = z.union([
  ChatCompletionRequestSystemMessage$inboundSchema,
  ChatCompletionRequestUserMessage$inboundSchema,
  ChatCompletionRequestToolMessage$inboundSchema,
  ChatCompletionRequestFunctionMessage$inboundSchema,
  ChatCompletionRequestAssistantMessage$inboundSchema,
]);

/** @internal */
export type ChatCompletionRequestMessage$Outbound =
  | ChatCompletionRequestSystemMessage$Outbound
  | ChatCompletionRequestUserMessage$Outbound
  | ChatCompletionRequestToolMessage$Outbound
  | ChatCompletionRequestFunctionMessage$Outbound
  | ChatCompletionRequestAssistantMessage$Outbound;

/** @internal */
export const ChatCompletionRequestMessage$outboundSchema: z.ZodType<
  ChatCompletionRequestMessage$Outbound,
  z.ZodTypeDef,
  ChatCompletionRequestMessage
> = z.union([
  ChatCompletionRequestSystemMessage$outboundSchema,
  ChatCompletionRequestUserMessage$outboundSchema,
  ChatCompletionRequestToolMessage$outboundSchema,
  ChatCompletionRequestFunctionMessage$outboundSchema,
  ChatCompletionRequestAssistantMessage$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionRequestMessage$ {
  /** @deprecated use `ChatCompletionRequestMessage$inboundSchema` instead. */
  export const inboundSchema = ChatCompletionRequestMessage$inboundSchema;
  /** @deprecated use `ChatCompletionRequestMessage$outboundSchema` instead. */
  export const outboundSchema = ChatCompletionRequestMessage$outboundSchema;
  /** @deprecated use `ChatCompletionRequestMessage$Outbound` instead. */
  export type Outbound = ChatCompletionRequestMessage$Outbound;
}

export function chatCompletionRequestMessageToJSON(
  chatCompletionRequestMessage: ChatCompletionRequestMessage,
): string {
  return JSON.stringify(
    ChatCompletionRequestMessage$outboundSchema.parse(
      chatCompletionRequestMessage,
    ),
  );
}

export function chatCompletionRequestMessageFromJSON(
  jsonString: string,
): SafeParseResult<ChatCompletionRequestMessage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatCompletionRequestMessage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatCompletionRequestMessage' from JSON`,
  );
}
