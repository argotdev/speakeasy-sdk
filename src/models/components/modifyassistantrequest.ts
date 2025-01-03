/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  AssistantsApiResponseFormatOption,
  AssistantsApiResponseFormatOption$inboundSchema,
  AssistantsApiResponseFormatOption$Outbound,
  AssistantsApiResponseFormatOption$outboundSchema,
} from "./assistantsapiresponseformatoption.js";
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

export type ModifyAssistantRequestTools =
  | AssistantToolsCode
  | AssistantToolsFileSearch
  | AssistantToolsFunction;

export type ModifyAssistantRequestCodeInterpreter = {
  /**
   * Overrides the list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
   *
   * @remarks
   */
  fileIds?: Array<string> | undefined;
};

export type ModifyAssistantRequestFileSearch = {
  /**
   * Overrides the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
   *
   * @remarks
   */
  vectorStoreIds?: Array<string> | undefined;
};

/**
 * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
 *
 * @remarks
 */
export type ModifyAssistantRequestToolResources = {
  codeInterpreter?: ModifyAssistantRequestCodeInterpreter | undefined;
  fileSearch?: ModifyAssistantRequestFileSearch | undefined;
};

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
 *
 * @remarks
 */
export type ModifyAssistantRequestMetadata = {};

export type ModifyAssistantRequest = {
  /**
   * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
   *
   * @remarks
   */
  model?: string | undefined;
  /**
   * The name of the assistant. The maximum length is 256 characters.
   *
   * @remarks
   */
  name?: string | null | undefined;
  /**
   * The description of the assistant. The maximum length is 512 characters.
   *
   * @remarks
   */
  description?: string | null | undefined;
  /**
   * The system instructions that the assistant uses. The maximum length is 256,000 characters.
   *
   * @remarks
   */
  instructions?: string | null | undefined;
  /**
   * A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
   *
   * @remarks
   */
  tools?:
    | Array<
      AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction
    >
    | undefined;
  /**
   * A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   *
   * @remarks
   */
  toolResources?: ModifyAssistantRequestToolResources | null | undefined;
  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   *
   * @remarks
   */
  metadata?: ModifyAssistantRequestMetadata | null | undefined;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   *
   * @remarks
   */
  temperature?: number | null | undefined;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
   *
   * @remarks
   *
   * We generally recommend altering this or temperature but not both.
   */
  topP?: number | null | undefined;
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
  responseFormat?: AssistantsApiResponseFormatOption | undefined;
};

/** @internal */
export const ModifyAssistantRequestTools$inboundSchema: z.ZodType<
  ModifyAssistantRequestTools,
  z.ZodTypeDef,
  unknown
> = z.union([
  AssistantToolsCode$inboundSchema,
  AssistantToolsFileSearch$inboundSchema,
  AssistantToolsFunction$inboundSchema,
]);

/** @internal */
export type ModifyAssistantRequestTools$Outbound =
  | AssistantToolsCode$Outbound
  | AssistantToolsFileSearch$Outbound
  | AssistantToolsFunction$Outbound;

/** @internal */
export const ModifyAssistantRequestTools$outboundSchema: z.ZodType<
  ModifyAssistantRequestTools$Outbound,
  z.ZodTypeDef,
  ModifyAssistantRequestTools
> = z.union([
  AssistantToolsCode$outboundSchema,
  AssistantToolsFileSearch$outboundSchema,
  AssistantToolsFunction$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModifyAssistantRequestTools$ {
  /** @deprecated use `ModifyAssistantRequestTools$inboundSchema` instead. */
  export const inboundSchema = ModifyAssistantRequestTools$inboundSchema;
  /** @deprecated use `ModifyAssistantRequestTools$outboundSchema` instead. */
  export const outboundSchema = ModifyAssistantRequestTools$outboundSchema;
  /** @deprecated use `ModifyAssistantRequestTools$Outbound` instead. */
  export type Outbound = ModifyAssistantRequestTools$Outbound;
}

/** @internal */
export const ModifyAssistantRequestCodeInterpreter$inboundSchema: z.ZodType<
  ModifyAssistantRequestCodeInterpreter,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_ids: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "file_ids": "fileIds",
  });
});

/** @internal */
export type ModifyAssistantRequestCodeInterpreter$Outbound = {
  file_ids?: Array<string> | undefined;
};

