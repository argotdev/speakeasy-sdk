/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

/**
 * A list of the categories, and whether they are flagged or not.
 */
export type Categories = {
  /**
   * Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups (e.g., chess players) is harassment.
   */
  hate: boolean;
  /**
   * Hateful content that also includes violence or serious harm towards the targeted group based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste.
   */
  hateThreatening: boolean;
  /**
   * Content that expresses, incites, or promotes harassing language towards any target.
   */
  harassment: boolean;
  /**
   * Harassment content that also includes violence or serious harm towards any target.
   */
  harassmentThreatening: boolean;
  /**
   * Content that includes instructions or advice that facilitate the planning or execution of wrongdoing, or that gives advice or instruction on how to commit illicit acts. For example, "how to shoplift" would fit this category.
   */
  illicit: boolean;
  /**
   * Content that includes instructions or advice that facilitate the planning or execution of wrongdoing that also includes violence, or that gives advice or instruction on the procurement of any weapon.
   */
  illicitViolent: boolean;
  /**
   * Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders.
   */
  selfHarm: boolean;
  /**
   * Content where the speaker expresses that they are engaging or intend to engage in acts of self-harm, such as suicide, cutting, and eating disorders.
   */
  selfHarmIntent: boolean;
  /**
   * Content that encourages performing acts of self-harm, such as suicide, cutting, and eating disorders, or that gives instructions or advice on how to commit such acts.
   */
  selfHarmInstructions: boolean;
  /**
   * Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness).
   */
  sexual: boolean;
  /**
   * Sexual content that includes an individual who is under 18 years old.
   */
  sexualMinors: boolean;
  /**
   * Content that depicts death, violence, or physical injury.
   */
  violence: boolean;
  /**
   * Content that depicts death, violence, or physical injury in graphic detail.
   */
  violenceGraphic: boolean;
};

/**
 * A list of the categories along with their scores as predicted by model.
 */
export type CategoryScores = {
  /**
   * The score for the category 'hate'.
   */
  hate: number;
  /**
   * The score for the category 'hate/threatening'.
   */
  hateThreatening: number;
  /**
   * The score for the category 'harassment'.
   */
  harassment: number;
  /**
   * The score for the category 'harassment/threatening'.
   */
  harassmentThreatening: number;
  /**
   * The score for the category 'illicit'.
   */
  illicit: number;
  /**
   * The score for the category 'illicit/violent'.
   */
  illicitViolent: number;
  /**
   * The score for the category 'self-harm'.
   */
  selfHarm: number;
  /**
   * The score for the category 'self-harm/intent'.
   */
  selfHarmIntent: number;
  /**
   * The score for the category 'self-harm/instructions'.
   */
  selfHarmInstructions: number;
  /**
   * The score for the category 'sexual'.
   */
  sexual: number;
  /**
   * The score for the category 'sexual/minors'.
   */
  sexualMinors: number;
  /**
   * The score for the category 'violence'.
   */
  violence: number;
  /**
   * The score for the category 'violence/graphic'.
   */
  violenceGraphic: number;
};

export const Hate = {
  Text: "text",
} as const;
export type Hate = ClosedEnum<typeof Hate>;

export const HateThreatening = {
  Text: "text",
} as const;
export type HateThreatening = ClosedEnum<typeof HateThreatening>;

export const Harassment = {
  Text: "text",
} as const;
export type Harassment = ClosedEnum<typeof Harassment>;

export const HarassmentThreatening = {
  Text: "text",
} as const;
export type HarassmentThreatening = ClosedEnum<typeof HarassmentThreatening>;

export const Illicit = {
  Text: "text",
} as const;
export type Illicit = ClosedEnum<typeof Illicit>;

export const IllicitViolent = {
  Text: "text",
} as const;
export type IllicitViolent = ClosedEnum<typeof IllicitViolent>;

export const SelfHarm = {
  Text: "text",
  Image: "image",
} as const;
export type SelfHarm = ClosedEnum<typeof SelfHarm>;

