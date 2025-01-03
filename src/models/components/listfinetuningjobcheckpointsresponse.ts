/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  FineTuningJobCheckpoint,
  FineTuningJobCheckpoint$inboundSchema,
  FineTuningJobCheckpoint$Outbound,
  FineTuningJobCheckpoint$outboundSchema,
} from "./finetuningjobcheckpoint.js";

export const ListFineTuningJobCheckpointsResponseObject = {
  List: "list",
} as const;
export type ListFineTuningJobCheckpointsResponseObject = ClosedEnum<
  typeof ListFineTuningJobCheckpointsResponseObject
>;

export type ListFineTuningJobCheckpointsResponse = {
  data: Array<FineTuningJobCheckpoint>;
  object: ListFineTuningJobCheckpointsResponseObject;
  firstId?: string | null | undefined;
  lastId?: string | null | undefined;
  hasMore: boolean;
};

/** @internal */
export const ListFineTuningJobCheckpointsResponseObject$inboundSchema:
  z.ZodNativeEnum<typeof ListFineTuningJobCheckpointsResponseObject> = z
    .nativeEnum(ListFineTuningJobCheckpointsResponseObject);

/** @internal */
export const ListFineTuningJobCheckpointsResponseObject$outboundSchema:
  z.ZodNativeEnum<typeof ListFineTuningJobCheckpointsResponseObject> =
    ListFineTuningJobCheckpointsResponseObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFineTuningJobCheckpointsResponseObject$ {
  /** @deprecated use `ListFineTuningJobCheckpointsResponseObject$inboundSchema` instead. */
  export const inboundSchema =
    ListFineTuningJobCheckpointsResponseObject$inboundSchema;
  /** @deprecated use `ListFineTuningJobCheckpointsResponseObject$outboundSchema` instead. */
  export const outboundSchema =
    ListFineTuningJobCheckpointsResponseObject$outboundSchema;
}

/** @internal */
export const ListFineTuningJobCheckpointsResponse$inboundSchema: z.ZodType<
  ListFineTuningJobCheckpointsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(FineTuningJobCheckpoint$inboundSchema),
  object: ListFineTuningJobCheckpointsResponseObject$inboundSchema,
  first_id: z.nullable(z.string()).optional(),
  last_id: z.nullable(z.string()).optional(),
  has_more: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "first_id": "firstId",
    "last_id": "lastId",
    "has_more": "hasMore",
  });
});

/** @internal */
export type ListFineTuningJobCheckpointsResponse$Outbound = {
  data: Array<FineTuningJobCheckpoint$Outbound>;
  object: string;
  first_id?: string | null | undefined;
  last_id?: string | null | undefined;
  has_more: boolean;
};

/** @internal */
export const ListFineTuningJobCheckpointsResponse$outboundSchema: z.ZodType<
  ListFineTuningJobCheckpointsResponse$Outbound,
  z.ZodTypeDef,
  ListFineTuningJobCheckpointsResponse
> = z.object({
  data: z.array(FineTuningJobCheckpoint$outboundSchema),
  object: ListFineTuningJobCheckpointsResponseObject$outboundSchema,
  firstId: z.nullable(z.string()).optional(),
  lastId: z.nullable(z.string()).optional(),
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
export namespace ListFineTuningJobCheckpointsResponse$ {
  /** @deprecated use `ListFineTuningJobCheckpointsResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListFineTuningJobCheckpointsResponse$inboundSchema;
  /** @deprecated use `ListFineTuningJobCheckpointsResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListFineTuningJobCheckpointsResponse$outboundSchema;
  /** @deprecated use `ListFineTuningJobCheckpointsResponse$Outbound` instead. */
  export type Outbound = ListFineTuningJobCheckpointsResponse$Outbound;
}
