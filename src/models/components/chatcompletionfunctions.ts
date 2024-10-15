/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type ChatCompletionFunctions = {
  /**
   * A description of what the function does, used by the model to choose when and how to call the function.
   */
  description?: string | undefined;
  /**
   * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.
   */
  name: string;
  /**
   * The parameters the functions accepts, described as a JSON Schema object. See the [guide](/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.
   *
   * @remarks
   *
   * Omitting `parameters` defines a function with an empty parameter list.
   */
  parameters?: { [k: string]: any } | undefined;
};

/** @internal */
export const ChatCompletionFunctions$inboundSchema: z.ZodType<
  ChatCompletionFunctions,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string().optional(),
  name: z.string(),
  parameters: z.record(z.any()).optional(),
});

/** @internal */
export type ChatCompletionFunctions$Outbound = {
  description?: string | undefined;
  name: string;
  parameters?: { [k: string]: any } | undefined;
};

/** @internal */
export const ChatCompletionFunctions$outboundSchema: z.ZodType<
  ChatCompletionFunctions$Outbound,
  z.ZodTypeDef,
  ChatCompletionFunctions
> = z.object({
  description: z.string().optional(),
  name: z.string(),
  parameters: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionFunctions$ {
  /** @deprecated use `ChatCompletionFunctions$inboundSchema` instead. */
  export const inboundSchema = ChatCompletionFunctions$inboundSchema;
  /** @deprecated use `ChatCompletionFunctions$outboundSchema` instead. */
  export const outboundSchema = ChatCompletionFunctions$outboundSchema;
  /** @deprecated use `ChatCompletionFunctions$Outbound` instead. */
  export type Outbound = ChatCompletionFunctions$Outbound;
}
