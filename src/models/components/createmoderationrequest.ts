/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Always `text`.
 */
export const CreateModerationRequest3Type = {
  Text: "text",
} as const;
/**
 * Always `text`.
 */
export type CreateModerationRequest3Type = ClosedEnum<
  typeof CreateModerationRequest3Type
>;

/**
 * An object describing text to classify.
 */
export type Three2 = {
  /**
   * Always `text`.
   */
  type: CreateModerationRequest3Type;
  /**
   * A string of text to classify.
   */
  text: string;
};

/**
 * Always `image_url`.
 */
export const ThreeType = {
  ImageUrl: "image_url",
} as const;
/**
 * Always `image_url`.
 */
export type ThreeType = ClosedEnum<typeof ThreeType>;

/**
 * Contains either an image URL or a data URL for a base64 encoded image.
 */
export type ThreeImageUrl = {
  /**
   * Either a URL of the image or the base64 encoded image data.
   */
  url: string;
};

/**
 * An object describing an image to classify.
 */
export type Three1 = {
  /**
   * Always `image_url`.
   */
  type: ThreeType;
  /**
   * Contains either an image URL or a data URL for a base64 encoded image.
   */
  imageUrl: ThreeImageUrl;
};

export type Three = Three1 | Three2;

/**
 * Input (or inputs) to classify. Can be a single string, an array of strings, or
 *
 * @remarks
 * an array of multi-modal input objects similar to other models.
 */
export type CreateModerationRequestInput =
  | string
  | Array<string>
  | Array<Three1 | Three2>;

export const CreateModerationRequestModel2 = {
  OmniModerationLatest: "omni-moderation-latest",
  OmniModeration20240926: "omni-moderation-2024-09-26",
  TextModerationLatest: "text-moderation-latest",
  TextModerationStable: "text-moderation-stable",
} as const;
export type CreateModerationRequestModel2 = ClosedEnum<
  typeof CreateModerationRequestModel2
>;

/**
 * The content moderation model you would like to use. Learn more in
 *
 * @remarks
 * [the moderation guide](/docs/guides/moderation), and learn about
 * available models [here](/docs/models/moderation).
 */
export type CreateModerationRequestModel =
  | string
  | CreateModerationRequestModel2;

export type CreateModerationRequest = {
  /**
   * Input (or inputs) to classify. Can be a single string, an array of strings, or
   *
   * @remarks
   * an array of multi-modal input objects similar to other models.
   */
  input: string | Array<string> | Array<Three1 | Three2>;
  /**
   * The content moderation model you would like to use. Learn more in
   *
   * @remarks
   * [the moderation guide](/docs/guides/moderation), and learn about
   * available models [here](/docs/models/moderation).
   */
  model?: string | CreateModerationRequestModel2 | undefined;
};

/** @internal */
export const CreateModerationRequest3Type$inboundSchema: z.ZodNativeEnum<
  typeof CreateModerationRequest3Type
> = z.nativeEnum(CreateModerationRequest3Type);

/** @internal */
export const CreateModerationRequest3Type$outboundSchema: z.ZodNativeEnum<
  typeof CreateModerationRequest3Type
> = CreateModerationRequest3Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateModerationRequest3Type$ {
  /** @deprecated use `CreateModerationRequest3Type$inboundSchema` instead. */
  export const inboundSchema = CreateModerationRequest3Type$inboundSchema;
  /** @deprecated use `CreateModerationRequest3Type$outboundSchema` instead. */
  export const outboundSchema = CreateModerationRequest3Type$outboundSchema;
}

/** @internal */
export const Three2$inboundSchema: z.ZodType<Three2, z.ZodTypeDef, unknown> = z
  .object({
    type: CreateModerationRequest3Type$inboundSchema,
    text: z.string(),
  });

/** @internal */
export type Three2$Outbound = {
  type: string;
  text: string;
};

/** @internal */
export const Three2$outboundSchema: z.ZodType<
  Three2$Outbound,
  z.ZodTypeDef,
  Three2
