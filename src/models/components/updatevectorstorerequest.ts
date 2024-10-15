/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  VectorStoreExpirationAfter,
  VectorStoreExpirationAfter$inboundSchema,
  VectorStoreExpirationAfter$Outbound,
  VectorStoreExpirationAfter$outboundSchema,
} from "./vectorstoreexpirationafter.js";

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
 *
 * @remarks
 */
export type UpdateVectorStoreRequestMetadata = {};

export type UpdateVectorStoreRequest = {
  /**
   * The name of the vector store.
   */
  name?: string | null | undefined;
  /**
   * The expiration policy for a vector store.
   */
  expiresAfter?: VectorStoreExpirationAfter | undefined;
  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.
   *
   * @remarks
   */
  metadata?: UpdateVectorStoreRequestMetadata | null | undefined;
};

/** @internal */
export const UpdateVectorStoreRequestMetadata$inboundSchema: z.ZodType<
  UpdateVectorStoreRequestMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UpdateVectorStoreRequestMetadata$Outbound = {};

/** @internal */
export const UpdateVectorStoreRequestMetadata$outboundSchema: z.ZodType<
  UpdateVectorStoreRequestMetadata$Outbound,
  z.ZodTypeDef,
  UpdateVectorStoreRequestMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateVectorStoreRequestMetadata$ {
  /** @deprecated use `UpdateVectorStoreRequestMetadata$inboundSchema` instead. */
  export const inboundSchema = UpdateVectorStoreRequestMetadata$inboundSchema;
  /** @deprecated use `UpdateVectorStoreRequestMetadata$outboundSchema` instead. */
  export const outboundSchema = UpdateVectorStoreRequestMetadata$outboundSchema;
  /** @deprecated use `UpdateVectorStoreRequestMetadata$Outbound` instead. */
  export type Outbound = UpdateVectorStoreRequestMetadata$Outbound;
}

/** @internal */
export const UpdateVectorStoreRequest$inboundSchema: z.ZodType<
  UpdateVectorStoreRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  expires_after: VectorStoreExpirationAfter$inboundSchema.optional(),
  metadata: z.nullable(
    z.lazy(() => UpdateVectorStoreRequestMetadata$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "expires_after": "expiresAfter",
  });
});

/** @internal */
export type UpdateVectorStoreRequest$Outbound = {
  name?: string | null | undefined;
  expires_after?: VectorStoreExpirationAfter$Outbound | undefined;
  metadata?: UpdateVectorStoreRequestMetadata$Outbound | null | undefined;
};

/** @internal */
export const UpdateVectorStoreRequest$outboundSchema: z.ZodType<
  UpdateVectorStoreRequest$Outbound,
  z.ZodTypeDef,
  UpdateVectorStoreRequest
> = z.object({
  name: z.nullable(z.string()).optional(),
  expiresAfter: VectorStoreExpirationAfter$outboundSchema.optional(),
  metadata: z.nullable(
    z.lazy(() => UpdateVectorStoreRequestMetadata$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    expiresAfter: "expires_after",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateVectorStoreRequest$ {
  /** @deprecated use `UpdateVectorStoreRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateVectorStoreRequest$inboundSchema;
  /** @deprecated use `UpdateVectorStoreRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateVectorStoreRequest$outboundSchema;
  /** @deprecated use `UpdateVectorStoreRequest$Outbound` instead. */
  export type Outbound = UpdateVectorStoreRequest$Outbound;
}