export const SelfHarmIntent = {
  Text: "text",
  Image: "image",
} as const;
export type SelfHarmIntent = ClosedEnum<typeof SelfHarmIntent>;

export const SelfHarmInstructions = {
  Text: "text",
  Image: "image",
} as const;
export type SelfHarmInstructions = ClosedEnum<typeof SelfHarmInstructions>;

export const Sexual = {
  Text: "text",
  Image: "image",
} as const;
export type Sexual = ClosedEnum<typeof Sexual>;

export const SexualMinors = {
  Text: "text",
} as const;
export type SexualMinors = ClosedEnum<typeof SexualMinors>;

export const Violence = {
  Text: "text",
  Image: "image",
} as const;
export type Violence = ClosedEnum<typeof Violence>;

export const ViolenceGraphic = {
  Text: "text",
  Image: "image",
} as const;
export type ViolenceGraphic = ClosedEnum<typeof ViolenceGraphic>;

/**
 * A list of the categories along with the input type(s) that the score applies to.
 */
export type CategoryAppliedInputTypes = {
  /**
   * The applied input type(s) for the category 'hate'.
   */
  hate: Array<Hate>;
  /**
   * The applied input type(s) for the category 'hate/threatening'.
   */
  hateThreatening: Array<HateThreatening>;
  /**
   * The applied input type(s) for the category 'harassment'.
   */
  harassment: Array<Harassment>;
  /**
   * The applied input type(s) for the category 'harassment/threatening'.
   */
  harassmentThreatening: Array<HarassmentThreatening>;
  /**
   * The applied input type(s) for the category 'illicit'.
   */
  illicit: Array<Illicit>;
  /**
   * The applied input type(s) for the category 'illicit/violent'.
   */
  illicitViolent: Array<IllicitViolent>;
  /**
   * The applied input type(s) for the category 'self-harm'.
   */
  selfHarm: Array<SelfHarm>;
  /**
   * The applied input type(s) for the category 'self-harm/intent'.
   */
  selfHarmIntent: Array<SelfHarmIntent>;
  /**
   * The applied input type(s) for the category 'self-harm/instructions'.
   */
  selfHarmInstructions: Array<SelfHarmInstructions>;
  /**
   * The applied input type(s) for the category 'sexual'.
   */
  sexual: Array<Sexual>;
  /**
   * The applied input type(s) for the category 'sexual/minors'.
   */
  sexualMinors: Array<SexualMinors>;
  /**
   * The applied input type(s) for the category 'violence'.
   */
  violence: Array<Violence>;
  /**
   * The applied input type(s) for the category 'violence/graphic'.
   */
  violenceGraphic: Array<ViolenceGraphic>;
};

export type Results = {
  /**
   * Whether any of the below categories are flagged.
   */
  flagged: boolean;
  /**
   * A list of the categories, and whether they are flagged or not.
   */
  categories: Categories;
  /**
   * A list of the categories along with their scores as predicted by model.
   */
  categoryScores: CategoryScores;
  /**
   * A list of the categories along with the input type(s) that the score applies to.
   */
  categoryAppliedInputTypes: CategoryAppliedInputTypes;
};

/**
 * Represents if a given text input is potentially harmful.
 */
export type CreateModerationResponse = {
  /**
   * The unique identifier for the moderation request.
   */
  id: string;
  /**
   * The model used to generate the moderation results.
   */
  model: string;
  /**
   * A list of moderation objects.
   */
  results: Array<Results>;
};

/** @internal */
export const Categories$inboundSchema: z.ZodType<
  Categories,
  z.ZodTypeDef,
  unknown
