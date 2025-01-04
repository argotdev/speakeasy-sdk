/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Always `file_path`.
 */
export const MessageContentTextAnnotationsFilePathObjectType = {
  FilePath: "file_path",
} as const;
/**
 * Always `file_path`.
 */
export type MessageContentTextAnnotationsFilePathObjectType = ClosedEnum<
  typeof MessageContentTextAnnotationsFilePathObjectType
>;

export type FilePath = {
  /**
   * The ID of the file that was generated.
   */
  fileId: string;
};

/**
 * A URL for the file that's generated when the assistant used the `code_interpreter` tool to generate a file.
 */
export type MessageContentTextAnnotationsFilePathObject = {
  /**
   * Always `file_path`.
   */
  type: MessageContentTextAnnotationsFilePathObjectType;
  /**
   * The text in the message content that needs to be replaced.
   */
  text: string;
  filePath: FilePath;
  startIndex: number;
  endIndex: number;
};

/** @internal */
export const MessageContentTextAnnotationsFilePathObjectType$inboundSchema:
  z.ZodNativeEnum<typeof MessageContentTextAnnotationsFilePathObjectType> = z
    .nativeEnum(MessageContentTextAnnotationsFilePathObjectType);

/** @internal */
export const MessageContentTextAnnotationsFilePathObjectType$outboundSchema:
  z.ZodNativeEnum<typeof MessageContentTextAnnotationsFilePathObjectType> =
    MessageContentTextAnnotationsFilePathObjectType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageContentTextAnnotationsFilePathObjectType$ {
  /** @deprecated use `MessageContentTextAnnotationsFilePathObjectType$inboundSchema` instead. */
  export const inboundSchema =
    MessageContentTextAnnotationsFilePathObjectType$inboundSchema;
  /** @deprecated use `MessageContentTextAnnotationsFilePathObjectType$outboundSchema` instead. */
  export const outboundSchema =
    MessageContentTextAnnotationsFilePathObjectType$outboundSchema;
}

/** @internal */
export const FilePath$inboundSchema: z.ZodType<
  FilePath,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "file_id": "fileId",
  });
});

/** @internal */
export type FilePath$Outbound = {
  file_id: string;
};

/** @internal */
export const FilePath$outboundSchema: z.ZodType<
  FilePath$Outbound,
  z.ZodTypeDef,
  FilePath
> = z.object({
  fileId: z.string(),
}).transform((v) => {
  return remap$(v, {
    fileId: "file_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FilePath$ {
  /** @deprecated use `FilePath$inboundSchema` instead. */
  export const inboundSchema = FilePath$inboundSchema;
  /** @deprecated use `FilePath$outboundSchema` instead. */
  export const outboundSchema = FilePath$outboundSchema;
  /** @deprecated use `FilePath$Outbound` instead. */
  export type Outbound = FilePath$Outbound;
}

export function filePathToJSON(filePath: FilePath): string {
  return JSON.stringify(FilePath$outboundSchema.parse(filePath));
}

export function filePathFromJSON(
  jsonString: string,
): SafeParseResult<FilePath, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FilePath$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FilePath' from JSON`,
  );
}

/** @internal */
export const MessageContentTextAnnotationsFilePathObject$inboundSchema:
  z.ZodType<
    MessageContentTextAnnotationsFilePathObject,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: MessageContentTextAnnotationsFilePathObjectType$inboundSchema,
    text: z.string(),
    file_path: z.lazy(() => FilePath$inboundSchema),
    start_index: z.number().int(),
    end_index: z.number().int(),
  }).transform((v) => {
    return remap$(v, {
      "file_path": "filePath",
      "start_index": "startIndex",
      "end_index": "endIndex",
    });
  });

/** @internal */
export type MessageContentTextAnnotationsFilePathObject$Outbound = {
  type: string;
  text: string;
  file_path: FilePath$Outbound;
  start_index: number;
  end_index: number;
};

/** @internal */
export const MessageContentTextAnnotationsFilePathObject$outboundSchema:
  z.ZodType<
    MessageContentTextAnnotationsFilePathObject$Outbound,
    z.ZodTypeDef,
    MessageContentTextAnnotationsFilePathObject
  > = z.object({
    type: MessageContentTextAnnotationsFilePathObjectType$outboundSchema,
    text: z.string(),
    filePath: z.lazy(() => FilePath$outboundSchema),
    startIndex: z.number().int(),
    endIndex: z.number().int(),
  }).transform((v) => {
    return remap$(v, {
      filePath: "file_path",
      startIndex: "start_index",
      endIndex: "end_index",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageContentTextAnnotationsFilePathObject$ {
  /** @deprecated use `MessageContentTextAnnotationsFilePathObject$inboundSchema` instead. */
  export const inboundSchema =
    MessageContentTextAnnotationsFilePathObject$inboundSchema;
  /** @deprecated use `MessageContentTextAnnotationsFilePathObject$outboundSchema` instead. */
  export const outboundSchema =
    MessageContentTextAnnotationsFilePathObject$outboundSchema;
  /** @deprecated use `MessageContentTextAnnotationsFilePathObject$Outbound` instead. */
  export type Outbound = MessageContentTextAnnotationsFilePathObject$Outbound;
}

export function messageContentTextAnnotationsFilePathObjectToJSON(
  messageContentTextAnnotationsFilePathObject:
    MessageContentTextAnnotationsFilePathObject,
): string {
  return JSON.stringify(
    MessageContentTextAnnotationsFilePathObject$outboundSchema.parse(
      messageContentTextAnnotationsFilePathObject,
    ),
  );
}

export function messageContentTextAnnotationsFilePathObjectFromJSON(
  jsonString: string,
): SafeParseResult<
  MessageContentTextAnnotationsFilePathObject,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      MessageContentTextAnnotationsFilePathObject$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'MessageContentTextAnnotationsFilePathObject' from JSON`,
  );
}
