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
  RunStepDetailsToolCallsCodeOutputImageObject,
  RunStepDetailsToolCallsCodeOutputImageObject$inboundSchema,
  RunStepDetailsToolCallsCodeOutputImageObject$Outbound,
  RunStepDetailsToolCallsCodeOutputImageObject$outboundSchema,
} from "./runstepdetailstoolcallscodeoutputimageobject.js";
import {
  RunStepDetailsToolCallsCodeOutputLogsObject,
  RunStepDetailsToolCallsCodeOutputLogsObject$inboundSchema,
  RunStepDetailsToolCallsCodeOutputLogsObject$Outbound,
  RunStepDetailsToolCallsCodeOutputLogsObject$outboundSchema,
} from "./runstepdetailstoolcallscodeoutputlogsobject.js";

/**
 * The type of tool call. This is always going to be `code_interpreter` for this type of tool call.
 */
export const RunStepDetailsToolCallsCodeObjectType = {
  CodeInterpreter: "code_interpreter",
} as const;
/**
 * The type of tool call. This is always going to be `code_interpreter` for this type of tool call.
 */
export type RunStepDetailsToolCallsCodeObjectType = ClosedEnum<
  typeof RunStepDetailsToolCallsCodeObjectType
>;

export type Outputs =
  | RunStepDetailsToolCallsCodeOutputLogsObject
  | RunStepDetailsToolCallsCodeOutputImageObject;

/**
 * The Code Interpreter tool call definition.
 */
export type CodeInterpreter = {
  /**
   * The input to the Code Interpreter tool call.
   */
  input: string;
  /**
   * The outputs from the Code Interpreter tool call. Code Interpreter can output one or more items, including text (`logs`) or images (`image`). Each of these are represented by a different object type.
   */
  outputs: Array<
    | RunStepDetailsToolCallsCodeOutputLogsObject
    | RunStepDetailsToolCallsCodeOutputImageObject
  >;
};

/**
 * Details of the Code Interpreter tool call the run step was involved in.
 */
export type RunStepDetailsToolCallsCodeObject = {
  /**
   * The ID of the tool call.
   */
  id: string;
  /**
   * The type of tool call. This is always going to be `code_interpreter` for this type of tool call.
   */
  type: RunStepDetailsToolCallsCodeObjectType;
  /**
   * The Code Interpreter tool call definition.
   */
  codeInterpreter: CodeInterpreter;
};

/** @internal */
export const RunStepDetailsToolCallsCodeObjectType$inboundSchema:
  z.ZodNativeEnum<typeof RunStepDetailsToolCallsCodeObjectType> = z.nativeEnum(
    RunStepDetailsToolCallsCodeObjectType,
  );

/** @internal */
export const RunStepDetailsToolCallsCodeObjectType$outboundSchema:
  z.ZodNativeEnum<typeof RunStepDetailsToolCallsCodeObjectType> =
    RunStepDetailsToolCallsCodeObjectType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsCodeObjectType$ {
  /** @deprecated use `RunStepDetailsToolCallsCodeObjectType$inboundSchema` instead. */
  export const inboundSchema =
    RunStepDetailsToolCallsCodeObjectType$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsCodeObjectType$outboundSchema` instead. */
  export const outboundSchema =
    RunStepDetailsToolCallsCodeObjectType$outboundSchema;
}

/** @internal */
export const Outputs$inboundSchema: z.ZodType<Outputs, z.ZodTypeDef, unknown> =
  z.union([
    RunStepDetailsToolCallsCodeOutputLogsObject$inboundSchema,
    RunStepDetailsToolCallsCodeOutputImageObject$inboundSchema,
  ]);

/** @internal */
export type Outputs$Outbound =
  | RunStepDetailsToolCallsCodeOutputLogsObject$Outbound
  | RunStepDetailsToolCallsCodeOutputImageObject$Outbound;

/** @internal */
export const Outputs$outboundSchema: z.ZodType<
  Outputs$Outbound,
  z.ZodTypeDef,
  Outputs
> = z.union([
  RunStepDetailsToolCallsCodeOutputLogsObject$outboundSchema,
  RunStepDetailsToolCallsCodeOutputImageObject$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Outputs$ {
  /** @deprecated use `Outputs$inboundSchema` instead. */
  export const inboundSchema = Outputs$inboundSchema;
  /** @deprecated use `Outputs$outboundSchema` instead. */
  export const outboundSchema = Outputs$outboundSchema;
  /** @deprecated use `Outputs$Outbound` instead. */
  export type Outbound = Outputs$Outbound;
}

export function outputsToJSON(outputs: Outputs): string {
  return JSON.stringify(Outputs$outboundSchema.parse(outputs));
}

export function outputsFromJSON(
  jsonString: string,
): SafeParseResult<Outputs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Outputs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Outputs' from JSON`,
  );
}

