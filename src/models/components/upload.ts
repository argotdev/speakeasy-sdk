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
  OpenAIFile,
  OpenAIFile$inboundSchema,
  OpenAIFile$Outbound,
  OpenAIFile$outboundSchema,
} from "./openaifile.js";

/**
 * The status of the Upload.
 */
export const UploadStatus = {
  Pending: "pending",
  Completed: "completed",
  Cancelled: "cancelled",
  Expired: "expired",
} as const;
/**
 * The status of the Upload.
 */
export type UploadStatus = ClosedEnum<typeof UploadStatus>;

/**
 * The object type, which is always "upload".
 */
export const UploadObject = {
  Upload: "upload",
} as const;
/**
 * The object type, which is always "upload".
 */
export type UploadObject = ClosedEnum<typeof UploadObject>;

/**
 * The Upload object can accept byte chunks in the form of Parts.
 *
 * @remarks
 */
export type Upload = {
  /**
   * The Upload unique identifier, which can be referenced in API endpoints.
   */
  id: string;
  /**
   * The Unix timestamp (in seconds) for when the Upload was created.
   */
  createdAt: number;
  /**
   * The name of the file to be uploaded.
   */
  filename: string;
  /**
   * The intended number of bytes to be uploaded.
   */
  bytes: number;
  /**
   * The intended purpose of the file. [Please refer here](/docs/api-reference/files/object#files/object-purpose) for acceptable values.
   */
  purpose: string;
  /**
   * The status of the Upload.
   */
  status: UploadStatus;
  /**
   * The Unix timestamp (in seconds) for when the Upload was created.
   */
  expiresAt: number;
  /**
   * The object type, which is always "upload".
   */
  object?: UploadObject | undefined;
  /**
   * The `File` object represents a document that has been uploaded to OpenAI.
   */
  file?: OpenAIFile | undefined;
};

/** @internal */
export const UploadStatus$inboundSchema: z.ZodNativeEnum<typeof UploadStatus> =
  z.nativeEnum(UploadStatus);

/** @internal */
export const UploadStatus$outboundSchema: z.ZodNativeEnum<typeof UploadStatus> =
  UploadStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadStatus$ {
  /** @deprecated use `UploadStatus$inboundSchema` instead. */
  export const inboundSchema = UploadStatus$inboundSchema;
  /** @deprecated use `UploadStatus$outboundSchema` instead. */
  export const outboundSchema = UploadStatus$outboundSchema;
}

/** @internal */
export const UploadObject$inboundSchema: z.ZodNativeEnum<typeof UploadObject> =
  z.nativeEnum(UploadObject);

/** @internal */
export const UploadObject$outboundSchema: z.ZodNativeEnum<typeof UploadObject> =
  UploadObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadObject$ {
  /** @deprecated use `UploadObject$inboundSchema` instead. */
  export const inboundSchema = UploadObject$inboundSchema;
  /** @deprecated use `UploadObject$outboundSchema` instead. */
  export const outboundSchema = UploadObject$outboundSchema;
}

/** @internal */
export const Upload$inboundSchema: z.ZodType<Upload, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    created_at: z.number().int(),
    filename: z.string(),
    bytes: z.number().int(),
    purpose: z.string(),
    status: UploadStatus$inboundSchema,
    expires_at: z.number().int(),
    object: UploadObject$inboundSchema.optional(),
    file: OpenAIFile$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "created_at": "createdAt",
      "expires_at": "expiresAt",
    });
  });

/** @internal */
export type Upload$Outbound = {
  id: string;
  created_at: number;
  filename: string;
  bytes: number;
  purpose: string;
  status: string;
  expires_at: number;
  object?: string | undefined;
  file?: OpenAIFile$Outbound | undefined;
};

/** @internal */
export const Upload$outboundSchema: z.ZodType<
  Upload$Outbound,
  z.ZodTypeDef,
  Upload
> = z.object({
  id: z.string(),
  createdAt: z.number().int(),
  filename: z.string(),
  bytes: z.number().int(),
  purpose: z.string(),
  status: UploadStatus$outboundSchema,
  expiresAt: z.number().int(),
  object: UploadObject$outboundSchema.optional(),
  file: OpenAIFile$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    expiresAt: "expires_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Upload$ {
  /** @deprecated use `Upload$inboundSchema` instead. */
  export const inboundSchema = Upload$inboundSchema;
  /** @deprecated use `Upload$outboundSchema` instead. */
  export const outboundSchema = Upload$outboundSchema;
  /** @deprecated use `Upload$Outbound` instead. */
  export type Outbound = Upload$Outbound;
}

export function uploadToJSON(upload: Upload): string {
  return JSON.stringify(Upload$outboundSchema.parse(upload));
}

export function uploadFromJSON(
  jsonString: string,
): SafeParseResult<Upload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Upload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Upload' from JSON`,
  );
}
