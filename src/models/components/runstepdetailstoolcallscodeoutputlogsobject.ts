/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Always `logs`.
 */
export const RunStepDetailsToolCallsCodeOutputLogsObjectType = {
  Logs: "logs",
} as const;
/**
 * Always `logs`.
 */
export type RunStepDetailsToolCallsCodeOutputLogsObjectType = ClosedEnum<
  typeof RunStepDetailsToolCallsCodeOutputLogsObjectType
>;

/**
 * Text output from the Code Interpreter tool call as part of a run step.
 */
export type RunStepDetailsToolCallsCodeOutputLogsObject = {
  /**
   * Always `logs`.
   */
  type: RunStepDetailsToolCallsCodeOutputLogsObjectType;
  /**
   * The text output from the Code Interpreter tool call.
   */
  logs: string;
};

/** @internal */
export const RunStepDetailsToolCallsCodeOutputLogsObjectType$inboundSchema:
  z.ZodNativeEnum<typeof RunStepDetailsToolCallsCodeOutputLogsObjectType> = z
    .nativeEnum(RunStepDetailsToolCallsCodeOutputLogsObjectType);

/** @internal */
export const RunStepDetailsToolCallsCodeOutputLogsObjectType$outboundSchema:
  z.ZodNativeEnum<typeof RunStepDetailsToolCallsCodeOutputLogsObjectType> =
    RunStepDetailsToolCallsCodeOutputLogsObjectType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsCodeOutputLogsObjectType$ {
  /** @deprecated use `RunStepDetailsToolCallsCodeOutputLogsObjectType$inboundSchema` instead. */
  export const inboundSchema =
    RunStepDetailsToolCallsCodeOutputLogsObjectType$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsCodeOutputLogsObjectType$outboundSchema` instead. */
  export const outboundSchema =
    RunStepDetailsToolCallsCodeOutputLogsObjectType$outboundSchema;
}

/** @internal */
export const RunStepDetailsToolCallsCodeOutputLogsObject$inboundSchema:
  z.ZodType<
    RunStepDetailsToolCallsCodeOutputLogsObject,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: RunStepDetailsToolCallsCodeOutputLogsObjectType$inboundSchema,
    logs: z.string(),
  });

/** @internal */
export type RunStepDetailsToolCallsCodeOutputLogsObject$Outbound = {
  type: string;
  logs: string;
};

/** @internal */
export const RunStepDetailsToolCallsCodeOutputLogsObject$outboundSchema:
  z.ZodType<
    RunStepDetailsToolCallsCodeOutputLogsObject$Outbound,
    z.ZodTypeDef,
    RunStepDetailsToolCallsCodeOutputLogsObject
  > = z.object({
    type: RunStepDetailsToolCallsCodeOutputLogsObjectType$outboundSchema,
    logs: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsCodeOutputLogsObject$ {
  /** @deprecated use `RunStepDetailsToolCallsCodeOutputLogsObject$inboundSchema` instead. */
  export const inboundSchema =
    RunStepDetailsToolCallsCodeOutputLogsObject$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsCodeOutputLogsObject$outboundSchema` instead. */
  export const outboundSchema =
    RunStepDetailsToolCallsCodeOutputLogsObject$outboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsCodeOutputLogsObject$Outbound` instead. */
  export type Outbound = RunStepDetailsToolCallsCodeOutputLogsObject$Outbound;
}
