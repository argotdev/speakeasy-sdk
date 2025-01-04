/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChatCompletionStreamOptions,
  ChatCompletionStreamOptions$inboundSchema,
  ChatCompletionStreamOptions$Outbound,
  ChatCompletionStreamOptions$outboundSchema,
} from "./chatcompletionstreamoptions.js";

export const Model2 = {
  Gpt35TurboInstruct: "gpt-3.5-turbo-instruct",
  Davinci002: "davinci-002",
  Babbage002: "babbage-002",
} as const;
export type Model2 = ClosedEnum<typeof Model2>;

/**
 * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
 *
 * @remarks
 */
export type CreateCompletionRequestModel = string | Model2;

/**
 * The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.
 *
 * @remarks
 *
 * Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.
 */
export type Prompt =
  | string
  | Array<string>
  | Array<number>
  | Array<Array<number>>;

/**
 * Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.
 *
 * @remarks
 */
export type CreateCompletionRequestStop = string | Array<string>;

export type CreateCompletionRequest = {
  /**
   * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
   *
   * @remarks
   */
  model: string | Model2;
  /**
   * The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.
   *
   * @remarks
   *
   * Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.
   */
  prompt: string | Array<string> | Array<number> | Array<Array<number>> | null;
  /**
   * Generates `best_of` completions server-side and returns the "best" (the one with the highest log probability per token). Results cannot be streamed.
   *
   * @remarks
   *
   * When used with `n`, `best_of` controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.
   *
   * **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
   */
  bestOf?: number | null | undefined;
  /**
   * Echo back the prompt in addition to the completion
   *
   * @remarks
   */
  echo?: boolean | null | undefined;
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
   *
   * @remarks
   *
   * [See more information about frequency and presence penalties.](/docs/guides/text-generation/parameter-details)
   */
  frequencyPenalty?: number | null | undefined;
  /**
   * Modify the likelihood of specified tokens appearing in the completion.
   *
   * @remarks
   *
   * Accepts a JSON object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
   *
   * As an example, you can pass `{"50256": -100}` to prevent the <|endoftext|> token from being generated.
   */
  logitBias?: { [k: string]: number } | null | undefined;
  /**
   * Include the log probabilities on the `logprobs` most likely output tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.
   *
   * @remarks
   *
   * The maximum value for `logprobs` is 5.
   */
  logprobs?: number | null | undefined;
  /**
   * The maximum number of [tokens](/tokenizer) that can be generated in the completion.
   *
   * @remarks
   *
   * The token count of your prompt plus `max_tokens` cannot exceed the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.
   */
  maxTokens?: number | null | undefined;
  /**
   * How many completions to generate for each prompt.
   *
   * @remarks
   *
   * **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
   */
  n?: number | null | undefined;
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
   *
   * @remarks
   *
   * [See more information about frequency and presence penalties.](/docs/guides/text-generation/parameter-details)
   */
  presencePenalty?: number | null | undefined;
  /**
   * If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
   *
   * @remarks
   *
   * Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
   */
  seed?: number | null | undefined;
  /**
   * Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.
   *
   * @remarks
   */
  stop?: string | Array<string> | null | undefined;
  /**
   * Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).
   *
   * @remarks
   */
  stream?: boolean | null | undefined;
  /**
   * Options for streaming response. Only set this when you set `stream: true`.
   *
   * @remarks
   */
  streamOptions?: ChatCompletionStreamOptions | null | undefined;
  /**
   * The suffix that comes after a completion of inserted text.
   *
   * @remarks
   *
   * This parameter is only supported for `gpt-3.5-turbo-instruct`.
   */
  suffix?: string | null | undefined;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   *
   * @remarks
   *
   * We generally recommend altering this or `top_p` but not both.
   */
  temperature?: number | null | undefined;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
   *
   * @remarks
   *
   * We generally recommend altering this or `temperature` but not both.
   */
  topP?: number | null | undefined;
  /**
   * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   *
   * @remarks
   */
  user?: string | undefined;
};

/** @internal */
export const Model2$inboundSchema: z.ZodNativeEnum<typeof Model2> = z
  .nativeEnum(Model2);

/** @internal */
export const Model2$outboundSchema: z.ZodNativeEnum<typeof Model2> =
  Model2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model2$ {
  /** @deprecated use `Model2$inboundSchema` instead. */
  export const inboundSchema = Model2$inboundSchema;
  /** @deprecated use `Model2$outboundSchema` instead. */
  export const outboundSchema = Model2$outboundSchema;
}

