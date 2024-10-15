/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  AssistantObject,
  AssistantObject$inboundSchema,
  AssistantObject$Outbound,
  AssistantObject$outboundSchema,
} from "./assistantobject.js";

export type ListAssistantsResponse = {
  object: string;
  data: Array<AssistantObject>;
  firstId: string;
  lastId: string;
  hasMore: boolean;
};

/** @internal */
export const ListAssistantsResponse$inboundSchema: z.ZodType<
  ListAssistantsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: z.string(),
  data: z.array(AssistantObject$inboundSchema),
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
export type ListAssistantsResponse$Outbound = {
  object: string;
  data: Array<AssistantObject$Outbound>;
  first_id: string;
  last_id: string;
  has_more: boolean;
};

/** @internal */
export const ListAssistantsResponse$outboundSchema: z.ZodType<
  ListAssistantsResponse$Outbound,
  z.ZodTypeDef,
  ListAssistantsResponse
> = z.object({
  object: z.string(),
  data: z.array(AssistantObject$outboundSchema),
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
export namespace ListAssistantsResponse$ {
  /** @deprecated use `ListAssistantsResponse$inboundSchema` instead. */
  export const inboundSchema = ListAssistantsResponse$inboundSchema;
  /** @deprecated use `ListAssistantsResponse$outboundSchema` instead. */
  export const outboundSchema = ListAssistantsResponse$outboundSchema;
  /** @deprecated use `ListAssistantsResponse$Outbound` instead. */
  export type Outbound = ListAssistantsResponse$Outbound;
}
