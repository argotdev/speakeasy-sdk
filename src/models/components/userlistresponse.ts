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
  User,
  User$inboundSchema,
  User$Outbound,
  User$outboundSchema,
} from "./user.js";

export const UserListResponseObject = {
  List: "list",
} as const;
export type UserListResponseObject = ClosedEnum<typeof UserListResponseObject>;

export type UserListResponse = {
  object: UserListResponseObject;
  data: Array<User>;
  firstId: string;
  lastId: string;
  hasMore: boolean;
};

/** @internal */
export const UserListResponseObject$inboundSchema: z.ZodNativeEnum<
  typeof UserListResponseObject
> = z.nativeEnum(UserListResponseObject);

/** @internal */
export const UserListResponseObject$outboundSchema: z.ZodNativeEnum<
  typeof UserListResponseObject
> = UserListResponseObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserListResponseObject$ {
  /** @deprecated use `UserListResponseObject$inboundSchema` instead. */
  export const inboundSchema = UserListResponseObject$inboundSchema;
  /** @deprecated use `UserListResponseObject$outboundSchema` instead. */
  export const outboundSchema = UserListResponseObject$outboundSchema;
}

/** @internal */
export const UserListResponse$inboundSchema: z.ZodType<
  UserListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: UserListResponseObject$inboundSchema,
  data: z.array(User$inboundSchema),
  first_id: z.string(),
  last_id: z.string(),
  has_more: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "first_id": "firstId",
    "last_id": "lastId",
    "has_more": "hasMore",
  });
});

/** @internal */
export type UserListResponse$Outbound = {
  object: string;
  data: Array<User$Outbound>;
  first_id: string;
  last_id: string;
  has_more: boolean;
};

/** @internal */
export const UserListResponse$outboundSchema: z.ZodType<
  UserListResponse$Outbound,
  z.ZodTypeDef,
  UserListResponse
> = z.object({
  object: UserListResponseObject$outboundSchema,
  data: z.array(User$outboundSchema),
  firstId: z.string(),
  lastId: z.string(),
  hasMore: z.boolean(),
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
export namespace UserListResponse$ {
  /** @deprecated use `UserListResponse$inboundSchema` instead. */
  export const inboundSchema = UserListResponse$inboundSchema;
  /** @deprecated use `UserListResponse$outboundSchema` instead. */
  export const outboundSchema = UserListResponse$outboundSchema;
  /** @deprecated use `UserListResponse$Outbound` instead. */
  export type Outbound = UserListResponse$Outbound;
}

export function userListResponseToJSON(
  userListResponse: UserListResponse,
): string {
  return JSON.stringify(
    UserListResponse$outboundSchema.parse(userListResponse),
  );
}

export function userListResponseFromJSON(
  jsonString: string,
): SafeParseResult<UserListResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserListResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserListResponse' from JSON`,
  );
}
