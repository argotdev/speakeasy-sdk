/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ModifyMessageRequest = {
  /**
   * The ID of the thread to which this message belongs.
   */
  threadId: string;
  /**
   * The ID of the message to modify.
   */
  messageId: string;
  modifyMessageRequest: components.ModifyMessageRequest;
};

/** @internal */
export const ModifyMessageRequest$inboundSchema: z.ZodType<
  ModifyMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  thread_id: z.string(),
  message_id: z.string(),
  ModifyMessageRequest: components.ModifyMessageRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "thread_id": "threadId",
    "message_id": "messageId",
    "ModifyMessageRequest": "modifyMessageRequest",
  });
});

/** @internal */
export type ModifyMessageRequest$Outbound = {
  thread_id: string;
  message_id: string;
  ModifyMessageRequest: components.ModifyMessageRequest$Outbound;
};

/** @internal */
export const ModifyMessageRequest$outboundSchema: z.ZodType<
  ModifyMessageRequest$Outbound,
  z.ZodTypeDef,
  ModifyMessageRequest
> = z.object({
  threadId: z.string(),
  messageId: z.string(),
  modifyMessageRequest: components.ModifyMessageRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    threadId: "thread_id",
    messageId: "message_id",
    modifyMessageRequest: "ModifyMessageRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModifyMessageRequest$ {
  /** @deprecated use `ModifyMessageRequest$inboundSchema` instead. */
  export const inboundSchema = ModifyMessageRequest$inboundSchema;
  /** @deprecated use `ModifyMessageRequest$outboundSchema` instead. */
  export const outboundSchema = ModifyMessageRequest$outboundSchema;
  /** @deprecated use `ModifyMessageRequest$Outbound` instead. */
  export type Outbound = ModifyMessageRequest$Outbound;
}
