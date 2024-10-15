/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const DeleteFileResponseObject = {
  File: "file",
} as const;
export type DeleteFileResponseObject = ClosedEnum<
  typeof DeleteFileResponseObject
>;

export type DeleteFileResponse = {
  id: string;
  object: DeleteFileResponseObject;
  deleted: boolean;
};

/** @internal */
export const DeleteFileResponseObject$inboundSchema: z.ZodNativeEnum<
  typeof DeleteFileResponseObject
> = z.nativeEnum(DeleteFileResponseObject);

/** @internal */
export const DeleteFileResponseObject$outboundSchema: z.ZodNativeEnum<
  typeof DeleteFileResponseObject
> = DeleteFileResponseObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteFileResponseObject$ {
  /** @deprecated use `DeleteFileResponseObject$inboundSchema` instead. */
  export const inboundSchema = DeleteFileResponseObject$inboundSchema;
  /** @deprecated use `DeleteFileResponseObject$outboundSchema` instead. */
  export const outboundSchema = DeleteFileResponseObject$outboundSchema;
}

/** @internal */
export const DeleteFileResponse$inboundSchema: z.ZodType<
  DeleteFileResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  object: DeleteFileResponseObject$inboundSchema,
  deleted: z.boolean(),
});

/** @internal */
export type DeleteFileResponse$Outbound = {
  id: string;
  object: string;
  deleted: boolean;
};

/** @internal */
export const DeleteFileResponse$outboundSchema: z.ZodType<
  DeleteFileResponse$Outbound,
  z.ZodTypeDef,
  DeleteFileResponse
> = z.object({
  id: z.string(),
  object: DeleteFileResponseObject$outboundSchema,
  deleted: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteFileResponse$ {
  /** @deprecated use `DeleteFileResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteFileResponse$inboundSchema;
  /** @deprecated use `DeleteFileResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteFileResponse$outboundSchema;
  /** @deprecated use `DeleteFileResponse$Outbound` instead. */
  export type Outbound = DeleteFileResponse$Outbound;
}