> = z.object({
  type: CreateModerationRequest3Type$outboundSchema,
  text: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Three2$ {
  /** @deprecated use `Three2$inboundSchema` instead. */
  export const inboundSchema = Three2$inboundSchema;
  /** @deprecated use `Three2$outboundSchema` instead. */
  export const outboundSchema = Three2$outboundSchema;
  /** @deprecated use `Three2$Outbound` instead. */
  export type Outbound = Three2$Outbound;
}

/** @internal */
export const ThreeType$inboundSchema: z.ZodNativeEnum<typeof ThreeType> = z
  .nativeEnum(ThreeType);

/** @internal */
export const ThreeType$outboundSchema: z.ZodNativeEnum<typeof ThreeType> =
  ThreeType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ThreeType$ {
  /** @deprecated use `ThreeType$inboundSchema` instead. */
  export const inboundSchema = ThreeType$inboundSchema;
  /** @deprecated use `ThreeType$outboundSchema` instead. */
  export const outboundSchema = ThreeType$outboundSchema;
}

/** @internal */
export const ThreeImageUrl$inboundSchema: z.ZodType<
  ThreeImageUrl,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
});

/** @internal */
export type ThreeImageUrl$Outbound = {
  url: string;
};

/** @internal */
export const ThreeImageUrl$outboundSchema: z.ZodType<
  ThreeImageUrl$Outbound,
  z.ZodTypeDef,
  ThreeImageUrl
