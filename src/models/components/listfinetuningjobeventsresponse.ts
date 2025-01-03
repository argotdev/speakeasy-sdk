/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  FineTuningJobEvent,
  FineTuningJobEvent$inboundSchema,
  FineTuningJobEvent$Outbound,
  FineTuningJobEvent$outboundSchema,
} from "./finetuningjobevent.js";

export const ListFineTuningJobEventsResponseObject = {
  List: "list",
} as const;
export type ListFineTuningJobEventsResponseObject = ClosedEnum<
  typeof ListFineTuningJobEventsResponseObject
>;

export type ListFineTuningJobEventsResponse = {
  data: Array<FineTuningJobEvent>;
  object: ListFineTuningJobEventsResponseObject;
};

/** @internal */
export const ListFineTuningJobEventsResponseObject$inboundSchema:
  z.ZodNativeEnum<typeof ListFineTuningJobEventsResponseObject> = z.nativeEnum(
    ListFineTuningJobEventsResponseObject,
  );

/** @internal */
export const ListFineTuningJobEventsResponseObject$outboundSchema:
  z.ZodNativeEnum<typeof ListFineTuningJobEventsResponseObject> =
    ListFineTuningJobEventsResponseObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFineTuningJobEventsResponseObject$ {
  /** @deprecated use `ListFineTuningJobEventsResponseObject$inboundSchema` instead. */
  export const inboundSchema =
    ListFineTuningJobEventsResponseObject$inboundSchema;
  /** @deprecated use `ListFineTuningJobEventsResponseObject$outboundSchema` instead. */
  export const outboundSchema =
    ListFineTuningJobEventsResponseObject$outboundSchema;
}

/** @internal */
export const ListFineTuningJobEventsResponse$inboundSchema: z.ZodType<
  ListFineTuningJobEventsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(FineTuningJobEvent$inboundSchema),
  object: ListFineTuningJobEventsResponseObject$inboundSchema,
});

/** @internal */
export type ListFineTuningJobEventsResponse$Outbound = {
  data: Array<FineTuningJobEvent$Outbound>;
  object: string;
};

/** @internal */
export const ListFineTuningJobEventsResponse$outboundSchema: z.ZodType<
  ListFineTuningJobEventsResponse$Outbound,
  z.ZodTypeDef,
  ListFineTuningJobEventsResponse
> = z.object({
  data: z.array(FineTuningJobEvent$outboundSchema),
  object: ListFineTuningJobEventsResponseObject$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFineTuningJobEventsResponse$ {
  /** @deprecated use `ListFineTuningJobEventsResponse$inboundSchema` instead. */
  export const inboundSchema = ListFineTuningJobEventsResponse$inboundSchema;
  /** @deprecated use `ListFineTuningJobEventsResponse$outboundSchema` instead. */
  export const outboundSchema = ListFineTuningJobEventsResponse$outboundSchema;
  /** @deprecated use `ListFineTuningJobEventsResponse$Outbound` instead. */
  export type Outbound = ListFineTuningJobEventsResponse$Outbound;
}
