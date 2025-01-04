/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`.
 */
export type RunStepCompletionUsage = {
  /**
   * Number of completion tokens used over the course of the run step.
   */
  completionTokens: number;
  /**
   * Number of prompt tokens used over the course of the run step.
   */
  promptTokens: number;
  /**
   * Total number of tokens used (prompt + completion).
   */
  totalTokens: number;
};

/** @internal */
export const RunStepCompletionUsage$inboundSchema: z.ZodType<
  RunStepCompletionUsage,
  z.ZodTypeDef,
  unknown
> = z.object({
  completion_tokens: z.number().int(),
  prompt_tokens: z.number().int(),
  total_tokens: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "completion_tokens": "completionTokens",
    "prompt_tokens": "promptTokens",
    "total_tokens": "totalTokens",
  });
});

/** @internal */
export type RunStepCompletionUsage$Outbound = {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
};

/** @internal */
export const RunStepCompletionUsage$outboundSchema: z.ZodType<
  RunStepCompletionUsage$Outbound,
  z.ZodTypeDef,
  RunStepCompletionUsage
> = z.object({
  completionTokens: z.number().int(),
  promptTokens: z.number().int(),
  totalTokens: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    completionTokens: "completion_tokens",
    promptTokens: "prompt_tokens",
    totalTokens: "total_tokens",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepCompletionUsage$ {
  /** @deprecated use `RunStepCompletionUsage$inboundSchema` instead. */
  export const inboundSchema = RunStepCompletionUsage$inboundSchema;
  /** @deprecated use `RunStepCompletionUsage$outboundSchema` instead. */
  export const outboundSchema = RunStepCompletionUsage$outboundSchema;
  /** @deprecated use `RunStepCompletionUsage$Outbound` instead. */
  export type Outbound = RunStepCompletionUsage$Outbound;
}

export function runStepCompletionUsageToJSON(
  runStepCompletionUsage: RunStepCompletionUsage,
): string {
  return JSON.stringify(
    RunStepCompletionUsage$outboundSchema.parse(runStepCompletionUsage),
  );
}

export function runStepCompletionUsageFromJSON(
  jsonString: string,
): SafeParseResult<RunStepCompletionUsage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RunStepCompletionUsage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RunStepCompletionUsage' from JSON`,
  );
}
