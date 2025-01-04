/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The object type, which is always `thread`.
 */
export const ThreadObjectObject = {
  Thread: "thread",
} as const;
/**
 * The object type, which is always `thread`.
 */
export type ThreadObjectObject = ClosedEnum<typeof ThreadObjectObject>;

export type ThreadObjectCodeInterpreter = {
  /**
   * A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
   *
   * @remarks
   */
  fileIds?: Array<string> | undefined;
};

export type ThreadObjectFileSearch = {
  /**
   * The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
   *
   * @remarks
   */
  vectorStoreIds?: Array<string> | undefined;
};

/**
 * A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
 *
 * @remarks
 */
export type ThreadObjectToolResources = {
  codeInterpreter?: ThreadObjectCodeInterpreter | undefined;
  fileSearch?: ThreadObjectFileSearch | undefined;
};

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
 *
 * @remarks
 */
export type ThreadObjectMetadata = {};

/**
 * Represents a thread that contains [messages](/docs/api-reference/messages).
 */
export type ThreadObject = {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;
  /**
   * The object type, which is always `thread`.
   */
  object: ThreadObjectObject;
  /**
   * The Unix timestamp (in seconds) for when the thread was created.
   */
  createdAt: number;
  /**
   * A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
   *
   * @remarks
   */
  toolResources: ThreadObjectToolResources | null;
  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   *
   * @remarks
   */
  metadata: ThreadObjectMetadata | null;
};

/** @internal */
export const ThreadObjectObject$inboundSchema: z.ZodNativeEnum<
  typeof ThreadObjectObject
> = z.nativeEnum(ThreadObjectObject);

/** @internal */
export const ThreadObjectObject$outboundSchema: z.ZodNativeEnum<
  typeof ThreadObjectObject
> = ThreadObjectObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ThreadObjectObject$ {
  /** @deprecated use `ThreadObjectObject$inboundSchema` instead. */
  export const inboundSchema = ThreadObjectObject$inboundSchema;
  /** @deprecated use `ThreadObjectObject$outboundSchema` instead. */
  export const outboundSchema = ThreadObjectObject$outboundSchema;
}

/** @internal */
export const ThreadObjectCodeInterpreter$inboundSchema: z.ZodType<
  ThreadObjectCodeInterpreter,
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
export type ThreadObjectCodeInterpreter$Outbound = {
  file_ids?: Array<string> | undefined;
};

/** @internal */
export const ThreadObjectCodeInterpreter$outboundSchema: z.ZodType<
  ThreadObjectCodeInterpreter$Outbound,
  z.ZodTypeDef,
  ThreadObjectCodeInterpreter
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
export namespace ThreadObjectCodeInterpreter$ {
  /** @deprecated use `ThreadObjectCodeInterpreter$inboundSchema` instead. */
  export const inboundSchema = ThreadObjectCodeInterpreter$inboundSchema;
  /** @deprecated use `ThreadObjectCodeInterpreter$outboundSchema` instead. */
  export const outboundSchema = ThreadObjectCodeInterpreter$outboundSchema;
  /** @deprecated use `ThreadObjectCodeInterpreter$Outbound` instead. */
  export type Outbound = ThreadObjectCodeInterpreter$Outbound;
}

export function threadObjectCodeInterpreterToJSON(
  threadObjectCodeInterpreter: ThreadObjectCodeInterpreter,
): string {
  return JSON.stringify(
    ThreadObjectCodeInterpreter$outboundSchema.parse(
      threadObjectCodeInterpreter,
    ),
  );
}

export function threadObjectCodeInterpreterFromJSON(
  jsonString: string,
): SafeParseResult<ThreadObjectCodeInterpreter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ThreadObjectCodeInterpreter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ThreadObjectCodeInterpreter' from JSON`,
  );
}

/** @internal */
export const ThreadObjectFileSearch$inboundSchema: z.ZodType<
  ThreadObjectFileSearch,
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
export type ThreadObjectFileSearch$Outbound = {
  vector_store_ids?: Array<string> | undefined;
};

/** @internal */
export const ThreadObjectFileSearch$outboundSchema: z.ZodType<
  ThreadObjectFileSearch$Outbound,
  z.ZodTypeDef,
  ThreadObjectFileSearch
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
export namespace ThreadObjectFileSearch$ {
  /** @deprecated use `ThreadObjectFileSearch$inboundSchema` instead. */
  export const inboundSchema = ThreadObjectFileSearch$inboundSchema;
  /** @deprecated use `ThreadObjectFileSearch$outboundSchema` instead. */
  export const outboundSchema = ThreadObjectFileSearch$outboundSchema;
  /** @deprecated use `ThreadObjectFileSearch$Outbound` instead. */
  export type Outbound = ThreadObjectFileSearch$Outbound;
}

export function threadObjectFileSearchToJSON(
  threadObjectFileSearch: ThreadObjectFileSearch,
): string {
  return JSON.stringify(
    ThreadObjectFileSearch$outboundSchema.parse(threadObjectFileSearch),
  );
}

export function threadObjectFileSearchFromJSON(
  jsonString: string,
): SafeParseResult<ThreadObjectFileSearch, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ThreadObjectFileSearch$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ThreadObjectFileSearch' from JSON`,
  );
}

