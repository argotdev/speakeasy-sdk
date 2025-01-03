/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * Options for streaming response. Only set this when you set `stream: true`.
 *
 * @remarks
 */
export type ChatCompletionStreamOptions = {
  /**
   * If set, an additional chunk will be streamed before the `data: [DONE]` message. The `usage` field on this chunk shows the token usage statistics for the entire request, and the `choices` field will always be an empty array. All other chunks will also include a `usage` field, but with a null value.
   *
   * @remarks
   */
  includeUsage?: boolean | undefined;
};

/** @internal */
export const ChatCompletionStreamOptions$inboundSchema: z.ZodType<
  ChatCompletionStreamOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  include_usage: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "include_usage": "includeUsage",
  });
});

/** @internal */
export type ChatCompletionStreamOptions$Outbound = {
  include_usage?: boolean | undefined;
};

/** @internal */
export const ChatCompletionStreamOptions$outboundSchema: z.ZodType<
  ChatCompletionStreamOptions$Outbound,
  z.ZodTypeDef,
  ChatCompletionStreamOptions
> = z.object({
  includeUsage: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    includeUsage: "include_usage",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionStreamOptions$ {
  /** @deprecated use `ChatCompletionStreamOptions$inboundSchema` instead. */
  export const inboundSchema = ChatCompletionStreamOptions$inboundSchema;
  /** @deprecated use `ChatCompletionStreamOptions$outboundSchema` instead. */
  export const outboundSchema = ChatCompletionStreamOptions$outboundSchema;
  /** @deprecated use `ChatCompletionStreamOptions$Outbound` instead. */
  export type Outbound = ChatCompletionStreamOptions$Outbound;
}
