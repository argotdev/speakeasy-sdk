/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const CreateSpeechRequestModel2 = {
  Tts1: "tts-1",
  Tts1Hd: "tts-1-hd",
} as const;
export type CreateSpeechRequestModel2 = ClosedEnum<
  typeof CreateSpeechRequestModel2
>;

/**
 * One of the available [TTS models](/docs/models/tts): `tts-1` or `tts-1-hd`
 *
 * @remarks
 */
export type CreateSpeechRequestModel = string | CreateSpeechRequestModel2;

/**
 * The voice to use when generating the audio. Supported voices are `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech/voice-options).
 */
export const Voice = {
  Alloy: "alloy",
  Echo: "echo",
  Fable: "fable",
  Onyx: "onyx",
  Nova: "nova",
  Shimmer: "shimmer",
} as const;
/**
 * The voice to use when generating the audio. Supported voices are `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech/voice-options).
 */
export type Voice = ClosedEnum<typeof Voice>;

/**
 * The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`.
 */
export const CreateSpeechRequestResponseFormat = {
  Mp3: "mp3",
  Opus: "opus",
  Aac: "aac",
  Flac: "flac",
  Wav: "wav",
  Pcm: "pcm",
} as const;
/**
 * The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`.
 */
export type CreateSpeechRequestResponseFormat = ClosedEnum<
  typeof CreateSpeechRequestResponseFormat
>;

export type CreateSpeechRequest = {
  /**
   * One of the available [TTS models](/docs/models/tts): `tts-1` or `tts-1-hd`
   *
   * @remarks
   */
  model: string | CreateSpeechRequestModel2;
  /**
   * The text to generate audio for. The maximum length is 4096 characters.
   */
  input: string;
  /**
   * The voice to use when generating the audio. Supported voices are `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech/voice-options).
   */
  voice: Voice;
  /**
   * The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`.
   */
  responseFormat?: CreateSpeechRequestResponseFormat | undefined;
  /**
   * The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default.
   */
  speed?: number | undefined;
};

/** @internal */
export const CreateSpeechRequestModel2$inboundSchema: z.ZodNativeEnum<
  typeof CreateSpeechRequestModel2
> = z.nativeEnum(CreateSpeechRequestModel2);

/** @internal */
export const CreateSpeechRequestModel2$outboundSchema: z.ZodNativeEnum<
  typeof CreateSpeechRequestModel2
> = CreateSpeechRequestModel2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSpeechRequestModel2$ {
  /** @deprecated use `CreateSpeechRequestModel2$inboundSchema` instead. */
  export const inboundSchema = CreateSpeechRequestModel2$inboundSchema;
  /** @deprecated use `CreateSpeechRequestModel2$outboundSchema` instead. */
  export const outboundSchema = CreateSpeechRequestModel2$outboundSchema;
}

/** @internal */
export const CreateSpeechRequestModel$inboundSchema: z.ZodType<
  CreateSpeechRequestModel,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), CreateSpeechRequestModel2$inboundSchema]);

/** @internal */
export type CreateSpeechRequestModel$Outbound = string | string;

/** @internal */
export const CreateSpeechRequestModel$outboundSchema: z.ZodType<
  CreateSpeechRequestModel$Outbound,
  z.ZodTypeDef,
  CreateSpeechRequestModel
> = z.union([z.string(), CreateSpeechRequestModel2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSpeechRequestModel$ {
  /** @deprecated use `CreateSpeechRequestModel$inboundSchema` instead. */
  export const inboundSchema = CreateSpeechRequestModel$inboundSchema;
  /** @deprecated use `CreateSpeechRequestModel$outboundSchema` instead. */
  export const outboundSchema = CreateSpeechRequestModel$outboundSchema;
  /** @deprecated use `CreateSpeechRequestModel$Outbound` instead. */
  export type Outbound = CreateSpeechRequestModel$Outbound;
}

/** @internal */
export const Voice$inboundSchema: z.ZodNativeEnum<typeof Voice> = z.nativeEnum(
  Voice,
);

/** @internal */
export const Voice$outboundSchema: z.ZodNativeEnum<typeof Voice> =
  Voice$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Voice$ {
  /** @deprecated use `Voice$inboundSchema` instead. */
  export const inboundSchema = Voice$inboundSchema;
  /** @deprecated use `Voice$outboundSchema` instead. */
  export const outboundSchema = Voice$outboundSchema;
}

/** @internal */
export const CreateSpeechRequestResponseFormat$inboundSchema: z.ZodNativeEnum<
  typeof CreateSpeechRequestResponseFormat
> = z.nativeEnum(CreateSpeechRequestResponseFormat);

/** @internal */
export const CreateSpeechRequestResponseFormat$outboundSchema: z.ZodNativeEnum<
  typeof CreateSpeechRequestResponseFormat
> = CreateSpeechRequestResponseFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSpeechRequestResponseFormat$ {
  /** @deprecated use `CreateSpeechRequestResponseFormat$inboundSchema` instead. */
  export const inboundSchema = CreateSpeechRequestResponseFormat$inboundSchema;
  /** @deprecated use `CreateSpeechRequestResponseFormat$outboundSchema` instead. */
  export const outboundSchema =
    CreateSpeechRequestResponseFormat$outboundSchema;
}

/** @internal */
export const CreateSpeechRequest$inboundSchema: z.ZodType<
  CreateSpeechRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  model: z.union([z.string(), CreateSpeechRequestModel2$inboundSchema]),
  input: z.string(),
  voice: Voice$inboundSchema,
  response_format: CreateSpeechRequestResponseFormat$inboundSchema.default(
    "mp3",
  ),
  speed: z.number().default(1),
}).transform((v) => {
  return remap$(v, {
    "response_format": "responseFormat",
  });
});

/** @internal */
export type CreateSpeechRequest$Outbound = {
  model: string | string;
  input: string;
  voice: string;
  response_format: string;
  speed: number;
};

/** @internal */
export const CreateSpeechRequest$outboundSchema: z.ZodType<
  CreateSpeechRequest$Outbound,
  z.ZodTypeDef,
  CreateSpeechRequest
> = z.object({
  model: z.union([z.string(), CreateSpeechRequestModel2$outboundSchema]),
  input: z.string(),
  voice: Voice$outboundSchema,
  responseFormat: CreateSpeechRequestResponseFormat$outboundSchema.default(
    "mp3",
  ),
  speed: z.number().default(1),
}).transform((v) => {
  return remap$(v, {
    responseFormat: "response_format",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSpeechRequest$ {
  /** @deprecated use `CreateSpeechRequest$inboundSchema` instead. */
  export const inboundSchema = CreateSpeechRequest$inboundSchema;
  /** @deprecated use `CreateSpeechRequest$outboundSchema` instead. */
  export const outboundSchema = CreateSpeechRequest$outboundSchema;
  /** @deprecated use `CreateSpeechRequest$Outbound` instead. */
  export type Outbound = CreateSpeechRequest$Outbound;
}
