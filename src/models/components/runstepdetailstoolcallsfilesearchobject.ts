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
  RunStepDetailsToolCallsFileSearchRankingOptionsObject,
  RunStepDetailsToolCallsFileSearchRankingOptionsObject$inboundSchema,
  RunStepDetailsToolCallsFileSearchRankingOptionsObject$Outbound,
  RunStepDetailsToolCallsFileSearchRankingOptionsObject$outboundSchema,
} from "./runstepdetailstoolcallsfilesearchrankingoptionsobject.js";
import {
  RunStepDetailsToolCallsFileSearchResultObject,
  RunStepDetailsToolCallsFileSearchResultObject$inboundSchema,
  RunStepDetailsToolCallsFileSearchResultObject$Outbound,
  RunStepDetailsToolCallsFileSearchResultObject$outboundSchema,
} from "./runstepdetailstoolcallsfilesearchresultobject.js";

/**
 * The type of tool call. This is always going to be `file_search` for this type of tool call.
 */
export const RunStepDetailsToolCallsFileSearchObjectType = {
  FileSearch: "file_search",
} as const;
/**
 * The type of tool call. This is always going to be `file_search` for this type of tool call.
 */
export type RunStepDetailsToolCallsFileSearchObjectType = ClosedEnum<
  typeof RunStepDetailsToolCallsFileSearchObjectType
>;

/**
 * For now, this is always going to be an empty object.
 */
export type RunStepDetailsToolCallsFileSearchObjectFileSearch = {
  /**
   * The ranking options for the file search.
   */
  rankingOptions?:
    | RunStepDetailsToolCallsFileSearchRankingOptionsObject
    | undefined;
  /**
   * The results of the file search.
   */
  results?: Array<RunStepDetailsToolCallsFileSearchResultObject> | undefined;
};

export type RunStepDetailsToolCallsFileSearchObject = {
  /**
   * The ID of the tool call object.
   */
  id: string;
  /**
   * The type of tool call. This is always going to be `file_search` for this type of tool call.
   */
  type: RunStepDetailsToolCallsFileSearchObjectType;
  /**
   * For now, this is always going to be an empty object.
   */
  fileSearch: RunStepDetailsToolCallsFileSearchObjectFileSearch;
};

/** @internal */
export const RunStepDetailsToolCallsFileSearchObjectType$inboundSchema:
  z.ZodNativeEnum<typeof RunStepDetailsToolCallsFileSearchObjectType> = z
    .nativeEnum(RunStepDetailsToolCallsFileSearchObjectType);