> = z.object({
  hate: z.boolean(),
  "hate/threatening": z.boolean(),
  harassment: z.boolean(),
  "harassment/threatening": z.boolean(),
  illicit: z.boolean(),
  "illicit/violent": z.boolean(),
  "self-harm": z.boolean(),
  "self-harm/intent": z.boolean(),
  "self-harm/instructions": z.boolean(),
  sexual: z.boolean(),
  "sexual/minors": z.boolean(),
  violence: z.boolean(),
  "violence/graphic": z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "hate/threatening": "hateThreatening",
    "harassment/threatening": "harassmentThreatening",
    "illicit/violent": "illicitViolent",
    "self-harm": "selfHarm",
    "self-harm/intent": "selfHarmIntent",
    "self-harm/instructions": "selfHarmInstructions",
    "sexual/minors": "sexualMinors",
    "violence/graphic": "violenceGraphic",
  });
});

/** @internal */
export type Categories$Outbound = {
  hate: boolean;
  "hate/threatening": boolean;
  harassment: boolean;
  "harassment/threatening": boolean;
  illicit: boolean;
  "illicit/violent": boolean;
  "self-harm": boolean;
  "self-harm/intent": boolean;
  "self-harm/instructions": boolean;
  sexual: boolean;
  "sexual/minors": boolean;
  violence: boolean;
  "violence/graphic": boolean;
};

/** @internal */
export const Categories$outboundSchema: z.ZodType<
  Categories$Outbound,
  z.ZodTypeDef,
  Categories
