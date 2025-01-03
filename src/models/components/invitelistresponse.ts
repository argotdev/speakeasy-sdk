/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  Invite,
  Invite$inboundSchema,
  Invite$Outbound,
  Invite$outboundSchema,
} from "./invite.js";

/**
 * The object type, which is always `list`
 */
export const InviteListResponseObject = {
  List: "list",
} as const;
/**
 * The object type, which is always `list`
 */
export type InviteListResponseObject = ClosedEnum<
  typeof InviteListResponseObject
>;

export type InviteListResponse = {
  /**
   * The object type, which is always `list`
   */
  object: InviteListResponseObject;
  data: Array<Invite>;
  /**
   * The first `invite_id` in the retrieved `list`
   */
  firstId?: string | undefined;
  /**
   * The last `invite_id` in the retrieved `list`
   */
  lastId?: string | undefined;
  /**
   * The `has_more` property is used for pagination to indicate there are additional results.
   */
  hasMore?: boolean | undefined;
};

/** @internal */
export const InviteListResponseObject$inboundSchema: z.ZodNativeEnum<
  typeof InviteListResponseObject
> = z.nativeEnum(InviteListResponseObject);

/** @internal */
export const InviteListResponseObject$outboundSchema: z.ZodNativeEnum<
  typeof InviteListResponseObject
> = InviteListResponseObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteListResponseObject$ {
  /** @deprecated use `InviteListResponseObject$inboundSchema` instead. */
  export const inboundSchema = InviteListResponseObject$inboundSchema;
  /** @deprecated use `InviteListResponseObject$outboundSchema` instead. */
  export const outboundSchema = InviteListResponseObject$outboundSchema;
}

/** @internal */
export const InviteListResponse$inboundSchema: z.ZodType<
  InviteListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: InviteListResponseObject$inboundSchema,
  data: z.array(Invite$inboundSchema),
  first_id: z.string().optional(),
  last_id: z.string().optional(),
  has_more: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "first_id": "firstId",
    "last_id": "lastId",
    "has_more": "hasMore",
  });
});

/** @internal */
export type InviteListResponse$Outbound = {
  object: string;
  data: Array<Invite$Outbound>;
  first_id?: string | undefined;
  last_id?: string | undefined;
  has_more?: boolean | undefined;
};

/** @internal */
export const InviteListResponse$outboundSchema: z.ZodType<
  InviteListResponse$Outbound,
  z.ZodTypeDef,
  InviteListResponse
> = z.object({
  object: InviteListResponseObject$outboundSchema,
  data: z.array(Invite$outboundSchema),
  firstId: z.string().optional(),
  lastId: z.string().optional(),
  hasMore: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    firstId: "first_id",
    lastId: "last_id",
    hasMore: "has_more",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteListResponse$ {
  /** @deprecated use `InviteListResponse$inboundSchema` instead. */
  export const inboundSchema = InviteListResponse$inboundSchema;
  /** @deprecated use `InviteListResponse$outboundSchema` instead. */
  export const outboundSchema = InviteListResponse$outboundSchema;
  /** @deprecated use `InviteListResponse$Outbound` instead. */
  export type Outbound = InviteListResponse$Outbound;
}
