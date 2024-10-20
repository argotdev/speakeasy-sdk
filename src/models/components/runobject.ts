/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  AssistantsApiResponseFormatOption,
  AssistantsApiResponseFormatOption$inboundSchema,
  AssistantsApiResponseFormatOption$Outbound,
  AssistantsApiResponseFormatOption$outboundSchema,
} from "./assistantsapiresponseformatoption.js";
import {
  AssistantsApiToolChoiceOption,
  AssistantsApiToolChoiceOption$inboundSchema,
  AssistantsApiToolChoiceOption$Outbound,
  AssistantsApiToolChoiceOption$outboundSchema,
} from "./assistantsapitoolchoiceoption.js";
import {
  AssistantToolsCode,
  AssistantToolsCode$inboundSchema,
  AssistantToolsCode$Outbound,
  AssistantToolsCode$outboundSchema,
} from "./assistanttoolscode.js";
import {
  AssistantToolsFileSearch,
  AssistantToolsFileSearch$inboundSchema,
  AssistantToolsFileSearch$Outbound,
  AssistantToolsFileSearch$outboundSchema,
} from "./assistanttoolsfilesearch.js";
import {
  AssistantToolsFunction,
  AssistantToolsFunction$inboundSchema,
  AssistantToolsFunction$Outbound,
  AssistantToolsFunction$outboundSchema,
} from "./assistanttoolsfunction.js";
import {
  RunCompletionUsage,
  RunCompletionUsage$inboundSchema,
  RunCompletionUsage$Outbound,
  RunCompletionUsage$outboundSchema,
} from "./runcompletionusage.js";
import {
  RunToolCallObject,
  RunToolCallObject$inboundSchema,
  RunToolCallObject$Outbound,
  RunToolCallObject$outboundSchema,
} from "./runtoolcallobject.js";
import {
  TruncationObject,
  TruncationObject$inboundSchema,
  TruncationObject$Outbound,
  TruncationObject$outboundSchema,
} from "./truncationobject.js";

/**
 * The object type, which is always `thread.run`.
 */
export const RunObjectObject = {
  ThreadRun: "thread.run",
} as const;
/**
 * The object type, which is always `thread.run`.
 */
export type RunObjectObject = ClosedEnum<typeof RunObjectObject>;

/**
 * The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, `incomplete`, or `expired`.
 */
export const RunObjectStatus = {
  Queued: "queued",
  InProgress: "in_progress",
  RequiresAction: "requires_action",
  Cancelling: "cancelling",
  Cancelled: "cancelled",
  Failed: "failed",
  Completed: "completed",
  Incomplete: "incomplete",
  Expired: "expired",
} as const;
/**
 * The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, `incomplete`, or `expired`.
 */
export type RunObjectStatus = ClosedEnum<typeof RunObjectStatus>;

/**
 * For now, this is always `submit_tool_outputs`.
 */
export const RunObjectType = {
  SubmitToolOutputs: "submit_tool_outputs",
} as const;
/**
 * For now, this is always `submit_tool_outputs`.
 */
export type RunObjectType = ClosedEnum<typeof RunObjectType>;

/**
 * Details on the tool outputs needed for this run to continue.
 */
export type SubmitToolOutputs = {
  /**
   * A list of the relevant tool calls.
   */
  toolCalls: Array<RunToolCallObject>;
};

/**
 * Details on the action required to continue the run. Will be `null` if no action is required.
 */
export type RequiredAction = {
  /**
   * For now, this is always `submit_tool_outputs`.
   */
  type: RunObjectType;
  /**
   * Details on the tool outputs needed for this run to continue.
   */
  submitToolOutputs: SubmitToolOutputs;
};

/**
 * One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`.
 */
export const Code = {
  ServerError: "server_error",
  RateLimitExceeded: "rate_limit_exceeded",
  InvalidPrompt: "invalid_prompt",
} as const;
/**
 * One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`.
 */
export type Code = ClosedEnum<typeof Code>;

/**
 * The last error associated with this run. Will be `null` if there are no errors.
 */
export type LastError = {
  /**
   * One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`.
   */
  code: Code;
  /**
   * A human-readable description of the error.
   */
  message: string;
};

