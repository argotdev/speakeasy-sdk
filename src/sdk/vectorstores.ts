/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { vectorStoresCancelVectorStoreFileBatch } from "../funcs/vectorStoresCancelVectorStoreFileBatch.js";
import { vectorStoresCreateVectorStore } from "../funcs/vectorStoresCreateVectorStore.js";
import { vectorStoresCreateVectorStoreFile } from "../funcs/vectorStoresCreateVectorStoreFile.js";
import { vectorStoresCreateVectorStoreFileBatch } from "../funcs/vectorStoresCreateVectorStoreFileBatch.js";
import { vectorStoresDeleteVectorStore } from "../funcs/vectorStoresDeleteVectorStore.js";
import { vectorStoresDeleteVectorStoreFile } from "../funcs/vectorStoresDeleteVectorStoreFile.js";
import { vectorStoresGetVectorStore } from "../funcs/vectorStoresGetVectorStore.js";
import { vectorStoresGetVectorStoreFile } from "../funcs/vectorStoresGetVectorStoreFile.js";
import { vectorStoresGetVectorStoreFileBatch } from "../funcs/vectorStoresGetVectorStoreFileBatch.js";
import { vectorStoresListFilesInVectorStoreBatch } from "../funcs/vectorStoresListFilesInVectorStoreBatch.js";
import { vectorStoresListVectorStoreFiles } from "../funcs/vectorStoresListVectorStoreFiles.js";
import { vectorStoresListVectorStores } from "../funcs/vectorStoresListVectorStores.js";
import { vectorStoresModifyVectorStore } from "../funcs/vectorStoresModifyVectorStore.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class VectorStores extends ClientSDK {
  /**
   * Returns a list of vector stores.
   */
  async listVectorStores(
    request: operations.ListVectorStoresRequest,
    options?: RequestOptions,
  ): Promise<components.ListVectorStoresResponse> {
    return unwrapAsync(vectorStoresListVectorStores(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a vector store.
   */
  async createVectorStore(
    request: components.CreateVectorStoreRequest,
    options?: RequestOptions,
  ): Promise<components.VectorStoreObject> {
    return unwrapAsync(vectorStoresCreateVectorStore(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieves a vector store.
   */
  async getVectorStore(
    request: operations.GetVectorStoreRequest,
    options?: RequestOptions,
  ): Promise<components.VectorStoreObject> {
    return unwrapAsync(vectorStoresGetVectorStore(
      this,
      request,
      options,
    ));
  }

  /**
   * Modifies a vector store.
   */
  async modifyVectorStore(
    request: operations.ModifyVectorStoreRequest,
    options?: RequestOptions,
  ): Promise<components.VectorStoreObject> {
    return unwrapAsync(vectorStoresModifyVectorStore(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a vector store.
   */
  async deleteVectorStore(
    request: operations.DeleteVectorStoreRequest,
    options?: RequestOptions,
  ): Promise<components.DeleteVectorStoreResponse> {
    return unwrapAsync(vectorStoresDeleteVectorStore(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns a list of vector store files.
   */
  async listVectorStoreFiles(
    request: operations.ListVectorStoreFilesRequest,
    options?: RequestOptions,
  ): Promise<components.ListVectorStoreFilesResponse> {
    return unwrapAsync(vectorStoresListVectorStoreFiles(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a vector store file by attaching a [File](/docs/api-reference/files) to a [vector store](/docs/api-reference/vector-stores/object).
   */
  async createVectorStoreFile(
    request: operations.CreateVectorStoreFileRequest,
    options?: RequestOptions,
  ): Promise<components.VectorStoreFileObject> {
    return unwrapAsync(vectorStoresCreateVectorStoreFile(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieves a vector store file.
   */
  async getVectorStoreFile(
    request: operations.GetVectorStoreFileRequest,
    options?: RequestOptions,
  ): Promise<components.VectorStoreFileObject> {
    return unwrapAsync(vectorStoresGetVectorStoreFile(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted. To delete the file, use the [delete file](/docs/api-reference/files/delete) endpoint.
   */
  async deleteVectorStoreFile(
    request: operations.DeleteVectorStoreFileRequest,
    options?: RequestOptions,
  ): Promise<components.DeleteVectorStoreFileResponse> {
    return unwrapAsync(vectorStoresDeleteVectorStoreFile(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a vector store file batch.
   */
  async createVectorStoreFileBatch(
    request: operations.CreateVectorStoreFileBatchRequest,
    options?: RequestOptions,
  ): Promise<components.VectorStoreFileBatchObject> {
    return unwrapAsync(vectorStoresCreateVectorStoreFileBatch(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieves a vector store file batch.
   */
  async getVectorStoreFileBatch(
    request: operations.GetVectorStoreFileBatchRequest,
    options?: RequestOptions,
  ): Promise<components.VectorStoreFileBatchObject> {
    return unwrapAsync(vectorStoresGetVectorStoreFileBatch(
      this,
      request,
      options,
    ));
  }

  /**
   * Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible.
   */
  async cancelVectorStoreFileBatch(
    request: operations.CancelVectorStoreFileBatchRequest,
    options?: RequestOptions,
  ): Promise<components.VectorStoreFileBatchObject> {
    return unwrapAsync(vectorStoresCancelVectorStoreFileBatch(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns a list of vector store files in a batch.
   */
  async listFilesInVectorStoreBatch(
    request: operations.ListFilesInVectorStoreBatchRequest,
    options?: RequestOptions,
  ): Promise<components.ListVectorStoreFilesResponse> {
    return unwrapAsync(vectorStoresListFilesInVectorStoreBatch(
      this,
      request,
      options,
    ));
  }
}
