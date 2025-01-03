/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const DeleteVectorStoreFileResponseObject = {
  VectorStoreFileDeleted: "vector_store.file.deleted",
} as const;
export type DeleteVectorStoreFileResponseObject = ClosedEnum<
  typeof DeleteVectorStoreFileResponseObject
>;

export type DeleteVectorStoreFileResponse = {
  id: string;
  deleted: boolean;
  object: DeleteVectorStoreFileResponseObject;
};

/** @internal */
export const DeleteVectorStoreFileResponseObject$inboundSchema: z.ZodNativeEnum<
  typeof DeleteVectorStoreFileResponseObject
> = z.nativeEnum(DeleteVectorStoreFileResponseObject);

/** @internal */
export const DeleteVectorStoreFileResponseObject$outboundSchema:
  z.ZodNativeEnum<typeof DeleteVectorStoreFileResponseObject> =
    DeleteVectorStoreFileResponseObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteVectorStoreFileResponseObject$ {
  /** @deprecated use `DeleteVectorStoreFileResponseObject$inboundSchema` instead. */
  export const inboundSchema =
    DeleteVectorStoreFileResponseObject$inboundSchema;
  /** @deprecated use `DeleteVectorStoreFileResponseObject$outboundSchema` instead. */
  export const outboundSchema =
    DeleteVectorStoreFileResponseObject$outboundSchema;
}

/** @internal */
export const DeleteVectorStoreFileResponse$inboundSchema: z.ZodType<
  DeleteVectorStoreFileResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  deleted: z.boolean(),
  object: DeleteVectorStoreFileResponseObject$inboundSchema,
});

/** @internal */
export type DeleteVectorStoreFileResponse$Outbound = {
  id: string;
  deleted: boolean;
  object: string;
};

/** @internal */
export const DeleteVectorStoreFileResponse$outboundSchema: z.ZodType<
  DeleteVectorStoreFileResponse$Outbound,
  z.ZodTypeDef,
  DeleteVectorStoreFileResponse
> = z.object({
  id: z.string(),
  deleted: z.boolean(),
  object: DeleteVectorStoreFileResponseObject$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteVectorStoreFileResponse$ {
  /** @deprecated use `DeleteVectorStoreFileResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteVectorStoreFileResponse$inboundSchema;
  /** @deprecated use `DeleteVectorStoreFileResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteVectorStoreFileResponse$outboundSchema;
  /** @deprecated use `DeleteVectorStoreFileResponse$Outbound` instead. */
  export type Outbound = DeleteVectorStoreFileResponse$Outbound;
}
