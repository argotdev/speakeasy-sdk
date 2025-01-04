/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetRunStepQueryParamInclude = {
  StepDetailsToolCallsWildcardFileSearchResultsWildcardContent:
    "step_details.tool_calls[*].file_search.results[*].content",
} as const;
export type GetRunStepQueryParamInclude = ClosedEnum<
  typeof GetRunStepQueryParamInclude
>;

export type GetRunStepRequest = {
  /**
   * The ID of the thread to which the run and run step belongs.
   */
  threadId: string;
  /**
   * The ID of the run to which the run step belongs.
   */
  runId: string;
  /**
   * The ID of the run step to retrieve.
   */
  stepId: string;
  /**
   * A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.
   *
   * @remarks
   *
   * See the [file search tool documentation](/docs/assistants/tools/file-search/customizing-file-search-settings) for more information.
   */
  include?: Array<GetRunStepQueryParamInclude> | undefined;
};

/** @internal */
export const GetRunStepQueryParamInclude$inboundSchema: z.ZodNativeEnum<
  typeof GetRunStepQueryParamInclude
> = z.nativeEnum(GetRunStepQueryParamInclude);

/** @internal */
export const GetRunStepQueryParamInclude$outboundSchema: z.ZodNativeEnum<
  typeof GetRunStepQueryParamInclude
> = GetRunStepQueryParamInclude$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRunStepQueryParamInclude$ {
  /** @deprecated use `GetRunStepQueryParamInclude$inboundSchema` instead. */
  export const inboundSchema = GetRunStepQueryParamInclude$inboundSchema;
  /** @deprecated use `GetRunStepQueryParamInclude$outboundSchema` instead. */
  export const outboundSchema = GetRunStepQueryParamInclude$outboundSchema;
}

/** @internal */
export const GetRunStepRequest$inboundSchema: z.ZodType<
  GetRunStepRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  thread_id: z.string(),
  run_id: z.string(),
  step_id: z.string(),
  "include[]": z.array(GetRunStepQueryParamInclude$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "thread_id": "threadId",
    "run_id": "runId",
    "step_id": "stepId",
    "include[]": "include",
  });
});

/** @internal */
export type GetRunStepRequest$Outbound = {
  thread_id: string;
  run_id: string;
  step_id: string;
  "include[]"?: Array<string> | undefined;
};

/** @internal */
export const GetRunStepRequest$outboundSchema: z.ZodType<
  GetRunStepRequest$Outbound,
  z.ZodTypeDef,
  GetRunStepRequest
> = z.object({
  threadId: z.string(),
  runId: z.string(),
  stepId: z.string(),
  include: z.array(GetRunStepQueryParamInclude$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    threadId: "thread_id",
    runId: "run_id",
    stepId: "step_id",
    include: "include[]",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRunStepRequest$ {
  /** @deprecated use `GetRunStepRequest$inboundSchema` instead. */
  export const inboundSchema = GetRunStepRequest$inboundSchema;
  /** @deprecated use `GetRunStepRequest$outboundSchema` instead. */
  export const outboundSchema = GetRunStepRequest$outboundSchema;
  /** @deprecated use `GetRunStepRequest$Outbound` instead. */
  export type Outbound = GetRunStepRequest$Outbound;
}

export function getRunStepRequestToJSON(
  getRunStepRequest: GetRunStepRequest,
): string {
  return JSON.stringify(
    GetRunStepRequest$outboundSchema.parse(getRunStepRequest),
  );
}

export function getRunStepRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetRunStepRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetRunStepRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetRunStepRequest' from JSON`,
  );
}
