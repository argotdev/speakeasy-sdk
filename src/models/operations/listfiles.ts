/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ListFilesRequest = {
  /**
   * Only return files with the given purpose.
   */
  purpose?: string | undefined;
};

/** @internal */
export const ListFilesRequest$inboundSchema: z.ZodType<
  ListFilesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  purpose: z.string().optional(),
});

/** @internal */
export type ListFilesRequest$Outbound = {
  purpose?: string | undefined;
};

/** @internal */
export const ListFilesRequest$outboundSchema: z.ZodType<
  ListFilesRequest$Outbound,
  z.ZodTypeDef,
  ListFilesRequest
> = z.object({
  purpose: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFilesRequest$ {
  /** @deprecated use `ListFilesRequest$inboundSchema` instead. */
  export const inboundSchema = ListFilesRequest$inboundSchema;
  /** @deprecated use `ListFilesRequest$outboundSchema` instead. */
  export const outboundSchema = ListFilesRequest$outboundSchema;
  /** @deprecated use `ListFilesRequest$Outbound` instead. */
  export type Outbound = ListFilesRequest$Outbound;
}
