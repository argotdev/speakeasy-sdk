/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The service account that performed the audit logged action.
 */
export type AuditLogActorServiceAccount = {
  /**
   * The service account id.
   */
  id?: string | undefined;
};

/** @internal */
export const AuditLogActorServiceAccount$inboundSchema: z.ZodType<
  AuditLogActorServiceAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
});

/** @internal */
export type AuditLogActorServiceAccount$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const AuditLogActorServiceAccount$outboundSchema: z.ZodType<
  AuditLogActorServiceAccount$Outbound,
  z.ZodTypeDef,
  AuditLogActorServiceAccount
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuditLogActorServiceAccount$ {
  /** @deprecated use `AuditLogActorServiceAccount$inboundSchema` instead. */
  export const inboundSchema = AuditLogActorServiceAccount$inboundSchema;
  /** @deprecated use `AuditLogActorServiceAccount$outboundSchema` instead. */
  export const outboundSchema = AuditLogActorServiceAccount$outboundSchema;
  /** @deprecated use `AuditLogActorServiceAccount$Outbound` instead. */
  export type Outbound = AuditLogActorServiceAccount$Outbound;
}

export function auditLogActorServiceAccountToJSON(
  auditLogActorServiceAccount: AuditLogActorServiceAccount,
): string {
  return JSON.stringify(
    AuditLogActorServiceAccount$outboundSchema.parse(
      auditLogActorServiceAccount,
    ),
  );
}

export function auditLogActorServiceAccountFromJSON(
  jsonString: string,
): SafeParseResult<AuditLogActorServiceAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AuditLogActorServiceAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AuditLogActorServiceAccount' from JSON`,
  );
}