> = z.object({
  hate: z.boolean(),
  hateThreatening: z.boolean(),
  harassment: z.boolean(),
  harassmentThreatening: z.boolean(),
  illicit: z.boolean(),
  illicitViolent: z.boolean(),
  selfHarm: z.boolean(),
  selfHarmIntent: z.boolean(),
  selfHarmInstructions: z.boolean(),
  sexual: z.boolean(),
  sexualMinors: z.boolean(),
  violence: z.boolean(),
  violenceGraphic: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    hateThreatening: "hate/threatening",
    harassmentThreatening: "harassment/threatening",
    illicitViolent: "illicit/violent",
    selfHarm: "self-harm",
    selfHarmIntent: "self-harm/intent",
    selfHarmInstructions: "self-harm/instructions",
    sexualMinors: "sexual/minors",
    violenceGraphic: "violence/graphic",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Categories$ {
  /** @deprecated use `Categories$inboundSchema` instead. */
  export const inboundSchema = Categories$inboundSchema;
  /** @deprecated use `Categories$outboundSchema` instead. */
  export const outboundSchema = Categories$outboundSchema;
  /** @deprecated use `Categories$Outbound` instead. */
  export type Outbound = Categories$Outbound;
}

/** @internal */
export const CategoryScores$inboundSchema: z.ZodType<
  CategoryScores,
  z.ZodTypeDef,
  unknown
> = z.object({
  hate: z.number(),
  "hate/threatening": z.number(),
  harassment: z.number(),
  "harassment/threatening": z.number(),
  illicit: z.number(),
  "illicit/violent": z.number(),
  "self-harm": z.number(),
  "self-harm/intent": z.number(),
  "self-harm/instructions": z.number(),
  sexual: z.number(),
  "sexual/minors": z.number(),
  violence: z.number(),
  "violence/graphic": z.number(),
}).transform((v) => {
  return remap$(v, {
    "hate/threatening": "hateThreatening",
    "harassment/threatening": "harassmentThreatening",
    "illicit/violent": "illicitViolent",
    "self-harm": "selfHarm",
    "self-harm/intent": "selfHarmIntent",
    "self-harm/instructions": "selfHarmInstructions",
    "sexual/minors": "sexualMinors",
    "violence/graphic": "violenceGraphic",
  });
});

/** @internal */
export type CategoryScores$Outbound = {
  hate: number;
  "hate/threatening": number;
  harassment: number;
  "harassment/threatening": number;
  illicit: number;
  "illicit/violent": number;
  "self-harm": number;
  "self-harm/intent": number;
  "self-harm/instructions": number;
  sexual: number;
  "sexual/minors": number;
  violence: number;
  "violence/graphic": number;
};

/** @internal */
export const CategoryScores$outboundSchema: z.ZodType<
  CategoryScores$Outbound,
  z.ZodTypeDef,
  CategoryScores
> = z.object({
  hate: z.number(),
  hateThreatening: z.number(),
  harassment: z.number(),
  harassmentThreatening: z.number(),
  illicit: z.number(),
  illicitViolent: z.number(),
  selfHarm: z.number(),
  selfHarmIntent: z.number(),
  selfHarmInstructions: z.number(),
  sexual: z.number(),
  sexualMinors: z.number(),
  violence: z.number(),
  violenceGraphic: z.number(),
}).transform((v) => {
  return remap$(v, {
    hateThreatening: "hate/threatening",
    harassmentThreatening: "harassment/threatening",
    illicitViolent: "illicit/violent",
    selfHarm: "self-harm",
    selfHarmIntent: "self-harm/intent",
    selfHarmInstructions: "self-harm/instructions",
    sexualMinors: "sexual/minors",
    violenceGraphic: "violence/graphic",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CategoryScores$ {
  /** @deprecated use `CategoryScores$inboundSchema` instead. */
  export const inboundSchema = CategoryScores$inboundSchema;
  /** @deprecated use `CategoryScores$outboundSchema` instead. */
  export const outboundSchema = CategoryScores$outboundSchema;
  /** @deprecated use `CategoryScores$Outbound` instead. */
  export type Outbound = CategoryScores$Outbound;
}

/** @internal */
export const Hate$inboundSchema: z.ZodNativeEnum<typeof Hate> = z.nativeEnum(
  Hate,
);

/** @internal */
export const Hate$outboundSchema: z.ZodNativeEnum<typeof Hate> =
  Hate$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Hate$ {
  /** @deprecated use `Hate$inboundSchema` instead. */
  export const inboundSchema = Hate$inboundSchema;
  /** @deprecated use `Hate$outboundSchema` instead. */
  export const outboundSchema = Hate$outboundSchema;
}

/** @internal */
export const HateThreatening$inboundSchema: z.ZodNativeEnum<
  typeof HateThreatening
> = z.nativeEnum(HateThreatening);

/** @internal */
export const HateThreatening$outboundSchema: z.ZodNativeEnum<
  typeof HateThreatening
> = HateThreatening$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HateThreatening$ {
  /** @deprecated use `HateThreatening$inboundSchema` instead. */
  export const inboundSchema = HateThreatening$inboundSchema;
  /** @deprecated use `HateThreatening$outboundSchema` instead. */
  export const outboundSchema = HateThreatening$outboundSchema;
}

/** @internal */
export const Harassment$inboundSchema: z.ZodNativeEnum<typeof Harassment> = z
  .nativeEnum(Harassment);

/** @internal */
export const Harassment$outboundSchema: z.ZodNativeEnum<typeof Harassment> =
  Harassment$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Harassment$ {
  /** @deprecated use `Harassment$inboundSchema` instead. */
  export const inboundSchema = Harassment$inboundSchema;
  /** @deprecated use `Harassment$outboundSchema` instead. */
  export const outboundSchema = Harassment$outboundSchema;
}

/** @internal */
export const HarassmentThreatening$inboundSchema: z.ZodNativeEnum<
  typeof HarassmentThreatening
> = z.nativeEnum(HarassmentThreatening);

/** @internal */
export const HarassmentThreatening$outboundSchema: z.ZodNativeEnum<
  typeof HarassmentThreatening
> = HarassmentThreatening$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HarassmentThreatening$ {
  /** @deprecated use `HarassmentThreatening$inboundSchema` instead. */
  export const inboundSchema = HarassmentThreatening$inboundSchema;
  /** @deprecated use `HarassmentThreatening$outboundSchema` instead. */
  export const outboundSchema = HarassmentThreatening$outboundSchema;
}

/** @internal */
export const Illicit$inboundSchema: z.ZodNativeEnum<typeof Illicit> = z
  .nativeEnum(Illicit);

/** @internal */
export const Illicit$outboundSchema: z.ZodNativeEnum<typeof Illicit> =
  Illicit$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Illicit$ {
  /** @deprecated use `Illicit$inboundSchema` instead. */
  export const inboundSchema = Illicit$inboundSchema;
  /** @deprecated use `Illicit$outboundSchema` instead. */
  export const outboundSchema = Illicit$outboundSchema;
}

/** @internal */
export const IllicitViolent$inboundSchema: z.ZodNativeEnum<
  typeof IllicitViolent
> = z.nativeEnum(IllicitViolent);

/** @internal */
export const IllicitViolent$outboundSchema: z.ZodNativeEnum<
  typeof IllicitViolent
> = IllicitViolent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IllicitViolent$ {
  /** @deprecated use `IllicitViolent$inboundSchema` instead. */
  export const inboundSchema = IllicitViolent$inboundSchema;
  /** @deprecated use `IllicitViolent$outboundSchema` instead. */
  export const outboundSchema = IllicitViolent$outboundSchema;
}

/** @internal */
export const SelfHarm$inboundSchema: z.ZodNativeEnum<typeof SelfHarm> = z
  .nativeEnum(SelfHarm);

/** @internal */
export const SelfHarm$outboundSchema: z.ZodNativeEnum<typeof SelfHarm> =
  SelfHarm$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SelfHarm$ {
  /** @deprecated use `SelfHarm$inboundSchema` instead. */
  export const inboundSchema = SelfHarm$inboundSchema;
  /** @deprecated use `SelfHarm$outboundSchema` instead. */
  export const outboundSchema = SelfHarm$outboundSchema;
}

/** @internal */
export const SelfHarmIntent$inboundSchema: z.ZodNativeEnum<
  typeof SelfHarmIntent
> = z.nativeEnum(SelfHarmIntent);

/** @internal */
export const SelfHarmIntent$outboundSchema: z.ZodNativeEnum<
  typeof SelfHarmIntent
> = SelfHarmIntent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SelfHarmIntent$ {
  /** @deprecated use `SelfHarmIntent$inboundSchema` instead. */
  export const inboundSchema = SelfHarmIntent$inboundSchema;
  /** @deprecated use `SelfHarmIntent$outboundSchema` instead. */
  export const outboundSchema = SelfHarmIntent$outboundSchema;
}

/** @internal */
export const SelfHarmInstructions$inboundSchema: z.ZodNativeEnum<
  typeof SelfHarmInstructions
> = z.nativeEnum(SelfHarmInstructions);

/** @internal */
export const SelfHarmInstructions$outboundSchema: z.ZodNativeEnum<
  typeof SelfHarmInstructions
> = SelfHarmInstructions$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SelfHarmInstructions$ {
  /** @deprecated use `SelfHarmInstructions$inboundSchema` instead. */
  export const inboundSchema = SelfHarmInstructions$inboundSchema;
  /** @deprecated use `SelfHarmInstructions$outboundSchema` instead. */
  export const outboundSchema = SelfHarmInstructions$outboundSchema;
}

/** @internal */
export const Sexual$inboundSchema: z.ZodNativeEnum<typeof Sexual> = z
  .nativeEnum(Sexual);

/** @internal */
export const Sexual$outboundSchema: z.ZodNativeEnum<typeof Sexual> =
  Sexual$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Sexual$ {
  /** @deprecated use `Sexual$inboundSchema` instead. */
  export const inboundSchema = Sexual$inboundSchema;
  /** @deprecated use `Sexual$outboundSchema` instead. */
  export const outboundSchema = Sexual$outboundSchema;
}

/** @internal */
export const SexualMinors$inboundSchema: z.ZodNativeEnum<typeof SexualMinors> =
  z.nativeEnum(SexualMinors);

/** @internal */
export const SexualMinors$outboundSchema: z.ZodNativeEnum<typeof SexualMinors> =
  SexualMinors$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SexualMinors$ {
  /** @deprecated use `SexualMinors$inboundSchema` instead. */
  export const inboundSchema = SexualMinors$inboundSchema;
  /** @deprecated use `SexualMinors$outboundSchema` instead. */
  export const outboundSchema = SexualMinors$outboundSchema;
}

/** @internal */
export const Violence$inboundSchema: z.ZodNativeEnum<typeof Violence> = z
  .nativeEnum(Violence);

/** @internal */
export const Violence$outboundSchema: z.ZodNativeEnum<typeof Violence> =
  Violence$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Violence$ {
  /** @deprecated use `Violence$inboundSchema` instead. */
  export const inboundSchema = Violence$inboundSchema;
  /** @deprecated use `Violence$outboundSchema` instead. */
  export const outboundSchema = Violence$outboundSchema;
}

/** @internal */
export const ViolenceGraphic$inboundSchema: z.ZodNativeEnum<
  typeof ViolenceGraphic
> = z.nativeEnum(ViolenceGraphic);

/** @internal */
export const ViolenceGraphic$outboundSchema: z.ZodNativeEnum<
  typeof ViolenceGraphic
> = ViolenceGraphic$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ViolenceGraphic$ {
  /** @deprecated use `ViolenceGraphic$inboundSchema` instead. */
  export const inboundSchema = ViolenceGraphic$inboundSchema;
  /** @deprecated use `ViolenceGraphic$outboundSchema` instead. */
  export const outboundSchema = ViolenceGraphic$outboundSchema;
}

/** @internal */
export const CategoryAppliedInputTypes$inboundSchema: z.ZodType<
  CategoryAppliedInputTypes,
  z.ZodTypeDef,
  unknown
> = z.object({
  hate: z.array(Hate$inboundSchema),
  "hate/threatening": z.array(HateThreatening$inboundSchema),
  harassment: z.array(Harassment$inboundSchema),
  "harassment/threatening": z.array(HarassmentThreatening$inboundSchema),
  illicit: z.array(Illicit$inboundSchema),
  "illicit/violent": z.array(IllicitViolent$inboundSchema),
  "self-harm": z.array(SelfHarm$inboundSchema),
  "self-harm/intent": z.array(SelfHarmIntent$inboundSchema),
  "self-harm/instructions": z.array(SelfHarmInstructions$inboundSchema),
  sexual: z.array(Sexual$inboundSchema),
  "sexual/minors": z.array(SexualMinors$inboundSchema),
  violence: z.array(Violence$inboundSchema),
  "violence/graphic": z.array(ViolenceGraphic$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "hate/threatening": "hateThreatening",
    "harassment/threatening": "harassmentThreatening",
    "illicit/violent": "illicitViolent",
    "self-harm": "selfHarm",
    "self-harm/intent": "selfHarmIntent",
    "self-harm/instructions": "selfHarmInstructions",
    "sexual/minors": "sexualMinors",
    "violence/graphic": "violenceGraphic",
  });
});

/** @internal */
export type CategoryAppliedInputTypes$Outbound = {
  hate: Array<string>;
  "hate/threatening": Array<string>;
  harassment: Array<string>;
  "harassment/threatening": Array<string>;
  illicit: Array<string>;
  "illicit/violent": Array<string>;
  "self-harm": Array<string>;
  "self-harm/intent": Array<string>;
  "self-harm/instructions": Array<string>;
  sexual: Array<string>;
  "sexual/minors": Array<string>;
  violence: Array<string>;
  "violence/graphic": Array<string>;
};

/** @internal */
export const CategoryAppliedInputTypes$outboundSchema: z.ZodType<
  CategoryAppliedInputTypes$Outbound,
  z.ZodTypeDef,
  CategoryAppliedInputTypes
> = z.object({
  hate: z.array(Hate$outboundSchema),
  hateThreatening: z.array(HateThreatening$outboundSchema),
  harassment: z.array(Harassment$outboundSchema),
  harassmentThreatening: z.array(HarassmentThreatening$outboundSchema),
  illicit: z.array(Illicit$outboundSchema),
  illicitViolent: z.array(IllicitViolent$outboundSchema),
  selfHarm: z.array(SelfHarm$outboundSchema),
  selfHarmIntent: z.array(SelfHarmIntent$outboundSchema),
  selfHarmInstructions: z.array(SelfHarmInstructions$outboundSchema),
  sexual: z.array(Sexual$outboundSchema),
  sexualMinors: z.array(SexualMinors$outboundSchema),
  violence: z.array(Violence$outboundSchema),
  violenceGraphic: z.array(ViolenceGraphic$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    hateThreatening: "hate/threatening",
    harassmentThreatening: "harassment/threatening",
    illicitViolent: "illicit/violent",
    selfHarm: "self-harm",
    selfHarmIntent: "self-harm/intent",
    selfHarmInstructions: "self-harm/instructions",
    sexualMinors: "sexual/minors",
    violenceGraphic: "violence/graphic",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CategoryAppliedInputTypes$ {
  /** @deprecated use `CategoryAppliedInputTypes$inboundSchema` instead. */
  export const inboundSchema = CategoryAppliedInputTypes$inboundSchema;
  /** @deprecated use `CategoryAppliedInputTypes$outboundSchema` instead. */
  export const outboundSchema = CategoryAppliedInputTypes$outboundSchema;
  /** @deprecated use `CategoryAppliedInputTypes$Outbound` instead. */
  export type Outbound = CategoryAppliedInputTypes$Outbound;
}

/** @internal */
export const Results$inboundSchema: z.ZodType<Results, z.ZodTypeDef, unknown> =
  z.object({
    flagged: z.boolean(),
    categories: z.lazy(() => Categories$inboundSchema),
    category_scores: z.lazy(() => CategoryScores$inboundSchema),
    category_applied_input_types: z.lazy(() =>
      CategoryAppliedInputTypes$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "category_scores": "categoryScores",
      "category_applied_input_types": "categoryAppliedInputTypes",
    });
  });

/** @internal */
export type Results$Outbound = {
  flagged: boolean;
  categories: Categories$Outbound;
  category_scores: CategoryScores$Outbound;
  category_applied_input_types: CategoryAppliedInputTypes$Outbound;
};

/** @internal */
export const Results$outboundSchema: z.ZodType<
  Results$Outbound,
  z.ZodTypeDef,
  Results
> = z.object({
  flagged: z.boolean(),
  categories: z.lazy(() => Categories$outboundSchema),
  categoryScores: z.lazy(() => CategoryScores$outboundSchema),
  categoryAppliedInputTypes: z.lazy(() =>
    CategoryAppliedInputTypes$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    categoryScores: "category_scores",
    categoryAppliedInputTypes: "category_applied_input_types",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Results$ {
  /** @deprecated use `Results$inboundSchema` instead. */
  export const inboundSchema = Results$inboundSchema;
  /** @deprecated use `Results$outboundSchema` instead. */
  export const outboundSchema = Results$outboundSchema;
  /** @deprecated use `Results$Outbound` instead. */
  export type Outbound = Results$Outbound;
}

/** @internal */
export const CreateModerationResponse$inboundSchema: z.ZodType<
  CreateModerationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  model: z.string(),
  results: z.array(z.lazy(() => Results$inboundSchema)),
});

/** @internal */
export type CreateModerationResponse$Outbound = {
  id: string;
  model: string;
  results: Array<Results$Outbound>;
};

/** @internal */
export const CreateModerationResponse$outboundSchema: z.ZodType<
  CreateModerationResponse$Outbound,
  z.ZodTypeDef,
  CreateModerationResponse
> = z.object({
  id: z.string(),
  model: z.string(),
  results: z.array(z.lazy(() => Results$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateModerationResponse$ {
  /** @deprecated use `CreateModerationResponse$inboundSchema` instead. */
  export const inboundSchema = CreateModerationResponse$inboundSchema;
  /** @deprecated use `CreateModerationResponse$outboundSchema` instead. */
  export const outboundSchema = CreateModerationResponse$outboundSchema;
  /** @deprecated use `CreateModerationResponse$Outbound` instead. */
  export type Outbound = CreateModerationResponse$Outbound;
}