/**
 * The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run.
 */
export const RunObjectReason = {
  MaxCompletionTokens: "max_completion_tokens",
  MaxPromptTokens: "max_prompt_tokens",
} as const;
/**
 * The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run.
 */
export type RunObjectReason = ClosedEnum<typeof RunObjectReason>;

/**
 * Details on why the run is incomplete. Will be `null` if the run is not incomplete.
 */
export type RunObjectIncompleteDetails = {
  /**
   * The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run.
   */
  reason?: RunObjectReason | undefined;
};

export type RunObjectTools =
  | AssistantToolsCode
  | AssistantToolsFileSearch
  | AssistantToolsFunction;

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
 *
 * @remarks
 */
export type RunObjectMetadata = {};

/**
 * Represents an execution run on a [thread](/docs/api-reference/threads).
 */
export type RunObject = {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;
  /**
   * The object type, which is always `thread.run`.
   */
  object: RunObjectObject;
  /**
   * The Unix timestamp (in seconds) for when the run was created.
   */
  createdAt: number;
  /**
   * The ID of the [thread](/docs/api-reference/threads) that was executed on as a part of this run.
   */
  threadId: string;
  /**
   * The ID of the [assistant](/docs/api-reference/assistants) used for execution of this run.
   */
  assistantId: string;
  /**
   * The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, `incomplete`, or `expired`.
   */
  status: RunObjectStatus;
  /**
   * Details on the action required to continue the run. Will be `null` if no action is required.
   */
  requiredAction: RequiredAction | null;
  /**
   * The last error associated with this run. Will be `null` if there are no errors.
   */
  lastError: LastError | null;
  /**
   * The Unix timestamp (in seconds) for when the run will expire.
   */
  expiresAt: number | null;
  /**
   * The Unix timestamp (in seconds) for when the run was started.
   */
  startedAt: number | null;
  /**
   * The Unix timestamp (in seconds) for when the run was cancelled.
   */
  cancelledAt: number | null;
  /**
   * The Unix timestamp (in seconds) for when the run failed.
   */
  failedAt: number | null;
  /**
   * The Unix timestamp (in seconds) for when the run was completed.
   */
  completedAt: number | null;
  /**
   * Details on why the run is incomplete. Will be `null` if the run is not incomplete.
   */
  incompleteDetails: RunObjectIncompleteDetails | null;
  /**
   * The model that the [assistant](/docs/api-reference/assistants) used for this run.
   */
  model: string;
  /**
   * The instructions that the [assistant](/docs/api-reference/assistants) used for this run.
   */
  instructions: string;
  /**
   * The list of tools that the [assistant](/docs/api-reference/assistants) used for this run.
   */
  tools: Array<
    AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction
  >;
  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   *
   * @remarks
   */
  metadata: RunObjectMetadata | null;
  /**
   * Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.).
   */
  usage: RunCompletionUsage | null;
  /**
   * The sampling temperature used for this run. If not set, defaults to 1.
   */
  temperature?: number | null | undefined;
  /**
   * The nucleus sampling value used for this run. If not set, defaults to 1.
   */
  topP?: number | null | undefined;
  /**
   * The maximum number of prompt tokens specified to have been used over the course of the run.
   *
   * @remarks
   */
  maxPromptTokens: number | null;
  /**
   * The maximum number of completion tokens specified to have been used over the course of the run.
   *
   * @remarks
   */
  maxCompletionTokens: number | null;
  /**
   * Controls for how a thread will be truncated prior to the run. Use this to control the intial context window of the run.
   */
  truncationStrategy: TruncationObject;
  /**
   * Controls which (if any) tool is called by the model.
   *
   * @remarks
   * `none` means the model will not call any tools and instead generates a message.
   * `auto` is the default value and means the model can pick between generating a message or calling one or more tools.
   * `required` means the model must call one or more tools before responding to the user.
   * Specifying a particular tool like `{"type": "file_search"}` or `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.
   */
  toolChoice: AssistantsApiToolChoiceOption;
  /**
   * Whether to enable [parallel function calling](/docs/guides/function-calling/parallel-function-calling) during tool use.
   */
  parallelToolCalls?: boolean | undefined;
  /**
   * Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models/gpt-4o), [GPT-4 Turbo](/docs/models/gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.
   *
   * @remarks
   *
   * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).
   *
   * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.
   *
   * **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
   */
  responseFormat: AssistantsApiResponseFormatOption;
};