/** @internal */
export const CreateCompletionRequestModel$inboundSchema: z.ZodType<
  CreateCompletionRequestModel,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), Model2$inboundSchema]);

/** @internal */
export type CreateCompletionRequestModel$Outbound = string | string;

/** @internal */
export const CreateCompletionRequestModel$outboundSchema: z.ZodType<
  CreateCompletionRequestModel$Outbound,
  z.ZodTypeDef,
  CreateCompletionRequestModel
> = z.union([z.string(), Model2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCompletionRequestModel$ {
  /** @deprecated use `CreateCompletionRequestModel$inboundSchema` instead. */
  export const inboundSchema = CreateCompletionRequestModel$inboundSchema;
  /** @deprecated use `CreateCompletionRequestModel$outboundSchema` instead. */
  export const outboundSchema = CreateCompletionRequestModel$outboundSchema;
  /** @deprecated use `CreateCompletionRequestModel$Outbound` instead. */
  export type Outbound = CreateCompletionRequestModel$Outbound;
}

export function createCompletionRequestModelToJSON(
  createCompletionRequestModel: CreateCompletionRequestModel,
): string {
  return JSON.stringify(
    CreateCompletionRequestModel$outboundSchema.parse(
      createCompletionRequestModel,
    ),
  );
}

export function createCompletionRequestModelFromJSON(
  jsonString: string,
): SafeParseResult<CreateCompletionRequestModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCompletionRequestModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCompletionRequestModel' from JSON`,
  );
}

/** @internal */
export const Prompt$inboundSchema: z.ZodType<Prompt, z.ZodTypeDef, unknown> = z
  .union([
    z.string(),
    z.array(z.string()),
    z.array(z.number().int()),
    z.array(z.array(z.number().int())),
  ]);

/** @internal */
export type Prompt$Outbound =
  | string
  | Array<string>
  | Array<number>
  | Array<Array<number>>;

/** @internal */
export const Prompt$outboundSchema: z.ZodType<
  Prompt$Outbound,
  z.ZodTypeDef,
  Prompt
> = z.union([
  z.string(),
  z.array(z.string()),
  z.array(z.number().int()),
  z.array(z.array(z.number().int())),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Prompt$ {
  /** @deprecated use `Prompt$inboundSchema` instead. */
  export const inboundSchema = Prompt$inboundSchema;
  /** @deprecated use `Prompt$outboundSchema` instead. */
  export const outboundSchema = Prompt$outboundSchema;
  /** @deprecated use `Prompt$Outbound` instead. */
  export type Outbound = Prompt$Outbound;
}

export function promptToJSON(prompt: Prompt): string {
  return JSON.stringify(Prompt$outboundSchema.parse(prompt));
}

export function promptFromJSON(
  jsonString: string,
): SafeParseResult<Prompt, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Prompt$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Prompt' from JSON`,
  );
}

/** @internal */
export const CreateCompletionRequestStop$inboundSchema: z.ZodType<
  CreateCompletionRequestStop,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CreateCompletionRequestStop$Outbound = string | Array<string>;

/** @internal */
export const CreateCompletionRequestStop$outboundSchema: z.ZodType<
  CreateCompletionRequestStop$Outbound,
  z.ZodTypeDef,
  CreateCompletionRequestStop
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCompletionRequestStop$ {
  /** @deprecated use `CreateCompletionRequestStop$inboundSchema` instead. */
  export const inboundSchema = CreateCompletionRequestStop$inboundSchema;
  /** @deprecated use `CreateCompletionRequestStop$outboundSchema` instead. */
  export const outboundSchema = CreateCompletionRequestStop$outboundSchema;
  /** @deprecated use `CreateCompletionRequestStop$Outbound` instead. */
  export type Outbound = CreateCompletionRequestStop$Outbound;
}

export function createCompletionRequestStopToJSON(
  createCompletionRequestStop: CreateCompletionRequestStop,
): string {
  return JSON.stringify(
    CreateCompletionRequestStop$outboundSchema.parse(
      createCompletionRequestStop,
    ),
  );
}

export function createCompletionRequestStopFromJSON(
  jsonString: string,
): SafeParseResult<CreateCompletionRequestStop, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCompletionRequestStop$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCompletionRequestStop' from JSON`,
  );
}

