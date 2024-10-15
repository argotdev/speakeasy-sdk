/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`.
 */
export const Anchor = {
  LastActiveAt: "last_active_at",
} as const;
/**
 * Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`.
 */
export type Anchor = ClosedEnum<typeof Anchor>;

/**
 * The expiration policy for a vector store.
 */
export type VectorStoreExpirationAfter = {
  /**
   * Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`.
   */
  anchor: Anchor;
  /**
   * The number of days after the anchor time that the vector store will expire.
   */
  days: number;
};

/** @internal */
export const Anchor$inboundSchema: z.ZodNativeEnum<typeof Anchor> = z
  .nativeEnum(Anchor);

/** @internal */
export const Anchor$outboundSchema: z.ZodNativeEnum<typeof Anchor> =
  Anchor$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Anchor$ {
  /** @deprecated use `Anchor$inboundSchema` instead. */
  export const inboundSchema = Anchor$inboundSchema;
  /** @deprecated use `Anchor$outboundSchema` instead. */
  export const outboundSchema = Anchor$outboundSchema;
}

/** @internal */
export const VectorStoreExpirationAfter$inboundSchema: z.ZodType<
  VectorStoreExpirationAfter,
  z.ZodTypeDef,
  unknown
> = z.object({
  anchor: Anchor$inboundSchema,
  days: z.number().int(),
});

/** @internal */
export type VectorStoreExpirationAfter$Outbound = {
  anchor: string;
  days: number;
};

/** @internal */
export const VectorStoreExpirationAfter$outboundSchema: z.ZodType<
  VectorStoreExpirationAfter$Outbound,
  z.ZodTypeDef,
  VectorStoreExpirationAfter
> = z.object({
  anchor: Anchor$outboundSchema,
  days: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VectorStoreExpirationAfter$ {
  /** @deprecated use `VectorStoreExpirationAfter$inboundSchema` instead. */
  export const inboundSchema = VectorStoreExpirationAfter$inboundSchema;
  /** @deprecated use `VectorStoreExpirationAfter$outboundSchema` instead. */
  export const outboundSchema = VectorStoreExpirationAfter$outboundSchema;
  /** @deprecated use `VectorStoreExpirationAfter$Outbound` instead. */
  export type Outbound = VectorStoreExpirationAfter$Outbound;
}
