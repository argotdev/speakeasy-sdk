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
 * The object type, which is always `vector_store.file_batch`.
 */
export const VectorStoreFileBatchObjectObject = {
  VectorStoreFilesBatch: "vector_store.files_batch",
} as const;
/**
 * The object type, which is always `vector_store.file_batch`.
 */
export type VectorStoreFileBatchObjectObject = ClosedEnum<
  typeof VectorStoreFileBatchObjectObject
>;

/**
 * The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`.
 */
export const VectorStoreFileBatchObjectStatus = {
  InProgress: "in_progress",
  Completed: "completed",
  Cancelled: "cancelled",
  Failed: "failed",
} as const;
/**
 * The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`.
 */
export type VectorStoreFileBatchObjectStatus = ClosedEnum<
  typeof VectorStoreFileBatchObjectStatus
>;

export type VectorStoreFileBatchObjectFileCounts = {
  /**
   * The number of files that are currently being processed.
   */
  inProgress: number;
  /**
   * The number of files that have been processed.
   */
  completed: number;
  /**
   * The number of files that have failed to process.
   */
  failed: number;
  /**
   * The number of files that where cancelled.
   */
  cancelled: number;
  /**
   * The total number of files.
   */
  total: number;
};

/**
 * A batch of files attached to a vector store.
 */
export type VectorStoreFileBatchObject = {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;
  /**
   * The object type, which is always `vector_store.file_batch`.
   */
  object: VectorStoreFileBatchObjectObject;
  /**
   * The Unix timestamp (in seconds) for when the vector store files batch was created.
   */
  createdAt: number;
  /**
   * The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to.
   */
  vectorStoreId: string;
  /**
   * The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`.
   */
  status: VectorStoreFileBatchObjectStatus;
  fileCounts: VectorStoreFileBatchObjectFileCounts;
};

/** @internal */
export const VectorStoreFileBatchObjectObject$inboundSchema: z.ZodNativeEnum<
  typeof VectorStoreFileBatchObjectObject
> = z.nativeEnum(VectorStoreFileBatchObjectObject);

/** @internal */
export const VectorStoreFileBatchObjectObject$outboundSchema: z.ZodNativeEnum<
  typeof VectorStoreFileBatchObjectObject
> = VectorStoreFileBatchObjectObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VectorStoreFileBatchObjectObject$ {
  /** @deprecated use `VectorStoreFileBatchObjectObject$inboundSchema` instead. */
  export const inboundSchema = VectorStoreFileBatchObjectObject$inboundSchema;
  /** @deprecated use `VectorStoreFileBatchObjectObject$outboundSchema` instead. */
  export const outboundSchema = VectorStoreFileBatchObjectObject$outboundSchema;
}

/** @internal */
export const VectorStoreFileBatchObjectStatus$inboundSchema: z.ZodNativeEnum<
  typeof VectorStoreFileBatchObjectStatus
> = z.nativeEnum(VectorStoreFileBatchObjectStatus);

/** @internal */
export const VectorStoreFileBatchObjectStatus$outboundSchema: z.ZodNativeEnum<
  typeof VectorStoreFileBatchObjectStatus
> = VectorStoreFileBatchObjectStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VectorStoreFileBatchObjectStatus$ {
  /** @deprecated use `VectorStoreFileBatchObjectStatus$inboundSchema` instead. */
  export const inboundSchema = VectorStoreFileBatchObjectStatus$inboundSchema;
  /** @deprecated use `VectorStoreFileBatchObjectStatus$outboundSchema` instead. */
  export const outboundSchema = VectorStoreFileBatchObjectStatus$outboundSchema;
}

/** @internal */
export const VectorStoreFileBatchObjectFileCounts$inboundSchema: z.ZodType<
  VectorStoreFileBatchObjectFileCounts,
  z.ZodTypeDef,
  unknown
> = z.object({
  in_progress: z.number().int(),
  completed: z.number().int(),
  failed: z.number().int(),
  cancelled: z.number().int(),
  total: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "in_progress": "inProgress",
  });
});

/** @internal */
export type VectorStoreFileBatchObjectFileCounts$Outbound = {
  in_progress: number;
  completed: number;
  failed: number;
  cancelled: number;
  total: number;
};

