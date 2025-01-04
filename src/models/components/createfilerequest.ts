/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateFileRequestFile = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/**
 * The intended purpose of the uploaded file.
 *
 * @remarks
 *
 * Use "assistants" for [Assistants](/docs/api-reference/assistants) and [Message](/docs/api-reference/messages) files, "vision" for Assistants image file inputs, "batch" for [Batch API](/docs/guides/batch), and "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning).
 */
export const CreateFileRequestPurpose = {
  Assistants: "assistants",
  Batch: "batch",
  FineTune: "fine-tune",
  Vision: "vision",
} as const;
/**
 * The intended purpose of the uploaded file.
 *
 * @remarks
 *
 * Use "assistants" for [Assistants](/docs/api-reference/assistants) and [Message](/docs/api-reference/messages) files, "vision" for Assistants image file inputs, "batch" for [Batch API](/docs/guides/batch), and "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning).
 */
export type CreateFileRequestPurpose = ClosedEnum<
  typeof CreateFileRequestPurpose
>;

export type CreateFileRequest = {
  /**
   * The File object (not file name) to be uploaded.
   *
   * @remarks
   */
  file: CreateFileRequestFile | Blob;
  /**
   * The intended purpose of the uploaded file.
   *
   * @remarks
   *
   * Use "assistants" for [Assistants](/docs/api-reference/assistants) and [Message](/docs/api-reference/messages) files, "vision" for Assistants image file inputs, "batch" for [Batch API](/docs/guides/batch), and "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning).
   */
  purpose: CreateFileRequestPurpose;
};

/** @internal */
export const CreateFileRequestFile$inboundSchema: z.ZodType<
  CreateFileRequestFile,
  z.ZodTypeDef,
  unknown
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/** @internal */
export type CreateFileRequestFile$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const CreateFileRequestFile$outboundSchema: z.ZodType<
  CreateFileRequestFile$Outbound,
  z.ZodTypeDef,
  CreateFileRequestFile
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateFileRequestFile$ {
  /** @deprecated use `CreateFileRequestFile$inboundSchema` instead. */
  export const inboundSchema = CreateFileRequestFile$inboundSchema;
  /** @deprecated use `CreateFileRequestFile$outboundSchema` instead. */
  export const outboundSchema = CreateFileRequestFile$outboundSchema;
  /** @deprecated use `CreateFileRequestFile$Outbound` instead. */
  export type Outbound = CreateFileRequestFile$Outbound;
}

export function createFileRequestFileToJSON(
  createFileRequestFile: CreateFileRequestFile,
): string {
  return JSON.stringify(
    CreateFileRequestFile$outboundSchema.parse(createFileRequestFile),
  );
}

export function createFileRequestFileFromJSON(
  jsonString: string,
): SafeParseResult<CreateFileRequestFile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateFileRequestFile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateFileRequestFile' from JSON`,
  );
}

/** @internal */
export const CreateFileRequestPurpose$inboundSchema: z.ZodNativeEnum<
  typeof CreateFileRequestPurpose
> = z.nativeEnum(CreateFileRequestPurpose);

/** @internal */
export const CreateFileRequestPurpose$outboundSchema: z.ZodNativeEnum<
  typeof CreateFileRequestPurpose
> = CreateFileRequestPurpose$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateFileRequestPurpose$ {
  /** @deprecated use `CreateFileRequestPurpose$inboundSchema` instead. */
  export const inboundSchema = CreateFileRequestPurpose$inboundSchema;
  /** @deprecated use `CreateFileRequestPurpose$outboundSchema` instead. */
  export const outboundSchema = CreateFileRequestPurpose$outboundSchema;
}

/** @internal */
export const CreateFileRequest$inboundSchema: z.ZodType<
  CreateFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => CreateFileRequestFile$inboundSchema),
  purpose: CreateFileRequestPurpose$inboundSchema,
});

/** @internal */
export type CreateFileRequest$Outbound = {
  file: CreateFileRequestFile$Outbound | Blob;
  purpose: string;
};

/** @internal */
export const CreateFileRequest$outboundSchema: z.ZodType<
  CreateFileRequest$Outbound,
  z.ZodTypeDef,
  CreateFileRequest
> = z.object({
  file: z.lazy(() => CreateFileRequestFile$outboundSchema).or(blobLikeSchema),
  purpose: CreateFileRequestPurpose$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateFileRequest$ {
  /** @deprecated use `CreateFileRequest$inboundSchema` instead. */
  export const inboundSchema = CreateFileRequest$inboundSchema;
  /** @deprecated use `CreateFileRequest$outboundSchema` instead. */
  export const outboundSchema = CreateFileRequest$outboundSchema;
  /** @deprecated use `CreateFileRequest$Outbound` instead. */
  export type Outbound = CreateFileRequest$Outbound;
}

export function createFileRequestToJSON(
  createFileRequest: CreateFileRequest,
): string {
  return JSON.stringify(
    CreateFileRequest$outboundSchema.parse(createFileRequest),
  );
}

export function createFileRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateFileRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateFileRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateFileRequest' from JSON`,
  );
}
