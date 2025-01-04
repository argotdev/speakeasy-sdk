/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  MessageObject,
  MessageObject$inboundSchema,
  MessageObject$Outbound,
  MessageObject$outboundSchema,
} from "./messageobject.js";

export type ListMessagesResponse = {
  object: string;
  data: Array<MessageObject>;
  firstId: string;
  lastId: string;
  hasMore: boolean;
};

/** @internal */
export const ListMessagesResponse$inboundSchema: z.ZodType<
  ListMessagesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: z.string(),
  data: z.array(MessageObject$inboundSchema),
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
export type ListMessagesResponse$Outbound = {
  object: string;
  data: Array<MessageObject$Outbound>;
  first_id: string;
  last_id: string;
  has_more: boolean;
};

/** @internal */
export const ListMessagesResponse$outboundSchema: z.ZodType<
  ListMessagesResponse$Outbound,
  z.ZodTypeDef,
  ListMessagesResponse
> = z.object({
  object: z.string(),
  data: z.array(MessageObject$outboundSchema),
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
export namespace ListMessagesResponse$ {
  /** @deprecated use `ListMessagesResponse$inboundSchema` instead. */
  export const inboundSchema = ListMessagesResponse$inboundSchema;
  /** @deprecated use `ListMessagesResponse$outboundSchema` instead. */
  export const outboundSchema = ListMessagesResponse$outboundSchema;
  /** @deprecated use `ListMessagesResponse$Outbound` instead. */
  export type Outbound = ListMessagesResponse$Outbound;
}

export function listMessagesResponseToJSON(
  listMessagesResponse: ListMessagesResponse,
): string {
  return JSON.stringify(
    ListMessagesResponse$outboundSchema.parse(listMessagesResponse),
  );
}

export function listMessagesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListMessagesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMessagesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMessagesResponse' from JSON`,
  );
}