> = z.object({
  url: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ThreeImageUrl$ {
  /** @deprecated use `ThreeImageUrl$inboundSchema` instead. */
  export const inboundSchema = ThreeImageUrl$inboundSchema;
  /** @deprecated use `ThreeImageUrl$outboundSchema` instead. */
  export const outboundSchema = ThreeImageUrl$outboundSchema;
  /** @deprecated use `ThreeImageUrl$Outbound` instead. */
  export type Outbound = ThreeImageUrl$Outbound;
}

/** @internal */
export const Three1$inboundSchema: z.ZodType<Three1, z.ZodTypeDef, unknown> = z
  .object({
    type: ThreeType$inboundSchema,
    image_url: z.lazy(() => ThreeImageUrl$inboundSchema),
  }).transform((v) => {
    return remap$(v, {
      "image_url": "imageUrl",
    });
  });

/** @internal */
export type Three1$Outbound = {
  type: string;
  image_url: ThreeImageUrl$Outbound;
};

/** @internal */
export const Three1$outboundSchema: z.ZodType<
  Three1$Outbound,
  z.ZodTypeDef,
  Three1
> = z.object({
  type: ThreeType$outboundSchema,
  imageUrl: z.lazy(() => ThreeImageUrl$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    imageUrl: "image_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Three1$ {
  /** @deprecated use `Three1$inboundSchema` instead. */
  export const inboundSchema = Three1$inboundSchema;
  /** @deprecated use `Three1$outboundSchema` instead. */
  export const outboundSchema = Three1$outboundSchema;
  /** @deprecated use `Three1$Outbound` instead. */
  export type Outbound = Three1$Outbound;
}

/** @internal */
export const Three$inboundSchema: z.ZodType<Three, z.ZodTypeDef, unknown> = z
  .union([
    z.lazy(() => Three1$inboundSchema),
    z.lazy(() => Three2$inboundSchema),
  ]);

/** @internal */
export type Three$Outbound = Three1$Outbound | Three2$Outbound;

/** @internal */
export const Three$outboundSchema: z.ZodType<
  Three$Outbound,
  z.ZodTypeDef,
  Three
> = z.union([
  z.lazy(() => Three1$outboundSchema),
  z.lazy(() => Three2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Three$ {
  /** @deprecated use `Three$inboundSchema` instead. */
  export const inboundSchema = Three$inboundSchema;
  /** @deprecated use `Three$outboundSchema` instead. */
  export const outboundSchema = Three$outboundSchema;
  /** @deprecated use `Three$Outbound` instead. */
  export type Outbound = Three$Outbound;
}

/** @internal */
export const CreateModerationRequestInput$inboundSchema: z.ZodType<
  CreateModerationRequestInput,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.string(),
  z.array(z.string()),
  z.array(z.union([
    z.lazy(() => Three1$inboundSchema),
    z.lazy(() => Three2$inboundSchema),
  ])),
]);

/** @internal */
export type CreateModerationRequestInput$Outbound =
  | string
  | Array<string>
  | Array<Three1$Outbound | Three2$Outbound>;

/** @internal */
export const CreateModerationRequestInput$outboundSchema: z.ZodType<
  CreateModerationRequestInput$Outbound,
  z.ZodTypeDef,
  CreateModerationRequestInput
> = z.union([
  z.string(),
  z.array(z.string()),
  z.array(z.union([
    z.lazy(() => Three1$outboundSchema),
    z.lazy(() => Three2$outboundSchema),
  ])),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateModerationRequestInput$ {
  /** @deprecated use `CreateModerationRequestInput$inboundSchema` instead. */
  export const inboundSchema = CreateModerationRequestInput$inboundSchema;
  /** @deprecated use `CreateModerationRequestInput$outboundSchema` instead. */
  export const outboundSchema = CreateModerationRequestInput$outboundSchema;
  /** @deprecated use `CreateModerationRequestInput$Outbound` instead. */
  export type Outbound = CreateModerationRequestInput$Outbound;
}

/** @internal */
export const CreateModerationRequestModel2$inboundSchema: z.ZodNativeEnum<
  typeof CreateModerationRequestModel2
> = z.nativeEnum(CreateModerationRequestModel2);

/** @internal */
export const CreateModerationRequestModel2$outboundSchema: z.ZodNativeEnum<
  typeof CreateModerationRequestModel2
> = CreateModerationRequestModel2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateModerationRequestModel2$ {
  /** @deprecated use `CreateModerationRequestModel2$inboundSchema` instead. */
  export const inboundSchema = CreateModerationRequestModel2$inboundSchema;
  /** @deprecated use `CreateModerationRequestModel2$outboundSchema` instead. */
  export const outboundSchema = CreateModerationRequestModel2$outboundSchema;
}

/** @internal */
export const CreateModerationRequestModel$inboundSchema: z.ZodType<
  CreateModerationRequestModel,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), CreateModerationRequestModel2$inboundSchema]);

/** @internal */
export type CreateModerationRequestModel$Outbound = string | string;

/** @internal */
export const CreateModerationRequestModel$outboundSchema: z.ZodType<
  CreateModerationRequestModel$Outbound,
  z.ZodTypeDef,
  CreateModerationRequestModel
> = z.union([z.string(), CreateModerationRequestModel2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateModerationRequestModel$ {
  /** @deprecated use `CreateModerationRequestModel$inboundSchema` instead. */
  export const inboundSchema = CreateModerationRequestModel$inboundSchema;
  /** @deprecated use `CreateModerationRequestModel$outboundSchema` instead. */
  export const outboundSchema = CreateModerationRequestModel$outboundSchema;
  /** @deprecated use `CreateModerationRequestModel$Outbound` instead. */
  export type Outbound = CreateModerationRequestModel$Outbound;
}

/** @internal */
export const CreateModerationRequest$inboundSchema: z.ZodType<
  CreateModerationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  input: z.union([
    z.string(),
    z.array(z.string()),
    z.array(z.union([
      z.lazy(() => Three1$inboundSchema),
      z.lazy(() => Three2$inboundSchema),
    ])),
  ]),
  model: z.union([z.string(), CreateModerationRequestModel2$inboundSchema])
    .optional(),
});

/** @internal */
export type CreateModerationRequest$Outbound = {
  input: string | Array<string> | Array<Three1$Outbound | Three2$Outbound>;
  model?: string | string | undefined;
};

/** @internal */
export const CreateModerationRequest$outboundSchema: z.ZodType<
  CreateModerationRequest$Outbound,
  z.ZodTypeDef,
  CreateModerationRequest
> = z.object({
  input: z.union([
    z.string(),
    z.array(z.string()),
    z.array(z.union([
      z.lazy(() => Three1$outboundSchema),
      z.lazy(() => Three2$outboundSchema),
    ])),
  ]),
  model: z.union([z.string(), CreateModerationRequestModel2$outboundSchema])
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateModerationRequest$ {
  /** @deprecated use `CreateModerationRequest$inboundSchema` instead. */
  export const inboundSchema = CreateModerationRequest$inboundSchema;
  /** @deprecated use `CreateModerationRequest$outboundSchema` instead. */
  export const outboundSchema = CreateModerationRequest$outboundSchema;
  /** @deprecated use `CreateModerationRequest$Outbound` instead. */
  export type Outbound = CreateModerationRequest$Outbound;
}