/** @internal */
export const RunObjectObject$inboundSchema: z.ZodNativeEnum<
  typeof RunObjectObject
> = z.nativeEnum(RunObjectObject);

/** @internal */
export const RunObjectObject$outboundSchema: z.ZodNativeEnum<
  typeof RunObjectObject
> = RunObjectObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunObjectObject$ {
  /** @deprecated use `RunObjectObject$inboundSchema` instead. */
  export const inboundSchema = RunObjectObject$inboundSchema;
  /** @deprecated use `RunObjectObject$outboundSchema` instead. */
  export const outboundSchema = RunObjectObject$outboundSchema;
}

/** @internal */
export const RunObjectStatus$inboundSchema: z.ZodNativeEnum<
  typeof RunObjectStatus
> = z.nativeEnum(RunObjectStatus);

/** @internal */
export const RunObjectStatus$outboundSchema: z.ZodNativeEnum<
  typeof RunObjectStatus
> = RunObjectStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunObjectStatus$ {
  /** @deprecated use `RunObjectStatus$inboundSchema` instead. */
  export const inboundSchema = RunObjectStatus$inboundSchema;
  /** @deprecated use `RunObjectStatus$outboundSchema` instead. */
  export const outboundSchema = RunObjectStatus$outboundSchema;
}

/** @internal */
export const RunObjectType$inboundSchema: z.ZodNativeEnum<
  typeof RunObjectType
> = z.nativeEnum(RunObjectType);

/** @internal */
export const RunObjectType$outboundSchema: z.ZodNativeEnum<
  typeof RunObjectType
> = RunObjectType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunObjectType$ {
  /** @deprecated use `RunObjectType$inboundSchema` instead. */
  export const inboundSchema = RunObjectType$inboundSchema;
  /** @deprecated use `RunObjectType$outboundSchema` instead. */
  export const outboundSchema = RunObjectType$outboundSchema;
}

/** @internal */
export const SubmitToolOutputs$inboundSchema: z.ZodType<
  SubmitToolOutputs,
  z.ZodTypeDef,
  unknown
> = z.object({
  tool_calls: z.array(RunToolCallObject$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "tool_calls": "toolCalls",
  });
});

/** @internal */
export type SubmitToolOutputs$Outbound = {
  tool_calls: Array<RunToolCallObject$Outbound>;
};

/** @internal */
export const SubmitToolOutputs$outboundSchema: z.ZodType<
  SubmitToolOutputs$Outbound,
  z.ZodTypeDef,
  SubmitToolOutputs
> = z.object({
  toolCalls: z.array(RunToolCallObject$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    toolCalls: "tool_calls",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubmitToolOutputs$ {
  /** @deprecated use `SubmitToolOutputs$inboundSchema` instead. */
  export const inboundSchema = SubmitToolOutputs$inboundSchema;
  /** @deprecated use `SubmitToolOutputs$outboundSchema` instead. */
  export const outboundSchema = SubmitToolOutputs$outboundSchema;
  /** @deprecated use `SubmitToolOutputs$Outbound` instead. */
  export type Outbound = SubmitToolOutputs$Outbound;
}

/** @internal */
export const RequiredAction$inboundSchema: z.ZodType<
  RequiredAction,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: RunObjectType$inboundSchema,
  submit_tool_outputs: z.lazy(() => SubmitToolOutputs$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "submit_tool_outputs": "submitToolOutputs",
  });
});

/** @internal */
export type RequiredAction$Outbound = {
  type: string;
  submit_tool_outputs: SubmitToolOutputs$Outbound;
};

/** @internal */
export const RequiredAction$outboundSchema: z.ZodType<
  RequiredAction$Outbound,
  z.ZodTypeDef,
  RequiredAction
