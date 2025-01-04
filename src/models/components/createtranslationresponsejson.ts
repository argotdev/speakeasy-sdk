/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateTranslationResponseJson = {
  text: string;
};

/** @internal */
export const CreateTranslationResponseJson$inboundSchema: z.ZodType<
  CreateTranslationResponseJson,
  z.ZodTypeDef,
  unknown
> = z.object({
  text: z.string(),
});

/** @internal */
export type CreateTranslationResponseJson$Outbound = {
  text: string;
};

/** @internal */
export const CreateTranslationResponseJson$outboundSchema: z.ZodType<
  CreateTranslationResponseJson$Outbound,
  z.ZodTypeDef,
  CreateTranslationResponseJson
> = z.object({
  text: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTranslationResponseJson$ {
  /** @deprecated use `CreateTranslationResponseJson$inboundSchema` instead. */
  export const inboundSchema = CreateTranslationResponseJson$inboundSchema;
  /** @deprecated use `CreateTranslationResponseJson$outboundSchema` instead. */
  export const outboundSchema = CreateTranslationResponseJson$outboundSchema;
  /** @deprecated use `CreateTranslationResponseJson$Outbound` instead. */
  export type Outbound = CreateTranslationResponseJson$Outbound;
}

export function createTranslationResponseJsonToJSON(
  createTranslationResponseJson: CreateTranslationResponseJson,
): string {
  return JSON.stringify(
    CreateTranslationResponseJson$outboundSchema.parse(
      createTranslationResponseJson,
    ),
  );
}

export function createTranslationResponseJsonFromJSON(
  jsonString: string,
): SafeParseResult<CreateTranslationResponseJson, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTranslationResponseJson$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTranslationResponseJson' from JSON`,
  );
}