/** @internal */
export const ThreadObjectToolResources$inboundSchema: z.ZodType<
  ThreadObjectToolResources,
  z.ZodTypeDef,
  unknown
> = z.object({
  code_interpreter: z.lazy(() => ThreadObjectCodeInterpreter$inboundSchema)
    .optional(),
  file_search: z.lazy(() => ThreadObjectFileSearch$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "code_interpreter": "codeInterpreter",
    "file_search": "fileSearch",
  });
});

/** @internal */
export type ThreadObjectToolResources$Outbound = {
  code_interpreter?: ThreadObjectCodeInterpreter$Outbound | undefined;
  file_search?: ThreadObjectFileSearch$Outbound | undefined;
};

/** @internal */
export const ThreadObjectToolResources$outboundSchema: z.ZodType<
  ThreadObjectToolResources$Outbound,
  z.ZodTypeDef,
  ThreadObjectToolResources
> = z.object({
  codeInterpreter: z.lazy(() => ThreadObjectCodeInterpreter$outboundSchema)
    .optional(),
  fileSearch: z.lazy(() => ThreadObjectFileSearch$outboundSchema).optional(),
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
export namespace ThreadObjectToolResources$ {
  /** @deprecated use `ThreadObjectToolResources$inboundSchema` instead. */
  export const inboundSchema = ThreadObjectToolResources$inboundSchema;
  /** @deprecated use `ThreadObjectToolResources$outboundSchema` instead. */
  export const outboundSchema = ThreadObjectToolResources$outboundSchema;
  /** @deprecated use `ThreadObjectToolResources$Outbound` instead. */
  export type Outbound = ThreadObjectToolResources$Outbound;
}

export function threadObjectToolResourcesToJSON(
  threadObjectToolResources: ThreadObjectToolResources,
): string {
  return JSON.stringify(
    ThreadObjectToolResources$outboundSchema.parse(threadObjectToolResources),
  );
}

export function threadObjectToolResourcesFromJSON(
  jsonString: string,
): SafeParseResult<ThreadObjectToolResources, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ThreadObjectToolResources$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ThreadObjectToolResources' from JSON`,
  );
}

/** @internal */
export const ThreadObjectMetadata$inboundSchema: z.ZodType<
  ThreadObjectMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ThreadObjectMetadata$Outbound = {};

/** @internal */
export const ThreadObjectMetadata$outboundSchema: z.ZodType<
  ThreadObjectMetadata$Outbound,
  z.ZodTypeDef,
  ThreadObjectMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ThreadObjectMetadata$ {
  /** @deprecated use `ThreadObjectMetadata$inboundSchema` instead. */
  export const inboundSchema = ThreadObjectMetadata$inboundSchema;
  /** @deprecated use `ThreadObjectMetadata$outboundSchema` instead. */
  export const outboundSchema = ThreadObjectMetadata$outboundSchema;
  /** @deprecated use `ThreadObjectMetadata$Outbound` instead. */
  export type Outbound = ThreadObjectMetadata$Outbound;
}

export function threadObjectMetadataToJSON(
  threadObjectMetadata: ThreadObjectMetadata,
): string {
  return JSON.stringify(
    ThreadObjectMetadata$outboundSchema.parse(threadObjectMetadata),
  );
}

export function threadObjectMetadataFromJSON(
  jsonString: string,
): SafeParseResult<ThreadObjectMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ThreadObjectMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ThreadObjectMetadata' from JSON`,
  );
}

/** @internal */
export const ThreadObject$inboundSchema: z.ZodType<
  ThreadObject,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  object: ThreadObjectObject$inboundSchema,
  created_at: z.number().int(),
  tool_resources: z.nullable(
    z.lazy(() => ThreadObjectToolResources$inboundSchema),
  ),
  metadata: z.nullable(z.lazy(() => ThreadObjectMetadata$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "tool_resources": "toolResources",
  });
});

/** @internal */
export type ThreadObject$Outbound = {
  id: string;
  object: string;
  created_at: number;
  tool_resources: ThreadObjectToolResources$Outbound | null;
  metadata: ThreadObjectMetadata$Outbound | null;
};

/** @internal */
export const ThreadObject$outboundSchema: z.ZodType<
  ThreadObject$Outbound,
  z.ZodTypeDef,
  ThreadObject
> = z.object({
  id: z.string(),
  object: ThreadObjectObject$outboundSchema,
  createdAt: z.number().int(),
  toolResources: z.nullable(
    z.lazy(() => ThreadObjectToolResources$outboundSchema),
  ),
  metadata: z.nullable(z.lazy(() => ThreadObjectMetadata$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    toolResources: "tool_resources",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ThreadObject$ {
  /** @deprecated use `ThreadObject$inboundSchema` instead. */
  export const inboundSchema = ThreadObject$inboundSchema;
  /** @deprecated use `ThreadObject$outboundSchema` instead. */
  export const outboundSchema = ThreadObject$outboundSchema;
  /** @deprecated use `ThreadObject$Outbound` instead. */
  export type Outbound = ThreadObject$Outbound;
}

export function threadObjectToJSON(threadObject: ThreadObject): string {
  return JSON.stringify(ThreadObject$outboundSchema.parse(threadObject));
}

export function threadObjectFromJSON(
  jsonString: string,
): SafeParseResult<ThreadObject, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ThreadObject$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ThreadObject' from JSON`,
  );
}
