/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of tool call. This is always going to be `function` for this type of tool call.
 */
export const RunStepDetailsToolCallsFunctionObjectType = {
  Function: "function",
} as const;
/**
 * The type of tool call. This is always going to be `function` for this type of tool call.
 */
export type RunStepDetailsToolCallsFunctionObjectType = ClosedEnum<
  typeof RunStepDetailsToolCallsFunctionObjectType
>;

/**
 * The definition of the function that was called.
 */
export type RunStepDetailsToolCallsFunctionObjectFunction = {
  /**
   * The name of the function.
   */
  name: string;
  /**
   * The arguments passed to the function.
   */
  arguments: string;
  /**
   * The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet.
   */
  output: string | null;
};

export type RunStepDetailsToolCallsFunctionObject = {
  /**
   * The ID of the tool call object.
   */
  id: string;
  /**
   * The type of tool call. This is always going to be `function` for this type of tool call.
   */
  type: RunStepDetailsToolCallsFunctionObjectType;
  /**
   * The definition of the function that was called.
   */
  function: RunStepDetailsToolCallsFunctionObjectFunction;
};

/** @internal */
export const RunStepDetailsToolCallsFunctionObjectType$inboundSchema:
  z.ZodNativeEnum<typeof RunStepDetailsToolCallsFunctionObjectType> = z
    .nativeEnum(RunStepDetailsToolCallsFunctionObjectType);

/** @internal */
export const RunStepDetailsToolCallsFunctionObjectType$outboundSchema:
  z.ZodNativeEnum<typeof RunStepDetailsToolCallsFunctionObjectType> =
    RunStepDetailsToolCallsFunctionObjectType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsFunctionObjectType$ {
  /** @deprecated use `RunStepDetailsToolCallsFunctionObjectType$inboundSchema` instead. */
  export const inboundSchema =
    RunStepDetailsToolCallsFunctionObjectType$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsFunctionObjectType$outboundSchema` instead. */
  export const outboundSchema =
    RunStepDetailsToolCallsFunctionObjectType$outboundSchema;
}

/** @internal */
export const RunStepDetailsToolCallsFunctionObjectFunction$inboundSchema:
  z.ZodType<
    RunStepDetailsToolCallsFunctionObjectFunction,
    z.ZodTypeDef,
    unknown
  > = z.object({
    name: z.string(),
    arguments: z.string(),
    output: z.nullable(z.string()),
  });

/** @internal */
export type RunStepDetailsToolCallsFunctionObjectFunction$Outbound = {
  name: string;
  arguments: string;
  output: string | null;
};

/** @internal */
export const RunStepDetailsToolCallsFunctionObjectFunction$outboundSchema:
  z.ZodType<
    RunStepDetailsToolCallsFunctionObjectFunction$Outbound,
    z.ZodTypeDef,
    RunStepDetailsToolCallsFunctionObjectFunction
  > = z.object({
    name: z.string(),
    arguments: z.string(),
    output: z.nullable(z.string()),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsFunctionObjectFunction$ {
  /** @deprecated use `RunStepDetailsToolCallsFunctionObjectFunction$inboundSchema` instead. */
  export const inboundSchema =
    RunStepDetailsToolCallsFunctionObjectFunction$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsFunctionObjectFunction$outboundSchema` instead. */
  export const outboundSchema =
    RunStepDetailsToolCallsFunctionObjectFunction$outboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsFunctionObjectFunction$Outbound` instead. */
  export type Outbound = RunStepDetailsToolCallsFunctionObjectFunction$Outbound;
}

/** @internal */
export const RunStepDetailsToolCallsFunctionObject$inboundSchema: z.ZodType<
  RunStepDetailsToolCallsFunctionObject,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: RunStepDetailsToolCallsFunctionObjectType$inboundSchema,
  function: z.lazy(() =>
    RunStepDetailsToolCallsFunctionObjectFunction$inboundSchema
  ),
});

/** @internal */
export type RunStepDetailsToolCallsFunctionObject$Outbound = {
  id: string;
  type: string;
  function: RunStepDetailsToolCallsFunctionObjectFunction$Outbound;
};

/** @internal */
export const RunStepDetailsToolCallsFunctionObject$outboundSchema: z.ZodType<
  RunStepDetailsToolCallsFunctionObject$Outbound,
  z.ZodTypeDef,
  RunStepDetailsToolCallsFunctionObject
> = z.object({
  id: z.string(),
  type: RunStepDetailsToolCallsFunctionObjectType$outboundSchema,
  function: z.lazy(() =>
    RunStepDetailsToolCallsFunctionObjectFunction$outboundSchema
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsFunctionObject$ {
  /** @deprecated use `RunStepDetailsToolCallsFunctionObject$inboundSchema` instead. */
  export const inboundSchema =
    RunStepDetailsToolCallsFunctionObject$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsFunctionObject$outboundSchema` instead. */
  export const outboundSchema =
    RunStepDetailsToolCallsFunctionObject$outboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsFunctionObject$Outbound` instead. */
  export type Outbound = RunStepDetailsToolCallsFunctionObject$Outbound;
}