/** @internal */
export const ModifyAssistantRequestCodeInterpreter$outboundSchema: z.ZodType<
  ModifyAssistantRequestCodeInterpreter$Outbound,
  z.ZodTypeDef,
  ModifyAssistantRequestCodeInterpreter
> = z.object({
  fileIds: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    fileIds: "file_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModifyAssistantRequestCodeInterpreter$ {
  /** @deprecated use `ModifyAssistantRequestCodeInterpreter$inboundSchema` instead. */
  export const inboundSchema =
    ModifyAssistantRequestCodeInterpreter$inboundSchema;
  /** @deprecated use `ModifyAssistantRequestCodeInterpreter$outboundSchema` instead. */
  export const outboundSchema =
    ModifyAssistantRequestCodeInterpreter$outboundSchema;
  /** @deprecated use `ModifyAssistantRequestCodeInterpreter$Outbound` instead. */
  export type Outbound = ModifyAssistantRequestCodeInterpreter$Outbound;
}

/** @internal */
export const ModifyAssistantRequestFileSearch$inboundSchema: z.ZodType<
  ModifyAssistantRequestFileSearch,
  z.ZodTypeDef,
  unknown
> = z.object({
  vector_store_ids: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "vector_store_ids": "vectorStoreIds",
  });
});

/** @internal */
export type ModifyAssistantRequestFileSearch$Outbound = {
  vector_store_ids?: Array<string> | undefined;
};

/** @internal */
export const ModifyAssistantRequestFileSearch$outboundSchema: z.ZodType<
  ModifyAssistantRequestFileSearch$Outbound,
  z.ZodTypeDef,
  ModifyAssistantRequestFileSearch
> = z.object({
  vectorStoreIds: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    vectorStoreIds: "vector_store_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModifyAssistantRequestFileSearch$ {
  /** @deprecated use `ModifyAssistantRequestFileSearch$inboundSchema` instead. */
  export const inboundSchema = ModifyAssistantRequestFileSearch$inboundSchema;
  /** @deprecated use `ModifyAssistantRequestFileSearch$outboundSchema` instead. */
  export const outboundSchema = ModifyAssistantRequestFileSearch$outboundSchema;
  /** @deprecated use `ModifyAssistantRequestFileSearch$Outbound` instead. */
  export type Outbound = ModifyAssistantRequestFileSearch$Outbound;
}

/** @internal */
export const ModifyAssistantRequestToolResources$inboundSchema: z.ZodType<
  ModifyAssistantRequestToolResources,
  z.ZodTypeDef,
  unknown
> = z.object({
  code_interpreter: z.lazy(() =>
    ModifyAssistantRequestCodeInterpreter$inboundSchema
  ).optional(),
  file_search: z.lazy(() => ModifyAssistantRequestFileSearch$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "code_interpreter": "codeInterpreter",
    "file_search": "fileSearch",
  });
});

/** @internal */
export type ModifyAssistantRequestToolResources$Outbound = {
  code_interpreter?: ModifyAssistantRequestCodeInterpreter$Outbound | undefined;
  file_search?: ModifyAssistantRequestFileSearch$Outbound | undefined;
};

/** @internal */
export const ModifyAssistantRequestToolResources$outboundSchema: z.ZodType<
  ModifyAssistantRequestToolResources$Outbound,
  z.ZodTypeDef,
  ModifyAssistantRequestToolResources
