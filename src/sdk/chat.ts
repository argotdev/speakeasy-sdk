/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { chatCreateChatCompletion } from "../funcs/chatCreateChatCompletion.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Chat extends ClientSDK {
  /**
   * Creates a model response for the given chat conversation.
   */
  async createChatCompletion(
    request: components.CreateChatCompletionRequest,
    options?: RequestOptions,
  ): Promise<components.CreateChatCompletionResponse> {
    return unwrapAsync(chatCreateChatCompletion(
      this,
      request,
      options,
    ));
  }
}
