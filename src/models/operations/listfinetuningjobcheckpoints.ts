/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListFineTuningJobCheckpointsRequest = {
  /**
   * The ID of the fine-tuning job to get checkpoints for.
   *
   * @remarks
   */
  fineTuningJobId: string;
  /**
   * Identifier for the last checkpoint ID from the previous pagination request.
   */
  after?: string | undefined;
  /**
   * Number of checkpoints to retrieve.
   */
  limit?: number | undefined;
};

/** @internal */
export const ListFineTuningJobCheckpointsRequest$inboundSchema: z.ZodType<
  ListFineTuningJobCheckpointsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fine_tuning_job_id: z.string(),
  after: z.string().optional(),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    "fine_tuning_job_id": "fineTuningJobId",
  });
});

/** @internal */
export type ListFineTuningJobCheckpointsRequest$Outbound = {
  fine_tuning_job_id: string;
  after?: string | undefined;
  limit: number;
};

/** @internal */
export const ListFineTuningJobCheckpointsRequest$outboundSchema: z.ZodType<
  ListFineTuningJobCheckpointsRequest$Outbound,
  z.ZodTypeDef,
  ListFineTuningJobCheckpointsRequest
> = z.object({
  fineTuningJobId: z.string(),
  after: z.string().optional(),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    fineTuningJobId: "fine_tuning_job_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFineTuningJobCheckpointsRequest$ {
  /** @deprecated use `ListFineTuningJobCheckpointsRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListFineTuningJobCheckpointsRequest$inboundSchema;
  /** @deprecated use `ListFineTuningJobCheckpointsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListFineTuningJobCheckpointsRequest$outboundSchema;
  /** @deprecated use `ListFineTuningJobCheckpointsRequest$Outbound` instead. */
  export type Outbound = ListFineTuningJobCheckpointsRequest$Outbound;
}