/** @internal */
export const VectorStoreFileBatchObjectFileCounts$outboundSchema: z.ZodType<
  VectorStoreFileBatchObjectFileCounts$Outbound,
  z.ZodTypeDef,
  VectorStoreFileBatchObjectFileCounts
> = z.object({
  inProgress: z.number().int(),
  completed: z.number().int(),
  failed: z.number().int(),
  cancelled: z.number().int(),
  total: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    inProgress: "in_progress",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VectorStoreFileBatchObjectFileCounts$ {
  /** @deprecated use `VectorStoreFileBatchObjectFileCounts$inboundSchema` instead. */
  export const inboundSchema =
    VectorStoreFileBatchObjectFileCounts$inboundSchema;
  /** @deprecated use `VectorStoreFileBatchObjectFileCounts$outboundSchema` instead. */
  export const outboundSchema =
    VectorStoreFileBatchObjectFileCounts$outboundSchema;
  /** @deprecated use `VectorStoreFileBatchObjectFileCounts$Outbound` instead. */
  export type Outbound = VectorStoreFileBatchObjectFileCounts$Outbound;
}

export function vectorStoreFileBatchObjectFileCountsToJSON(
  vectorStoreFileBatchObjectFileCounts: VectorStoreFileBatchObjectFileCounts,
): string {
  return JSON.stringify(
    VectorStoreFileBatchObjectFileCounts$outboundSchema.parse(
      vectorStoreFileBatchObjectFileCounts,
    ),
  );
}

export function vectorStoreFileBatchObjectFileCountsFromJSON(
  jsonString: string,
): SafeParseResult<VectorStoreFileBatchObjectFileCounts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      VectorStoreFileBatchObjectFileCounts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VectorStoreFileBatchObjectFileCounts' from JSON`,
  );
}

/** @internal */
export const VectorStoreFileBatchObject$inboundSchema: z.ZodType<
  VectorStoreFileBatchObject,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  object: VectorStoreFileBatchObjectObject$inboundSchema,
  created_at: z.number().int(),
  vector_store_id: z.string(),
  status: VectorStoreFileBatchObjectStatus$inboundSchema,
  file_counts: z.lazy(() => VectorStoreFileBatchObjectFileCounts$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "vector_store_id": "vectorStoreId",
    "file_counts": "fileCounts",
  });
});

/** @internal */
export type VectorStoreFileBatchObject$Outbound = {
  id: string;
  object: string;
  created_at: number;
  vector_store_id: string;
  status: string;
  file_counts: VectorStoreFileBatchObjectFileCounts$Outbound;
};

/** @internal */
export const VectorStoreFileBatchObject$outboundSchema: z.ZodType<
  VectorStoreFileBatchObject$Outbound,
  z.ZodTypeDef,
  VectorStoreFileBatchObject
> = z.object({
  id: z.string(),
  object: VectorStoreFileBatchObjectObject$outboundSchema,
  createdAt: z.number().int(),
  vectorStoreId: z.string(),
  status: VectorStoreFileBatchObjectStatus$outboundSchema,
  fileCounts: z.lazy(() => VectorStoreFileBatchObjectFileCounts$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    vectorStoreId: "vector_store_id",
    fileCounts: "file_counts",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VectorStoreFileBatchObject$ {
  /** @deprecated use `VectorStoreFileBatchObject$inboundSchema` instead. */
  export const inboundSchema = VectorStoreFileBatchObject$inboundSchema;
  /** @deprecated use `VectorStoreFileBatchObject$outboundSchema` instead. */
  export const outboundSchema = VectorStoreFileBatchObject$outboundSchema;
  /** @deprecated use `VectorStoreFileBatchObject$Outbound` instead. */
  export type Outbound = VectorStoreFileBatchObject$Outbound;
}

export function vectorStoreFileBatchObjectToJSON(
  vectorStoreFileBatchObject: VectorStoreFileBatchObject,
): string {
  return JSON.stringify(
    VectorStoreFileBatchObject$outboundSchema.parse(vectorStoreFileBatchObject),
  );
}

export function vectorStoreFileBatchObjectFromJSON(
  jsonString: string,
): SafeParseResult<VectorStoreFileBatchObject, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VectorStoreFileBatchObject$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VectorStoreFileBatchObject' from JSON`,
  );
}