/** @internal */
export const CodeInterpreter$inboundSchema: z.ZodType<
  CodeInterpreter,
  z.ZodTypeDef,
  unknown
> = z.object({
  input: z.string(),
  outputs: z.array(
    z.union([
      RunStepDetailsToolCallsCodeOutputLogsObject$inboundSchema,
      RunStepDetailsToolCallsCodeOutputImageObject$inboundSchema,
    ]),
  ),
});

/** @internal */
export type CodeInterpreter$Outbound = {
  input: string;
  outputs: Array<
    | RunStepDetailsToolCallsCodeOutputLogsObject$Outbound
    | RunStepDetailsToolCallsCodeOutputImageObject$Outbound
  >;
};

/** @internal */
export const CodeInterpreter$outboundSchema: z.ZodType<
  CodeInterpreter$Outbound,
  z.ZodTypeDef,
  CodeInterpreter
> = z.object({
  input: z.string(),
  outputs: z.array(
    z.union([
      RunStepDetailsToolCallsCodeOutputLogsObject$outboundSchema,
      RunStepDetailsToolCallsCodeOutputImageObject$outboundSchema,
    ]),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CodeInterpreter$ {
  /** @deprecated use `CodeInterpreter$inboundSchema` instead. */
  export const inboundSchema = CodeInterpreter$inboundSchema;
  /** @deprecated use `CodeInterpreter$outboundSchema` instead. */
  export const outboundSchema = CodeInterpreter$outboundSchema;
  /** @deprecated use `CodeInterpreter$Outbound` instead. */
  export type Outbound = CodeInterpreter$Outbound;
}

export function codeInterpreterToJSON(
  codeInterpreter: CodeInterpreter,
): string {
  return JSON.stringify(CodeInterpreter$outboundSchema.parse(codeInterpreter));
}

export function codeInterpreterFromJSON(
  jsonString: string,
): SafeParseResult<CodeInterpreter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CodeInterpreter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CodeInterpreter' from JSON`,
  );
}

/** @internal */
export const RunStepDetailsToolCallsCodeObject$inboundSchema: z.ZodType<
  RunStepDetailsToolCallsCodeObject,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: RunStepDetailsToolCallsCodeObjectType$inboundSchema,
  code_interpreter: z.lazy(() => CodeInterpreter$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "code_interpreter": "codeInterpreter",
  });
});

/** @internal */
export type RunStepDetailsToolCallsCodeObject$Outbound = {
  id: string;
  type: string;
  code_interpreter: CodeInterpreter$Outbound;
};

/** @internal */
export const RunStepDetailsToolCallsCodeObject$outboundSchema: z.ZodType<
  RunStepDetailsToolCallsCodeObject$Outbound,
  z.ZodTypeDef,
  RunStepDetailsToolCallsCodeObject
> = z.object({
  id: z.string(),
  type: RunStepDetailsToolCallsCodeObjectType$outboundSchema,
  codeInterpreter: z.lazy(() => CodeInterpreter$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    codeInterpreter: "code_interpreter",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunStepDetailsToolCallsCodeObject$ {
  /** @deprecated use `RunStepDetailsToolCallsCodeObject$inboundSchema` instead. */
  export const inboundSchema = RunStepDetailsToolCallsCodeObject$inboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsCodeObject$outboundSchema` instead. */
  export const outboundSchema =
    RunStepDetailsToolCallsCodeObject$outboundSchema;
  /** @deprecated use `RunStepDetailsToolCallsCodeObject$Outbound` instead. */
  export type Outbound = RunStepDetailsToolCallsCodeObject$Outbound;
}

export function runStepDetailsToolCallsCodeObjectToJSON(
  runStepDetailsToolCallsCodeObject: RunStepDetailsToolCallsCodeObject,
): string {
  return JSON.stringify(
    RunStepDetailsToolCallsCodeObject$outboundSchema.parse(
      runStepDetailsToolCallsCodeObject,
    ),
  );
}

export function runStepDetailsToolCallsCodeObjectFromJSON(
  jsonString: string,
): SafeParseResult<RunStepDetailsToolCallsCodeObject, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RunStepDetailsToolCallsCodeObject$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RunStepDetailsToolCallsCodeObject' from JSON`,
  );
}