/** @internal */
export const CreateCompletionRequest$inboundSchema: z.ZodType<
  CreateCompletionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  model: z.union([z.string(), Model2$inboundSchema]),
  prompt: z.nullable(
    z.union([
      z.string(),
      z.array(z.string()),
      z.array(z.number().int()),
      z.array(z.array(z.number().int())),
    ]),
  ),
  best_of: z.nullable(z.number().int().default(1)),
  echo: z.nullable(z.boolean().default(false)),
  frequency_penalty: z.nullable(z.number().default(0)),
  logit_bias: z.nullable(z.record(z.number().int())).optional(),
  logprobs: z.nullable(z.number().int()).default(null),
  max_tokens: z.nullable(z.number().int().default(16)),
  n: z.nullable(z.number().int().default(1)),
  presence_penalty: z.nullable(z.number().default(0)),
  seed: z.nullable(z.number().int()).optional(),
  stop: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  stream: z.nullable(z.boolean().default(false)),
  stream_options: z.nullable(ChatCompletionStreamOptions$inboundSchema)
    .optional(),
  suffix: z.nullable(z.string()).default(null),
  temperature: z.nullable(z.number().default(1)),
  top_p: z.nullable(z.number().default(1)),
  user: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "best_of": "bestOf",
    "frequency_penalty": "frequencyPenalty",
    "logit_bias": "logitBias",
    "max_tokens": "maxTokens",
    "presence_penalty": "presencePenalty",
    "stream_options": "streamOptions",
    "top_p": "topP",
  });
});

/** @internal */
export type CreateCompletionRequest$Outbound = {
  model: string | string;
  prompt: string | Array<string> | Array<number> | Array<Array<number>> | null;
  best_of: number | null;
  echo: boolean | null;
  frequency_penalty: number | null;
  logit_bias?: { [k: string]: number } | null | undefined;
  logprobs: number | null;
  max_tokens: number | null;
  n: number | null;
  presence_penalty: number | null;
  seed?: number | null | undefined;
  stop?: string | Array<string> | null | undefined;
  stream: boolean | null;
  stream_options?: ChatCompletionStreamOptions$Outbound | null | undefined;
  suffix: string | null;
  temperature: number | null;
  top_p: number | null;
  user?: string | undefined;
};

/** @internal */
export const CreateCompletionRequest$outboundSchema: z.ZodType<
  CreateCompletionRequest$Outbound,
  z.ZodTypeDef,
  CreateCompletionRequest
> = z.object({
  model: z.union([z.string(), Model2$outboundSchema]),
  prompt: z.nullable(
    z.union([
      z.string(),
      z.array(z.string()),
      z.array(z.number().int()),
      z.array(z.array(z.number().int())),
    ]),
  ),
  bestOf: z.nullable(z.number().int().default(1)),
  echo: z.nullable(z.boolean().default(false)),
  frequencyPenalty: z.nullable(z.number().default(0)),
  logitBias: z.nullable(z.record(z.number().int())).optional(),
  logprobs: z.nullable(z.number().int()).default(null),
  maxTokens: z.nullable(z.number().int().default(16)),
  n: z.nullable(z.number().int().default(1)),
  presencePenalty: z.nullable(z.number().default(0)),
  seed: z.nullable(z.number().int()).optional(),
  stop: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  stream: z.nullable(z.boolean().default(false)),
  streamOptions: z.nullable(ChatCompletionStreamOptions$outboundSchema)
    .optional(),
  suffix: z.nullable(z.string()).default(null),
  temperature: z.nullable(z.number().default(1)),
  topP: z.nullable(z.number().default(1)),
  user: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    bestOf: "best_of",
    frequencyPenalty: "frequency_penalty",
    logitBias: "logit_bias",
    maxTokens: "max_tokens",
    presencePenalty: "presence_penalty",
    streamOptions: "stream_options",
    topP: "top_p",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCompletionRequest$ {
  /** @deprecated use `CreateCompletionRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCompletionRequest$inboundSchema;
  /** @deprecated use `CreateCompletionRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCompletionRequest$outboundSchema;
  /** @deprecated use `CreateCompletionRequest$Outbound` instead. */
  export type Outbound = CreateCompletionRequest$Outbound;
}

export function createCompletionRequestToJSON(
  createCompletionRequest: CreateCompletionRequest,
): string {
  return JSON.stringify(
    CreateCompletionRequest$outboundSchema.parse(createCompletionRequest),
  );
}

export function createCompletionRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateCompletionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCompletionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCompletionRequest' from JSON`,
  );
}
