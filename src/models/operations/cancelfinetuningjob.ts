/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CancelFineTuningJobRequest = {
  /**
   * The ID of the fine-tuning job to cancel.
   *
   * @remarks
   */
  fineTuningJobId: string;
};

/** @internal */
export const CancelFineTuningJobRequest$inboundSchema: z.ZodType<
  CancelFineTuningJobRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fine_tuning_job_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "fine_tuning_job_id": "fineTuningJobId",
  });
});

/** @internal */
export type CancelFineTuningJobRequest$Outbound = {
  fine_tuning_job_id: string;
};

/** @internal */
export const CancelFineTuningJobRequest$outboundSchema: z.ZodType<
  CancelFineTuningJobRequest$Outbound,
  z.ZodTypeDef,
  CancelFineTuningJobRequest
> = z.object({
  fineTuningJobId: z.string(),
}).transform((v) => {
  return remap$(v, {
    fineTuningJobId: "fine_tuning_job_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelFineTuningJobRequest$ {
  /** @deprecated use `CancelFineTuningJobRequest$inboundSchema` instead. */
  export const inboundSchema = CancelFineTuningJobRequest$inboundSchema;
  /** @deprecated use `CancelFineTuningJobRequest$outboundSchema` instead. */
  export const outboundSchema = CancelFineTuningJobRequest$outboundSchema;
  /** @deprecated use `CancelFineTuningJobRequest$Outbound` instead. */
  export type Outbound = CancelFineTuningJobRequest$Outbound;
}

export function cancelFineTuningJobRequestToJSON(
  cancelFineTuningJobRequest: CancelFineTuningJobRequest,
): string {
  return JSON.stringify(
    CancelFineTuningJobRequest$outboundSchema.parse(cancelFineTuningJobRequest),
  );
}

export function cancelFineTuningJobRequestFromJSON(
  jsonString: string,
): SafeParseResult<CancelFineTuningJobRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CancelFineTuningJobRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CancelFineTuningJobRequest' from JSON`,
  );
}