/** @internal */
export const RunStepDetailsToolCallsFileSearchObjectType$outboundSchema:
  z.ZodNativeEnum<typeof RunStepDetailsToolCallsFileSearchObjectType> =
    RunStepDetailsToolCallsFileSearchObjectType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsFileSearchObjectType$ {
  /** @deprecated use `RunStepDetailsToolCallsFileSearchObjectType$inboundSchema` instead. */
  export const inboundSchema =
    RunStepDetailsToolCallsFileSearchObjectType$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsFileSearchObjectType$outboundSchema` instead. */
  export const outboundSchema =
    RunStepDetailsToolCallsFileSearchObjectType$outboundSchema;
}

/** @internal */
export const RunStepDetailsToolCallsFileSearchObjectFileSearch$inboundSchema:
  z.ZodType<
    RunStepDetailsToolCallsFileSearchObjectFileSearch,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ranking_options:
      RunStepDetailsToolCallsFileSearchRankingOptionsObject$inboundSchema
        .optional(),
    results: z.array(
      RunStepDetailsToolCallsFileSearchResultObject$inboundSchema,
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "ranking_options": "rankingOptions",
    });
  });

/** @internal */
export type RunStepDetailsToolCallsFileSearchObjectFileSearch$Outbound = {
  ranking_options?:
    | RunStepDetailsToolCallsFileSearchRankingOptionsObject$Outbound
    | undefined;
  results?:
    | Array<RunStepDetailsToolCallsFileSearchResultObject$Outbound>
    | undefined;
};

/** @internal */
export const RunStepDetailsToolCallsFileSearchObjectFileSearch$outboundSchema:
  z.ZodType<
    RunStepDetailsToolCallsFileSearchObjectFileSearch$Outbound,
    z.ZodTypeDef,
    RunStepDetailsToolCallsFileSearchObjectFileSearch
  > = z.object({
    rankingOptions:
      RunStepDetailsToolCallsFileSearchRankingOptionsObject$outboundSchema
        .optional(),
    results: z.array(
      RunStepDetailsToolCallsFileSearchResultObject$outboundSchema,
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      rankingOptions: "ranking_options",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsFileSearchObjectFileSearch$ {
  /** @deprecated use `RunStepDetailsToolCallsFileSearchObjectFileSearch$inboundSchema` instead. */
  export const inboundSchema =
    RunStepDetailsToolCallsFileSearchObjectFileSearch$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsFileSearchObjectFileSearch$outboundSchema` instead. */
  export const outboundSchema =
    RunStepDetailsToolCallsFileSearchObjectFileSearch$outboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsFileSearchObjectFileSearch$Outbound` instead. */
  export type Outbound =
    RunStepDetailsToolCallsFileSearchObjectFileSearch$Outbound;
}

export function runStepDetailsToolCallsFileSearchObjectFileSearchToJSON(
  runStepDetailsToolCallsFileSearchObjectFileSearch:
    RunStepDetailsToolCallsFileSearchObjectFileSearch,
): string {
  return JSON.stringify(
    RunStepDetailsToolCallsFileSearchObjectFileSearch$outboundSchema.parse(
      runStepDetailsToolCallsFileSearchObjectFileSearch,
    ),
  );
}

export function runStepDetailsToolCallsFileSearchObjectFileSearchFromJSON(
  jsonString: string,
): SafeParseResult<
  RunStepDetailsToolCallsFileSearchObjectFileSearch,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RunStepDetailsToolCallsFileSearchObjectFileSearch$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RunStepDetailsToolCallsFileSearchObjectFileSearch' from JSON`,
  );
}

/** @internal */
export const RunStepDetailsToolCallsFileSearchObject$inboundSchema: z.ZodType<
  RunStepDetailsToolCallsFileSearchObject,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: RunStepDetailsToolCallsFileSearchObjectType$inboundSchema,
  file_search: z.lazy(() =>
    RunStepDetailsToolCallsFileSearchObjectFileSearch$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "file_search": "fileSearch",
  });
});

/** @internal */
export type RunStepDetailsToolCallsFileSearchObject$Outbound = {
  id: string;
  type: string;
  file_search: RunStepDetailsToolCallsFileSearchObjectFileSearch$Outbound;
};

/** @internal */
export const RunStepDetailsToolCallsFileSearchObject$outboundSchema: z.ZodType<
  RunStepDetailsToolCallsFileSearchObject$Outbound,
  z.ZodTypeDef,
  RunStepDetailsToolCallsFileSearchObject
> = z.object({
  id: z.string(),
  type: RunStepDetailsToolCallsFileSearchObjectType$outboundSchema,
  fileSearch: z.lazy(() =>
    RunStepDetailsToolCallsFileSearchObjectFileSearch$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    fileSearch: "file_search",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsFileSearchObject$ {
  /** @deprecated use `RunStepDetailsToolCallsFileSearchObject$inboundSchema` instead. */
  export const inboundSchema =
    RunStepDetailsToolCallsFileSearchObject$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsFileSearchObject$outboundSchema` instead. */
  export const outboundSchema =
    RunStepDetailsToolCallsFileSearchObject$outboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsFileSearchObject$Outbound` instead. */
  export type Outbound = RunStepDetailsToolCallsFileSearchObject$Outbound;
}

export function runStepDetailsToolCallsFileSearchObjectToJSON(
  runStepDetailsToolCallsFileSearchObject:
    RunStepDetailsToolCallsFileSearchObject,
): string {
  return JSON.stringify(
    RunStepDetailsToolCallsFileSearchObject$outboundSchema.parse(
      runStepDetailsToolCallsFileSearchObject,
    ),
  );
}

export function runStepDetailsToolCallsFileSearchObjectFromJSON(
  jsonString: string,
): SafeParseResult<
  RunStepDetailsToolCallsFileSearchObject,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RunStepDetailsToolCallsFileSearchObject$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RunStepDetailsToolCallsFileSearchObject' from JSON`,
  );
}