> = z.object({
  type: RunObjectType$outboundSchema,
  submitToolOutputs: z.lazy(() => SubmitToolOutputs$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    submitToolOutputs: "submit_tool_outputs",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequiredAction$ {
  /** @deprecated use `RequiredAction$inboundSchema` instead. */
  export const inboundSchema = RequiredAction$inboundSchema;
  /** @deprecated use `RequiredAction$outboundSchema` instead. */
  export const outboundSchema = RequiredAction$outboundSchema;
  /** @deprecated use `RequiredAction$Outbound` instead. */
  export type Outbound = RequiredAction$Outbound;
}

/** @internal */
export const Code$inboundSchema: z.ZodNativeEnum<typeof Code> = z.nativeEnum(
  Code,
);

/** @internal */
export const Code$outboundSchema: z.ZodNativeEnum<typeof Code> =
  Code$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Code$ {
  /** @deprecated use `Code$inboundSchema` instead. */
  export const inboundSchema = Code$inboundSchema;
  /** @deprecated use `Code$outboundSchema` instead. */
  export const outboundSchema = Code$outboundSchema;
}

/** @internal */
export const LastError$inboundSchema: z.ZodType<
  LastError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: Code$inboundSchema,
  message: z.string(),
});

/** @internal */
export type LastError$Outbound = {
  code: string;
  message: string;
};

/** @internal */
export const LastError$outboundSchema: z.ZodType<
  LastError$Outbound,
  z.ZodTypeDef,
  LastError
> = z.object({
  code: Code$outboundSchema,
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LastError$ {
  /** @deprecated use `LastError$inboundSchema` instead. */
  export const inboundSchema = LastError$inboundSchema;
  /** @deprecated use `LastError$outboundSchema` instead. */
  export const outboundSchema = LastError$outboundSchema;
  /** @deprecated use `LastError$Outbound` instead. */
  export type Outbound = LastError$Outbound;
}

/** @internal */
export const RunObjectReason$inboundSchema: z.ZodNativeEnum<
  typeof RunObjectReason
> = z.nativeEnum(RunObjectReason);

/** @internal */
export const RunObjectReason$outboundSchema: z.ZodNativeEnum<
  typeof RunObjectReason
> = RunObjectReason$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunObjectReason$ {
  /** @deprecated use `RunObjectReason$inboundSchema` instead. */
  export const inboundSchema = RunObjectReason$inboundSchema;
  /** @deprecated use `RunObjectReason$outboundSchema` instead. */
  export const outboundSchema = RunObjectReason$outboundSchema;
}

/** @internal */
export const RunObjectIncompleteDetails$inboundSchema: z.ZodType<
  RunObjectIncompleteDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  reason: RunObjectReason$inboundSchema.optional(),
});

/** @internal */
export type RunObjectIncompleteDetails$Outbound = {
  reason?: string | undefined;
};

/** @internal */
export const RunObjectIncompleteDetails$outboundSchema: z.ZodType<
  RunObjectIncompleteDetails$Outbound,
  z.ZodTypeDef,
  RunObjectIncompleteDetails
> = z.object({
  reason: RunObjectReason$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunObjectIncompleteDetails$ {
  /** @deprecated use `RunObjectIncompleteDetails$inboundSchema` instead. */
  export const inboundSchema = RunObjectIncompleteDetails$inboundSchema;
  /** @deprecated use `RunObjectIncompleteDetails$outboundSchema` instead. */
  export const outboundSchema = RunObjectIncompleteDetails$outboundSchema;
  /** @deprecated use `RunObjectIncompleteDetails$Outbound` instead. */
  export type Outbound = RunObjectIncompleteDetails$Outbound;
}

/** @internal */
export const RunObjectTools$inboundSchema: z.ZodType<
  RunObjectTools,
  z.ZodTypeDef,
  unknown
> = z.union([
  AssistantToolsCode$inboundSchema,
  AssistantToolsFileSearch$inboundSchema,
  AssistantToolsFunction$inboundSchema,
]);

/** @internal */
export type RunObjectTools$Outbound =
  | AssistantToolsCode$Outbound
  | AssistantToolsFileSearch$Outbound
  | AssistantToolsFunction$Outbound;

/** @internal */
export const RunObjectTools$outboundSchema: z.ZodType<
  RunObjectTools$Outbound,
  z.ZodTypeDef,
  RunObjectTools
> = z.union([
  AssistantToolsCode$outboundSchema,
  AssistantToolsFileSearch$outboundSchema,
  AssistantToolsFunction$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunObjectTools$ {
  /** @deprecated use `RunObjectTools$inboundSchema` instead. */
  export const inboundSchema = RunObjectTools$inboundSchema;
  /** @deprecated use `RunObjectTools$outboundSchema` instead. */
  export const outboundSchema = RunObjectTools$outboundSchema;
  /** @deprecated use `RunObjectTools$Outbound` instead. */
  export type Outbound = RunObjectTools$Outbound;
}

/** @internal */
export const RunObjectMetadata$inboundSchema: z.ZodType<
  RunObjectMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type RunObjectMetadata$Outbound = {};

/** @internal */
export const RunObjectMetadata$outboundSchema: z.ZodType<
  RunObjectMetadata$Outbound,
  z.ZodTypeDef,
  RunObjectMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunObjectMetadata$ {
  /** @deprecated use `RunObjectMetadata$inboundSchema` instead. */
  export const inboundSchema = RunObjectMetadata$inboundSchema;
  /** @deprecated use `RunObjectMetadata$outboundSchema` instead. */
  export const outboundSchema = RunObjectMetadata$outboundSchema;
  /** @deprecated use `RunObjectMetadata$Outbound` instead. */
  export type Outbound = RunObjectMetadata$Outbound;
}

/** @internal */
export const RunObject$inboundSchema: z.ZodType<
  RunObject,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  object: RunObjectObject$inboundSchema,
  created_at: z.number().int(),
  thread_id: z.string(),
  assistant_id: z.string(),
  status: RunObjectStatus$inboundSchema,
  required_action: z.nullable(z.lazy(() => RequiredAction$inboundSchema)),
  last_error: z.nullable(z.lazy(() => LastError$inboundSchema)),
  expires_at: z.nullable(z.number().int()),
  started_at: z.nullable(z.number().int()),
  cancelled_at: z.nullable(z.number().int()),
  failed_at: z.nullable(z.number().int()),
  completed_at: z.nullable(z.number().int()),
  incomplete_details: z.nullable(
    z.lazy(() => RunObjectIncompleteDetails$inboundSchema),
  ),
  model: z.string(),
  instructions: z.string(),
  tools: z.array(
    z.union([
      AssistantToolsCode$inboundSchema,
      AssistantToolsFileSearch$inboundSchema,
      AssistantToolsFunction$inboundSchema,
    ]),
  ),
  metadata: z.nullable(z.lazy(() => RunObjectMetadata$inboundSchema)),
  usage: z.nullable(RunCompletionUsage$inboundSchema),
  temperature: z.nullable(z.number()).optional(),
  top_p: z.nullable(z.number()).optional(),
  max_prompt_tokens: z.nullable(z.number().int()),
  max_completion_tokens: z.nullable(z.number().int()),
  truncation_strategy: TruncationObject$inboundSchema,
  tool_choice: AssistantsApiToolChoiceOption$inboundSchema,
  parallel_tool_calls: z.boolean().default(false),
  response_format: AssistantsApiResponseFormatOption$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "thread_id": "threadId",
    "assistant_id": "assistantId",
    "required_action": "requiredAction",
    "last_error": "lastError",
    "expires_at": "expiresAt",
    "started_at": "startedAt",
    "cancelled_at": "cancelledAt",
    "failed_at": "failedAt",
    "completed_at": "completedAt",
    "incomplete_details": "incompleteDetails",
    "top_p": "topP",
    "max_prompt_tokens": "maxPromptTokens",
    "max_completion_tokens": "maxCompletionTokens",
    "truncation_strategy": "truncationStrategy",
    "tool_choice": "toolChoice",
    "parallel_tool_calls": "parallelToolCalls",
    "response_format": "responseFormat",
  });
});

/** @internal */
export type RunObject$Outbound = {
  id: string;
  object: string;
  created_at: number;
  thread_id: string;
  assistant_id: string;
  status: string;
  required_action: RequiredAction$Outbound | null;
  last_error: LastError$Outbound | null;
  expires_at: number | null;
  started_at: number | null;
  cancelled_at: number | null;
  failed_at: number | null;
  completed_at: number | null;
  incomplete_details: RunObjectIncompleteDetails$Outbound | null;
  model: string;
  instructions: string;
  tools: Array<
    | AssistantToolsCode$Outbound
    | AssistantToolsFileSearch$Outbound
    | AssistantToolsFunction$Outbound
  >;
  metadata: RunObjectMetadata$Outbound | null;
  usage: RunCompletionUsage$Outbound | null;
  temperature?: number | null | undefined;
  top_p?: number | null | undefined;
  max_prompt_tokens: number | null;
  max_completion_tokens: number | null;
  truncation_strategy: TruncationObject$Outbound;
  tool_choice: AssistantsApiToolChoiceOption$Outbound;
  parallel_tool_calls: boolean;
  response_format: AssistantsApiResponseFormatOption$Outbound;
};

/** @internal */
export const RunObject$outboundSchema: z.ZodType<
  RunObject$Outbound,
  z.ZodTypeDef,
  RunObject
> = z.object({
  id: z.string(),
  object: RunObjectObject$outboundSchema,
  createdAt: z.number().int(),
  threadId: z.string(),
  assistantId: z.string(),
  status: RunObjectStatus$outboundSchema,
  requiredAction: z.nullable(z.lazy(() => RequiredAction$outboundSchema)),
  lastError: z.nullable(z.lazy(() => LastError$outboundSchema)),
  expiresAt: z.nullable(z.number().int()),
  startedAt: z.nullable(z.number().int()),
  cancelledAt: z.nullable(z.number().int()),
  failedAt: z.nullable(z.number().int()),
  completedAt: z.nullable(z.number().int()),
  incompleteDetails: z.nullable(
    z.lazy(() => RunObjectIncompleteDetails$outboundSchema),
  ),
  model: z.string(),
  instructions: z.string(),
  tools: z.array(
    z.union([
      AssistantToolsCode$outboundSchema,
      AssistantToolsFileSearch$outboundSchema,
      AssistantToolsFunction$outboundSchema,
    ]),
  ),
  metadata: z.nullable(z.lazy(() => RunObjectMetadata$outboundSchema)),
  usage: z.nullable(RunCompletionUsage$outboundSchema),
  temperature: z.nullable(z.number()).optional(),
  topP: z.nullable(z.number()).optional(),
  maxPromptTokens: z.nullable(z.number().int()),
  maxCompletionTokens: z.nullable(z.number().int()),
  truncationStrategy: TruncationObject$outboundSchema,
  toolChoice: AssistantsApiToolChoiceOption$outboundSchema,
  parallelToolCalls: z.boolean().default(true),
  responseFormat: AssistantsApiResponseFormatOption$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    threadId: "thread_id",
    assistantId: "assistant_id",
    requiredAction: "required_action",
    lastError: "last_error",
    expiresAt: "expires_at",
    startedAt: "started_at",
    cancelledAt: "cancelled_at",
    failedAt: "failed_at",
    completedAt: "completed_at",
    incompleteDetails: "incomplete_details",
    topP: "top_p",
    maxPromptTokens: "max_prompt_tokens",
    maxCompletionTokens: "max_completion_tokens",
    truncationStrategy: "truncation_strategy",
    toolChoice: "tool_choice",
    parallelToolCalls: "parallel_tool_calls",
    responseFormat: "response_format",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunObject$ {
  /** @deprecated use `RunObject$inboundSchema` instead. */
  export const inboundSchema = RunObject$inboundSchema;
  /** @deprecated use `RunObject$outboundSchema` instead. */
  export const outboundSchema = RunObject$outboundSchema;
  /** @deprecated use `RunObject$Outbound` instead. */
  export type Outbound = RunObject$Outbound;
}
