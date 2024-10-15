/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  RunStepDetailsToolCallsCodeObject,
  RunStepDetailsToolCallsCodeObject$inboundSchema,
  RunStepDetailsToolCallsCodeObject$Outbound,
  RunStepDetailsToolCallsCodeObject$outboundSchema,
} from "./runstepdetailstoolcallscodeobject.js";
import {
  RunStepDetailsToolCallsFileSearchObject,
  RunStepDetailsToolCallsFileSearchObject$inboundSchema,
  RunStepDetailsToolCallsFileSearchObject$Outbound,
  RunStepDetailsToolCallsFileSearchObject$outboundSchema,
} from "./runstepdetailstoolcallsfilesearchobject.js";
import {
  RunStepDetailsToolCallsFunctionObject,
  RunStepDetailsToolCallsFunctionObject$inboundSchema,
  RunStepDetailsToolCallsFunctionObject$Outbound,
  RunStepDetailsToolCallsFunctionObject$outboundSchema,
} from "./runstepdetailstoolcallsfunctionobject.js";

/**
 * Always `tool_calls`.
 */
export const RunStepDetailsToolCallsObjectType = {
  ToolCalls: "tool_calls",
} as const;
/**
 * Always `tool_calls`.
 */
export type RunStepDetailsToolCallsObjectType = ClosedEnum<
  typeof RunStepDetailsToolCallsObjectType
>;

export type ToolCalls =
  | RunStepDetailsToolCallsCodeObject
  | RunStepDetailsToolCallsFileSearchObject
  | RunStepDetailsToolCallsFunctionObject;

/**
 * Details of the tool call.
 */
export type RunStepDetailsToolCallsObject = {
  /**
   * Always `tool_calls`.
   */
  type: RunStepDetailsToolCallsObjectType;
  /**
   * An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `file_search`, or `function`.
   *
   * @remarks
   */
  toolCalls: Array<
    | RunStepDetailsToolCallsCodeObject
    | RunStepDetailsToolCallsFileSearchObject
    | RunStepDetailsToolCallsFunctionObject
  >;
};

/** @internal */
export const RunStepDetailsToolCallsObjectType$inboundSchema: z.ZodNativeEnum<
  typeof RunStepDetailsToolCallsObjectType
> = z.nativeEnum(RunStepDetailsToolCallsObjectType);

/** @internal */
export const RunStepDetailsToolCallsObjectType$outboundSchema: z.ZodNativeEnum<
  typeof RunStepDetailsToolCallsObjectType
> = RunStepDetailsToolCallsObjectType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsObjectType$ {
  /** @deprecated use `RunStepDetailsToolCallsObjectType$inboundSchema` instead. */
  export const inboundSchema = RunStepDetailsToolCallsObjectType$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsObjectType$outboundSchema` instead. */
  export const outboundSchema =
    RunStepDetailsToolCallsObjectType$outboundSchema;
}

/** @internal */
export const ToolCalls$inboundSchema: z.ZodType<
  ToolCalls,
  z.ZodTypeDef,
  unknown
> = z.union([
  RunStepDetailsToolCallsCodeObject$inboundSchema,
  RunStepDetailsToolCallsFileSearchObject$inboundSchema,
  RunStepDetailsToolCallsFunctionObject$inboundSchema,
]);

/** @internal */
export type ToolCalls$Outbound =
  | RunStepDetailsToolCallsCodeObject$Outbound
  | RunStepDetailsToolCallsFileSearchObject$Outbound
  | RunStepDetailsToolCallsFunctionObject$Outbound;

/** @internal */
export const ToolCalls$outboundSchema: z.ZodType<
  ToolCalls$Outbound,
  z.ZodTypeDef,
  ToolCalls
> = z.union([
  RunStepDetailsToolCallsCodeObject$outboundSchema,
  RunStepDetailsToolCallsFileSearchObject$outboundSchema,
  RunStepDetailsToolCallsFunctionObject$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolCalls$ {
  /** @deprecated use `ToolCalls$inboundSchema` instead. */
  export const inboundSchema = ToolCalls$inboundSchema;
  /** @deprecated use `ToolCalls$outboundSchema` instead. */
  export const outboundSchema = ToolCalls$outboundSchema;
  /** @deprecated use `ToolCalls$Outbound` instead. */
  export type Outbound = ToolCalls$Outbound;
}

/** @internal */
export const RunStepDetailsToolCallsObject$inboundSchema: z.ZodType<
  RunStepDetailsToolCallsObject,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: RunStepDetailsToolCallsObjectType$inboundSchema,
  tool_calls: z.array(
    z.union([
      RunStepDetailsToolCallsCodeObject$inboundSchema,
      RunStepDetailsToolCallsFileSearchObject$inboundSchema,
      RunStepDetailsToolCallsFunctionObject$inboundSchema,
    ]),
  ),
}).transform((v) => {
  return remap$(v, {
    "tool_calls": "toolCalls",
  });
});

/** @internal */
export type RunStepDetailsToolCallsObject$Outbound = {
  type: string;
  tool_calls: Array<
    | RunStepDetailsToolCallsCodeObject$Outbound
    | RunStepDetailsToolCallsFileSearchObject$Outbound
    | RunStepDetailsToolCallsFunctionObject$Outbound
  >;
};

/** @internal */
export const RunStepDetailsToolCallsObject$outboundSchema: z.ZodType<
  RunStepDetailsToolCallsObject$Outbound,
  z.ZodTypeDef,
  RunStepDetailsToolCallsObject
> = z.object({
  type: RunStepDetailsToolCallsObjectType$outboundSchema,
  toolCalls: z.array(
    z.union([
      RunStepDetailsToolCallsCodeObject$outboundSchema,
      RunStepDetailsToolCallsFileSearchObject$outboundSchema,
      RunStepDetailsToolCallsFunctionObject$outboundSchema,
    ]),
  ),
}).transform((v) => {
  return remap$(v, {
    toolCalls: "tool_calls",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsObject$ {
  /** @deprecated use `RunStepDetailsToolCallsObject$inboundSchema` instead. */
  export const inboundSchema = RunStepDetailsToolCallsObject$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsObject$outboundSchema` instead. */
  export const outboundSchema = RunStepDetailsToolCallsObject$outboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsObject$Outbound` instead. */
  export type Outbound = RunStepDetailsToolCallsObject$Outbound;
}