> = z.object({
  codeInterpreter: z.lazy(() =>
    ModifyAssistantRequestCodeInterpreter$outboundSchema
  ).optional(),
  fileSearch: z.lazy(() => ModifyAssistantRequestFileSearch$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    codeInterpreter: "code_interpreter",
    fileSearch: "file_search",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModifyAssistantRequestToolResources$ {
  /** @deprecated use `ModifyAssistantRequestToolResources$inboundSchema` instead. */
  export const inboundSchema =
    ModifyAssistantRequestToolResources$inboundSchema;
  /** @deprecated use `ModifyAssistantRequestToolResources$outboundSchema` instead. */
  export const outboundSchema =
    ModifyAssistantRequestToolResources$outboundSchema;
  /** @deprecated use `ModifyAssistantRequestToolResources$Outbound` instead. */
  export type Outbound = ModifyAssistantRequestToolResources$Outbound;
}

/** @internal */
export const ModifyAssistantRequestMetadata$inboundSchema: z.ZodType<
  ModifyAssistantRequestMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ModifyAssistantRequestMetadata$Outbound = {};

/** @internal */
export const ModifyAssistantRequestMetadata$outboundSchema: z.ZodType<
  ModifyAssistantRequestMetadata$Outbound,
  z.ZodTypeDef,
  ModifyAssistantRequestMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModifyAssistantRequestMetadata$ {
  /** @deprecated use `ModifyAssistantRequestMetadata$inboundSchema` instead. */
  export const inboundSchema = ModifyAssistantRequestMetadata$inboundSchema;
  /** @deprecated use `ModifyAssistantRequestMetadata$outboundSchema` instead. */
  export const outboundSchema = ModifyAssistantRequestMetadata$outboundSchema;
  /** @deprecated use `ModifyAssistantRequestMetadata$Outbound` instead. */
  export type Outbound = ModifyAssistantRequestMetadata$Outbound;
}

/** @internal */
export const ModifyAssistantRequest$inboundSchema: z.ZodType<
  ModifyAssistantRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  model: z.string().optional(),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  instructions: z.nullable(z.string()).optional(),
  tools: z.array(
    z.union([
      AssistantToolsCode$inboundSchema,
      AssistantToolsFileSearch$inboundSchema,
      AssistantToolsFunction$inboundSchema,
    ]),
  ).optional(),
  tool_resources: z.nullable(
    z.lazy(() => ModifyAssistantRequestToolResources$inboundSchema),
  ).optional(),
  metadata: z.nullable(
    z.lazy(() => ModifyAssistantRequestMetadata$inboundSchema),
  ).optional(),
  temperature: z.nullable(z.number().default(1)),
  top_p: z.nullable(z.number().default(1)),
  response_format: AssistantsApiResponseFormatOption$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "tool_resources": "toolResources",
    "top_p": "topP",
    "response_format": "responseFormat",
  });
});

/** @internal */
export type ModifyAssistantRequest$Outbound = {
  model?: string | undefined;
  name?: string | null | undefined;
  description?: string | null | undefined;
  instructions?: string | null | undefined;
  tools?:
    | Array<
      | AssistantToolsCode$Outbound
      | AssistantToolsFileSearch$Outbound
      | AssistantToolsFunction$Outbound
    >
    | undefined;
  tool_resources?:
    | ModifyAssistantRequestToolResources$Outbound
    | null
    | undefined;
  metadata?: ModifyAssistantRequestMetadata$Outbound | null | undefined;
  temperature: number | null;
  top_p: number | null;
  response_format?: AssistantsApiResponseFormatOption$Outbound | undefined;
};

/** @internal */
export const ModifyAssistantRequest$outboundSchema: z.ZodType<
  ModifyAssistantRequest$Outbound,
  z.ZodTypeDef,
  ModifyAssistantRequest
> = z.object({
  model: z.string().optional(),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  instructions: z.nullable(z.string()).optional(),
  tools: z.array(
    z.union([
      AssistantToolsCode$outboundSchema,
      AssistantToolsFileSearch$outboundSchema,
      AssistantToolsFunction$outboundSchema,
    ]),
  ).optional(),
  toolResources: z.nullable(
    z.lazy(() => ModifyAssistantRequestToolResources$outboundSchema),
  ).optional(),
  metadata: z.nullable(
    z.lazy(() => ModifyAssistantRequestMetadata$outboundSchema),
  ).optional(),
  temperature: z.nullable(z.number().default(1)),
  topP: z.nullable(z.number().default(1)),
  responseFormat: AssistantsApiResponseFormatOption$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    toolResources: "tool_resources",
    topP: "top_p",
    responseFormat: "response_format",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModifyAssistantRequest$ {
  /** @deprecated use `ModifyAssistantRequest$inboundSchema` instead. */
  export const inboundSchema = ModifyAssistantRequest$inboundSchema;
  /** @deprecated use `ModifyAssistantRequest$outboundSchema` instead. */
  export const outboundSchema = ModifyAssistantRequest$outboundSchema;
  /** @deprecated use `ModifyAssistantRequest$Outbound` instead. */
  export type Outbound = ModifyAssistantRequest$Outbound;
}
