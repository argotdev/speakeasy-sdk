/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AudioResponseFormat,
  AudioResponseFormat$inboundSchema,
  AudioResponseFormat$outboundSchema,
} from "./audioresponseformat.js";

export type CreateTranslationRequestFile = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

export const CreateTranslationRequestModel2 = {
  Whisper1: "whisper-1",
} as const;
export type CreateTranslationRequestModel2 = ClosedEnum<
  typeof CreateTranslationRequestModel2
>;

/**
 * ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.
 *
 * @remarks
 */
export type CreateTranslationRequestModel =
  | string
  | CreateTranslationRequestModel2;

export type CreateTranslationRequest = {
  /**
   * The audio file object (not file name) translate, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
   *
   * @remarks
   */
  file: CreateTranslationRequestFile | Blob;
  /**
   * ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.
   *
   * @remarks
   */
  model: string | CreateTranslationRequestModel2;
  /**
   * An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in English.
   *
   * @remarks
   */
  prompt?: string | undefined;
  /**
   * The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.
   *
   * @remarks
   */
  responseFormat?: AudioResponseFormat | undefined;
  /**
   * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
   *
   * @remarks
   */
  temperature?: number | undefined;
};

/** @internal */
export const CreateTranslationRequestFile$inboundSchema: z.ZodType<
  CreateTranslationRequestFile,
  z.ZodTypeDef,
  unknown
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/** @internal */
export type CreateTranslationRequestFile$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const CreateTranslationRequestFile$outboundSchema: z.ZodType<
  CreateTranslationRequestFile$Outbound,
  z.ZodTypeDef,
  CreateTranslationRequestFile
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTranslationRequestFile$ {
  /** @deprecated use `CreateTranslationRequestFile$inboundSchema` instead. */
  export const inboundSchema = CreateTranslationRequestFile$inboundSchema;
  /** @deprecated use `CreateTranslationRequestFile$outboundSchema` instead. */
  export const outboundSchema = CreateTranslationRequestFile$outboundSchema;
  /** @deprecated use `CreateTranslationRequestFile$Outbound` instead. */
  export type Outbound = CreateTranslationRequestFile$Outbound;
}

export function createTranslationRequestFileToJSON(
  createTranslationRequestFile: CreateTranslationRequestFile,
): string {
  return JSON.stringify(
    CreateTranslationRequestFile$outboundSchema.parse(
      createTranslationRequestFile,
    ),
  );
}

export function createTranslationRequestFileFromJSON(
  jsonString: string,
): SafeParseResult<CreateTranslationRequestFile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTranslationRequestFile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTranslationRequestFile' from JSON`,
  );
}

/** @internal */
export const CreateTranslationRequestModel2$inboundSchema: z.ZodNativeEnum<
  typeof CreateTranslationRequestModel2
> = z.nativeEnum(CreateTranslationRequestModel2);

/** @internal */
export const CreateTranslationRequestModel2$outboundSchema: z.ZodNativeEnum<
  typeof CreateTranslationRequestModel2
> = CreateTranslationRequestModel2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTranslationRequestModel2$ {
  /** @deprecated use `CreateTranslationRequestModel2$inboundSchema` instead. */
  export const inboundSchema = CreateTranslationRequestModel2$inboundSchema;
  /** @deprecated use `CreateTranslationRequestModel2$outboundSchema` instead. */
  export const outboundSchema = CreateTranslationRequestModel2$outboundSchema;
}

/** @internal */
export const CreateTranslationRequestModel$inboundSchema: z.ZodType<
  CreateTranslationRequestModel,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), CreateTranslationRequestModel2$inboundSchema]);

/** @internal */
export type CreateTranslationRequestModel$Outbound = string | string;

/** @internal */
export const CreateTranslationRequestModel$outboundSchema: z.ZodType<
  CreateTranslationRequestModel$Outbound,
  z.ZodTypeDef,
  CreateTranslationRequestModel
> = z.union([z.string(), CreateTranslationRequestModel2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTranslationRequestModel$ {
  /** @deprecated use `CreateTranslationRequestModel$inboundSchema` instead. */
  export const inboundSchema = CreateTranslationRequestModel$inboundSchema;
  /** @deprecated use `CreateTranslationRequestModel$outboundSchema` instead. */
  export const outboundSchema = CreateTranslationRequestModel$outboundSchema;
  /** @deprecated use `CreateTranslationRequestModel$Outbound` instead. */
  export type Outbound = CreateTranslationRequestModel$Outbound;
}

export function createTranslationRequestModelToJSON(
  createTranslationRequestModel: CreateTranslationRequestModel,
): string {
  return JSON.stringify(
    CreateTranslationRequestModel$outboundSchema.parse(
      createTranslationRequestModel,
    ),
  );
}

export function createTranslationRequestModelFromJSON(
  jsonString: string,
): SafeParseResult<CreateTranslationRequestModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTranslationRequestModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTranslationRequestModel' from JSON`,
  );
}

/** @internal */
export const CreateTranslationRequest$inboundSchema: z.ZodType<
  CreateTranslationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => CreateTranslationRequestFile$inboundSchema),
  model: z.union([z.string(), CreateTranslationRequestModel2$inboundSchema]),
  prompt: z.string().optional(),
  response_format: AudioResponseFormat$inboundSchema.default("json"),
  temperature: z.number().default(0),
}).transform((v) => {
  return remap$(v, {
    "response_format": "responseFormat",
  });
});

/** @internal */
export type CreateTranslationRequest$Outbound = {
  file: CreateTranslationRequestFile$Outbound | Blob;
  model: string | string;
  prompt?: string | undefined;
  response_format: string;
  temperature: number;
};

/** @internal */
export const CreateTranslationRequest$outboundSchema: z.ZodType<
  CreateTranslationRequest$Outbound,
  z.ZodTypeDef,
  CreateTranslationRequest
> = z.object({
  file: z.lazy(() => CreateTranslationRequestFile$outboundSchema).or(
    blobLikeSchema,
  ),
  model: z.union([z.string(), CreateTranslationRequestModel2$outboundSchema]),
  prompt: z.string().optional(),
  responseFormat: AudioResponseFormat$outboundSchema.default("json"),
  temperature: z.number().default(0),
}).transform((v) => {
  return remap$(v, {
    responseFormat: "response_format",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTranslationRequest$ {
  /** @deprecated use `CreateTranslationRequest$inboundSchema` instead. */
  export const inboundSchema = CreateTranslationRequest$inboundSchema;
  /** @deprecated use `CreateTranslationRequest$outboundSchema` instead. */
  export const outboundSchema = CreateTranslationRequest$outboundSchema;
  /** @deprecated use `CreateTranslationRequest$Outbound` instead. */
  export type Outbound = CreateTranslationRequest$Outbound;
}

export function createTranslationRequestToJSON(
  createTranslationRequest: CreateTranslationRequest,
): string {
  return JSON.stringify(
    CreateTranslationRequest$outboundSchema.parse(createTranslationRequest),
  );
}

export function createTranslationRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateTranslationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTranslationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTranslationRequest' from JSON`,
  );
}
