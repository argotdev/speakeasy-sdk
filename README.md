# argot-open-ai

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *argot-open-ai* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=argot-open-ai&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/argot/argot). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

OpenAI API: The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [argot-open-ai](#argot-open-ai)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add argot-open-ai
```

### PNPM

```bash
pnpm add argot-open-ai
```

### Bun

```bash
bun add argot-open-ai
```

### Yarn

```bash
yarn add argot-open-ai zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.chat.createChatCompletion({
    messages: [
      {
        content: "<value>",
        role: "user",
      },
      {
        content: [
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "image_url",
            imageUrl: {
              url: "https://fixed-circumference.com",
            },
          },
        ],
        role: "user",
      },
      {
        role: "tool",
        content: "<value>",
        toolCallId: "<id>",
      },
    ],
    model: "gpt-4o",
    n: 1,
    temperature: 1,
    topP: 1,
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [assistants](docs/sdks/assistants/README.md)

* [listAssistants](docs/sdks/assistants/README.md#listassistants) - Returns a list of assistants.
* [createAssistant](docs/sdks/assistants/README.md#createassistant) - Create an assistant with a model and instructions.
* [getAssistant](docs/sdks/assistants/README.md#getassistant) - Retrieves an assistant.
* [modifyAssistant](docs/sdks/assistants/README.md#modifyassistant) - Modifies an assistant.
* [deleteAssistant](docs/sdks/assistants/README.md#deleteassistant) - Delete an assistant.
* [createThread](docs/sdks/assistants/README.md#createthread) - Create a thread.
* [getThread](docs/sdks/assistants/README.md#getthread) - Retrieves a thread.
* [modifyThread](docs/sdks/assistants/README.md#modifythread) - Modifies a thread.
* [deleteThread](docs/sdks/assistants/README.md#deletethread) - Delete a thread.
* [listMessages](docs/sdks/assistants/README.md#listmessages) - Returns a list of messages for a given thread.
* [createMessage](docs/sdks/assistants/README.md#createmessage) - Create a message.
* [getMessage](docs/sdks/assistants/README.md#getmessage) - Retrieve a message.
* [modifyMessage](docs/sdks/assistants/README.md#modifymessage) - Modifies a message.
* [deleteMessage](docs/sdks/assistants/README.md#deletemessage) - Deletes a message.
* [createThreadAndRun](docs/sdks/assistants/README.md#createthreadandrun) - Create a thread and run it in one request.
* [listRuns](docs/sdks/assistants/README.md#listruns) - Returns a list of runs belonging to a thread.
* [createRun](docs/sdks/assistants/README.md#createrun) - Create a run.
* [getRun](docs/sdks/assistants/README.md#getrun) - Retrieves a run.
* [modifyRun](docs/sdks/assistants/README.md#modifyrun) - Modifies a run.
* [submitToolOuputsToRun](docs/sdks/assistants/README.md#submittoolouputstorun) - When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.

* [cancelRun](docs/sdks/assistants/README.md#cancelrun) - Cancels a run that is `in_progress`.
* [listRunSteps](docs/sdks/assistants/README.md#listrunsteps) - Returns a list of run steps belonging to a run.
* [getRunStep](docs/sdks/assistants/README.md#getrunstep) - Retrieves a run step.

### [audio](docs/sdks/audio/README.md)

* [createSpeech](docs/sdks/audio/README.md#createspeech) - Generates audio from the input text.
* [createTranscription](docs/sdks/audio/README.md#createtranscription) - Transcribes audio into the input language.
* [createTranslation](docs/sdks/audio/README.md#createtranslation) - Translates audio into English.

### [auditLogs](docs/sdks/auditlogs/README.md)

* [listAuditLogs](docs/sdks/auditlogs/README.md#listauditlogs) - List user actions and configuration changes within this organization.

### [batch](docs/sdks/batch/README.md)

* [createBatch](docs/sdks/batch/README.md#createbatch) - Creates and executes a batch from an uploaded file of requests
* [listBatches](docs/sdks/batch/README.md#listbatches) - List your organization's batches.
* [retrieveBatch](docs/sdks/batch/README.md#retrievebatch) - Retrieves a batch.
* [cancelBatch](docs/sdks/batch/README.md#cancelbatch) - Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file.

### [chat](docs/sdks/chat/README.md)

* [createChatCompletion](docs/sdks/chat/README.md#createchatcompletion) - Creates a model response for the given chat conversation.

### [completions](docs/sdks/completions/README.md)

* [createCompletion](docs/sdks/completions/README.md#createcompletion) - Creates a completion for the provided prompt and parameters.

### [embeddings](docs/sdks/embeddings/README.md)

* [createEmbedding](docs/sdks/embeddings/README.md#createembedding) - Creates an embedding vector representing the input text.

### [files](docs/sdks/files/README.md)

* [listFiles](docs/sdks/files/README.md#listfiles) - Returns a list of files that belong to the user's organization.
* [createFile](docs/sdks/files/README.md#createfile) - Upload a file that can be used across various endpoints. Individual files can be up to 512 MB, and the size of all files uploaded by one organization can be up to 100 GB.

The Assistants API supports files up to 2 million tokens and of specific file types. See the [Assistants Tools guide](/docs/assistants/tools) for details.

The Fine-tuning API only supports `.jsonl` files. The input also has certain required formats for fine-tuning [chat](/docs/api-reference/fine-tuning/chat-input) or [completions](/docs/api-reference/fine-tuning/completions-input) models.

The Batch API only supports `.jsonl` files up to 100 MB in size. The input also has a specific required [format](/docs/api-reference/batch/request-input).

Please [contact us](https://help.openai.com/) if you need to increase these storage limits.

* [deleteFile](docs/sdks/files/README.md#deletefile) - Delete a file.
* [retrieveFile](docs/sdks/files/README.md#retrievefile) - Returns information about a specific file.
* [downloadFile](docs/sdks/files/README.md#downloadfile) - Returns the contents of the specified file.

### [fineTuning](docs/sdks/finetuning/README.md)

* [createFineTuningJob](docs/sdks/finetuning/README.md#createfinetuningjob) - Creates a fine-tuning job which begins the process of creating a new model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/fine-tuning)

* [listPaginatedFineTuningJobs](docs/sdks/finetuning/README.md#listpaginatedfinetuningjobs) - List your organization's fine-tuning jobs

* [retrieveFineTuningJob](docs/sdks/finetuning/README.md#retrievefinetuningjob) - Get info about a fine-tuning job.

[Learn more about fine-tuning](/docs/guides/fine-tuning)

* [listFineTuningEvents](docs/sdks/finetuning/README.md#listfinetuningevents) - Get status updates for a fine-tuning job.

* [cancelFineTuningJob](docs/sdks/finetuning/README.md#cancelfinetuningjob) - Immediately cancel a fine-tune job.

* [listFineTuningJobCheckpoints](docs/sdks/finetuning/README.md#listfinetuningjobcheckpoints) - List checkpoints for a fine-tuning job.


### [images](docs/sdks/images/README.md)

* [createImage](docs/sdks/images/README.md#createimage) - Creates an image given a prompt.
* [createImageEdit](docs/sdks/images/README.md#createimageedit) - Creates an edited or extended image given an original image and a prompt.
* [createImageVariation](docs/sdks/images/README.md#createimagevariation) - Creates a variation of a given image.

### [invites](docs/sdks/invites/README.md)

* [listInvites](docs/sdks/invites/README.md#listinvites) - Returns a list of invites in the organization.
* [inviteUser](docs/sdks/invites/README.md#inviteuser) - Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization.
* [retrieveInvite](docs/sdks/invites/README.md#retrieveinvite) - Retrieves an invite.
* [deleteInvite](docs/sdks/invites/README.md#deleteinvite) - Delete an invite. If the invite has already been accepted, it cannot be deleted.

### [models](docs/sdks/models/README.md)

* [listModels](docs/sdks/models/README.md#listmodels) - Lists the currently available models, and provides basic information about each one such as the owner and availability.
* [retrieveModel](docs/sdks/models/README.md#retrievemodel) - Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
* [deleteModel](docs/sdks/models/README.md#deletemodel) - Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.

### [moderations](docs/sdks/moderations/README.md)

* [createModeration](docs/sdks/moderations/README.md#createmoderation) - Classifies if text and/or image inputs are potentially harmful. Learn
more in the [moderation guide](/docs/guides/moderation).


### [projects](docs/sdks/projects/README.md)

* [listProjects](docs/sdks/projects/README.md#listprojects) - Returns a list of projects.
* [createProject](docs/sdks/projects/README.md#createproject) - Create a new project in the organization. Projects can be created and archived, but cannot be deleted.
* [retrieveProject](docs/sdks/projects/README.md#retrieveproject) - Retrieves a project.
* [modifyProject](docs/sdks/projects/README.md#modifyproject) - Modifies a project in the organization.
* [archiveProject](docs/sdks/projects/README.md#archiveproject) - Archives a project in the organization. Archived projects cannot be used or updated.
* [listProjectUsers](docs/sdks/projects/README.md#listprojectusers) - Returns a list of users in the project.
* [createProjectUser](docs/sdks/projects/README.md#createprojectuser) - Adds a user to the project. Users must already be members of the organization to be added to a project.
* [retrieveProjectUser](docs/sdks/projects/README.md#retrieveprojectuser) - Retrieves a user in the project.
* [modifyProjectUser](docs/sdks/projects/README.md#modifyprojectuser) - Modifies a user's role in the project.
* [deleteProjectUser](docs/sdks/projects/README.md#deleteprojectuser) - Deletes a user from the project.
* [listProjectServiceAccounts](docs/sdks/projects/README.md#listprojectserviceaccounts) - Returns a list of service accounts in the project.
* [createProjectServiceAccount](docs/sdks/projects/README.md#createprojectserviceaccount) - Creates a new service account in the project. This also returns an unredacted API key for the service account.
* [retrieveProjectServiceAccount](docs/sdks/projects/README.md#retrieveprojectserviceaccount) - Retrieves a service account in the project.
* [deleteProjectServiceAccount](docs/sdks/projects/README.md#deleteprojectserviceaccount) - Deletes a service account from the project.
* [listProjectApiKeys](docs/sdks/projects/README.md#listprojectapikeys) - Returns a list of API keys in the project.
* [retrieveProjectApiKey](docs/sdks/projects/README.md#retrieveprojectapikey) - Retrieves an API key in the project.
* [deleteProjectApiKey](docs/sdks/projects/README.md#deleteprojectapikey) - Deletes an API key from the project.

### [uploads](docs/sdks/uploads/README.md)

* [createUpload](docs/sdks/uploads/README.md#createupload) - Creates an intermediate [Upload](/docs/api-reference/uploads/object) object that you can add [Parts](/docs/api-reference/uploads/part-object) to. Currently, an Upload can accept at most 8 GB in total and expires after an hour after you create it.

Once you complete the Upload, we will create a [File](/docs/api-reference/files/object) object that contains all the parts you uploaded. This File is usable in the rest of our platform as a regular File object.

For certain `purpose`s, the correct `mime_type` must be specified. Please refer to documentation for the supported MIME types for your use case:
- [Assistants](/docs/assistants/tools/file-search/supported-files)

For guidance on the proper filename extensions for each purpose, please follow the documentation on [creating a File](/docs/api-reference/files/create).

* [addUploadPart](docs/sdks/uploads/README.md#adduploadpart) - Adds a [Part](/docs/api-reference/uploads/part-object) to an [Upload](/docs/api-reference/uploads/object) object. A Part represents a chunk of bytes from the file you are trying to upload. 

Each Part can be at most 64 MB, and you can add Parts until you hit the Upload maximum of 8 GB.

It is possible to add multiple Parts in parallel. You can decide the intended order of the Parts when you [complete the Upload](/docs/api-reference/uploads/complete).

* [completeUpload](docs/sdks/uploads/README.md#completeupload) - Completes the [Upload](/docs/api-reference/uploads/object). 

Within the returned Upload object, there is a nested [File](/docs/api-reference/files/object) object that is ready to use in the rest of the platform.

You can specify the order of the Parts by passing in an ordered list of the Part IDs.

The number of bytes uploaded upon completion must match the number of bytes initially specified when creating the Upload object. No Parts may be added after an Upload is completed.

* [cancelUpload](docs/sdks/uploads/README.md#cancelupload) - Cancels the Upload. No Parts may be added after an Upload is cancelled.


### [users](docs/sdks/users/README.md)

* [listUsers](docs/sdks/users/README.md#listusers) - Lists all of the users in the organization.
* [retrieveUser](docs/sdks/users/README.md#retrieveuser) - Retrieves a user by their identifier.
* [modifyUser](docs/sdks/users/README.md#modifyuser) - Modifies a user's role in the organization.
* [deleteUser](docs/sdks/users/README.md#deleteuser) - Deletes a user from the organization.

### [vectorStores](docs/sdks/vectorstores/README.md)

* [listVectorStores](docs/sdks/vectorstores/README.md#listvectorstores) - Returns a list of vector stores.
* [createVectorStore](docs/sdks/vectorstores/README.md#createvectorstore) - Create a vector store.
* [getVectorStore](docs/sdks/vectorstores/README.md#getvectorstore) - Retrieves a vector store.
* [modifyVectorStore](docs/sdks/vectorstores/README.md#modifyvectorstore) - Modifies a vector store.
* [deleteVectorStore](docs/sdks/vectorstores/README.md#deletevectorstore) - Delete a vector store.
* [listVectorStoreFiles](docs/sdks/vectorstores/README.md#listvectorstorefiles) - Returns a list of vector store files.
* [createVectorStoreFile](docs/sdks/vectorstores/README.md#createvectorstorefile) - Create a vector store file by attaching a [File](/docs/api-reference/files) to a [vector store](/docs/api-reference/vector-stores/object).
* [getVectorStoreFile](docs/sdks/vectorstores/README.md#getvectorstorefile) - Retrieves a vector store file.
* [deleteVectorStoreFile](docs/sdks/vectorstores/README.md#deletevectorstorefile) - Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted. To delete the file, use the [delete file](/docs/api-reference/files/delete) endpoint.
* [createVectorStoreFileBatch](docs/sdks/vectorstores/README.md#createvectorstorefilebatch) - Create a vector store file batch.
* [getVectorStoreFileBatch](docs/sdks/vectorstores/README.md#getvectorstorefilebatch) - Retrieves a vector store file batch.
* [cancelVectorStoreFileBatch](docs/sdks/vectorstores/README.md#cancelvectorstorefilebatch) - Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible.
* [listFilesInVectorStoreBatch](docs/sdks/vectorstores/README.md#listfilesinvectorstorebatch) - Returns a list of vector store files in a batch.

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`assistantsCancelRun`](docs/sdks/assistants/README.md#cancelrun) - Cancels a run that is `in_progress`.
- [`assistantsCreateAssistant`](docs/sdks/assistants/README.md#createassistant) - Create an assistant with a model and instructions.
- [`assistantsCreateMessage`](docs/sdks/assistants/README.md#createmessage) - Create a message.
- [`assistantsCreateRun`](docs/sdks/assistants/README.md#createrun) - Create a run.
- [`assistantsCreateThread`](docs/sdks/assistants/README.md#createthread) - Create a thread.
- [`assistantsCreateThreadAndRun`](docs/sdks/assistants/README.md#createthreadandrun) - Create a thread and run it in one request.
- [`assistantsDeleteAssistant`](docs/sdks/assistants/README.md#deleteassistant) - Delete an assistant.
- [`assistantsDeleteMessage`](docs/sdks/assistants/README.md#deletemessage) - Deletes a message.
- [`assistantsDeleteThread`](docs/sdks/assistants/README.md#deletethread) - Delete a thread.
- [`assistantsGetAssistant`](docs/sdks/assistants/README.md#getassistant) - Retrieves an assistant.
- [`assistantsGetMessage`](docs/sdks/assistants/README.md#getmessage) - Retrieve a message.
- [`assistantsGetRun`](docs/sdks/assistants/README.md#getrun) - Retrieves a run.
- [`assistantsGetRunStep`](docs/sdks/assistants/README.md#getrunstep) - Retrieves a run step.
- [`assistantsGetThread`](docs/sdks/assistants/README.md#getthread) - Retrieves a thread.
- [`assistantsListAssistants`](docs/sdks/assistants/README.md#listassistants) - Returns a list of assistants.
- [`assistantsListMessages`](docs/sdks/assistants/README.md#listmessages) - Returns a list of messages for a given thread.
- [`assistantsListRuns`](docs/sdks/assistants/README.md#listruns) - Returns a list of runs belonging to a thread.
- [`assistantsListRunSteps`](docs/sdks/assistants/README.md#listrunsteps) - Returns a list of run steps belonging to a run.
- [`assistantsModifyAssistant`](docs/sdks/assistants/README.md#modifyassistant) - Modifies an assistant.
- [`assistantsModifyMessage`](docs/sdks/assistants/README.md#modifymessage) - Modifies a message.
- [`assistantsModifyRun`](docs/sdks/assistants/README.md#modifyrun) - Modifies a run.
- [`assistantsModifyThread`](docs/sdks/assistants/README.md#modifythread) - Modifies a thread.
- [`assistantsSubmitToolOuputsToRun`](docs/sdks/assistants/README.md#submittoolouputstorun) - When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.

- [`audioCreateSpeech`](docs/sdks/audio/README.md#createspeech) - Generates audio from the input text.
- [`audioCreateTranscription`](docs/sdks/audio/README.md#createtranscription) - Transcribes audio into the input language.
- [`audioCreateTranslation`](docs/sdks/audio/README.md#createtranslation) - Translates audio into English.
- [`auditLogsListAuditLogs`](docs/sdks/auditlogs/README.md#listauditlogs) - List user actions and configuration changes within this organization.
- [`batchCancelBatch`](docs/sdks/batch/README.md#cancelbatch) - Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file.
- [`batchCreateBatch`](docs/sdks/batch/README.md#createbatch) - Creates and executes a batch from an uploaded file of requests
- [`batchListBatches`](docs/sdks/batch/README.md#listbatches) - List your organization's batches.
- [`batchRetrieveBatch`](docs/sdks/batch/README.md#retrievebatch) - Retrieves a batch.
- [`chatCreateChatCompletion`](docs/sdks/chat/README.md#createchatcompletion) - Creates a model response for the given chat conversation.
- [`completionsCreateCompletion`](docs/sdks/completions/README.md#createcompletion) - Creates a completion for the provided prompt and parameters.
- [`embeddingsCreateEmbedding`](docs/sdks/embeddings/README.md#createembedding) - Creates an embedding vector representing the input text.
- [`filesCreateFile`](docs/sdks/files/README.md#createfile) - Upload a file that can be used across various endpoints. Individual files can be up to 512 MB, and the size of all files uploaded by one organization can be up to 100 GB.

The Assistants API supports files up to 2 million tokens and of specific file types. See the [Assistants Tools guide](/docs/assistants/tools) for details.

The Fine-tuning API only supports `.jsonl` files. The input also has certain required formats for fine-tuning [chat](/docs/api-reference/fine-tuning/chat-input) or [completions](/docs/api-reference/fine-tuning/completions-input) models.

The Batch API only supports `.jsonl` files up to 100 MB in size. The input also has a specific required [format](/docs/api-reference/batch/request-input).

Please [contact us](https://help.openai.com/) if you need to increase these storage limits.

- [`filesDeleteFile`](docs/sdks/files/README.md#deletefile) - Delete a file.
- [`filesDownloadFile`](docs/sdks/files/README.md#downloadfile) - Returns the contents of the specified file.
- [`filesListFiles`](docs/sdks/files/README.md#listfiles) - Returns a list of files that belong to the user's organization.
- [`filesRetrieveFile`](docs/sdks/files/README.md#retrievefile) - Returns information about a specific file.
- [`fineTuningCancelFineTuningJob`](docs/sdks/finetuning/README.md#cancelfinetuningjob) - Immediately cancel a fine-tune job.

- [`fineTuningCreateFineTuningJob`](docs/sdks/finetuning/README.md#createfinetuningjob) - Creates a fine-tuning job which begins the process of creating a new model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/fine-tuning)

- [`fineTuningListFineTuningEvents`](docs/sdks/finetuning/README.md#listfinetuningevents) - Get status updates for a fine-tuning job.

- [`fineTuningListFineTuningJobCheckpoints`](docs/sdks/finetuning/README.md#listfinetuningjobcheckpoints) - List checkpoints for a fine-tuning job.

- [`fineTuningListPaginatedFineTuningJobs`](docs/sdks/finetuning/README.md#listpaginatedfinetuningjobs) - List your organization's fine-tuning jobs

- [`fineTuningRetrieveFineTuningJob`](docs/sdks/finetuning/README.md#retrievefinetuningjob) - Get info about a fine-tuning job.

[Learn more about fine-tuning](/docs/guides/fine-tuning)

- [`imagesCreateImage`](docs/sdks/images/README.md#createimage) - Creates an image given a prompt.
- [`imagesCreateImageEdit`](docs/sdks/images/README.md#createimageedit) - Creates an edited or extended image given an original image and a prompt.
- [`imagesCreateImageVariation`](docs/sdks/images/README.md#createimagevariation) - Creates a variation of a given image.
- [`invitesDeleteInvite`](docs/sdks/invites/README.md#deleteinvite) - Delete an invite. If the invite has already been accepted, it cannot be deleted.
- [`invitesInviteUser`](docs/sdks/invites/README.md#inviteuser) - Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization.
- [`invitesListInvites`](docs/sdks/invites/README.md#listinvites) - Returns a list of invites in the organization.
- [`invitesRetrieveInvite`](docs/sdks/invites/README.md#retrieveinvite) - Retrieves an invite.
- [`modelsDeleteModel`](docs/sdks/models/README.md#deletemodel) - Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.
- [`modelsListModels`](docs/sdks/models/README.md#listmodels) - Lists the currently available models, and provides basic information about each one such as the owner and availability.
- [`modelsRetrieveModel`](docs/sdks/models/README.md#retrievemodel) - Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
- [`moderationsCreateModeration`](docs/sdks/moderations/README.md#createmoderation) - Classifies if text and/or image inputs are potentially harmful. Learn
more in the [moderation guide](/docs/guides/moderation).

- [`projectsArchiveProject`](docs/sdks/projects/README.md#archiveproject) - Archives a project in the organization. Archived projects cannot be used or updated.
- [`projectsCreateProject`](docs/sdks/projects/README.md#createproject) - Create a new project in the organization. Projects can be created and archived, but cannot be deleted.
- [`projectsCreateProjectServiceAccount`](docs/sdks/projects/README.md#createprojectserviceaccount) - Creates a new service account in the project. This also returns an unredacted API key for the service account.
- [`projectsCreateProjectUser`](docs/sdks/projects/README.md#createprojectuser) - Adds a user to the project. Users must already be members of the organization to be added to a project.
- [`projectsDeleteProjectApiKey`](docs/sdks/projects/README.md#deleteprojectapikey) - Deletes an API key from the project.
- [`projectsDeleteProjectServiceAccount`](docs/sdks/projects/README.md#deleteprojectserviceaccount) - Deletes a service account from the project.
- [`projectsDeleteProjectUser`](docs/sdks/projects/README.md#deleteprojectuser) - Deletes a user from the project.
- [`projectsListProjectApiKeys`](docs/sdks/projects/README.md#listprojectapikeys) - Returns a list of API keys in the project.
- [`projectsListProjects`](docs/sdks/projects/README.md#listprojects) - Returns a list of projects.
- [`projectsListProjectServiceAccounts`](docs/sdks/projects/README.md#listprojectserviceaccounts) - Returns a list of service accounts in the project.
- [`projectsListProjectUsers`](docs/sdks/projects/README.md#listprojectusers) - Returns a list of users in the project.
- [`projectsModifyProject`](docs/sdks/projects/README.md#modifyproject) - Modifies a project in the organization.
- [`projectsModifyProjectUser`](docs/sdks/projects/README.md#modifyprojectuser) - Modifies a user's role in the project.
- [`projectsRetrieveProject`](docs/sdks/projects/README.md#retrieveproject) - Retrieves a project.
- [`projectsRetrieveProjectApiKey`](docs/sdks/projects/README.md#retrieveprojectapikey) - Retrieves an API key in the project.
- [`projectsRetrieveProjectServiceAccount`](docs/sdks/projects/README.md#retrieveprojectserviceaccount) - Retrieves a service account in the project.
- [`projectsRetrieveProjectUser`](docs/sdks/projects/README.md#retrieveprojectuser) - Retrieves a user in the project.
- [`uploadsAddUploadPart`](docs/sdks/uploads/README.md#adduploadpart) - Adds a [Part](/docs/api-reference/uploads/part-object) to an [Upload](/docs/api-reference/uploads/object) object. A Part represents a chunk of bytes from the file you are trying to upload. 

Each Part can be at most 64 MB, and you can add Parts until you hit the Upload maximum of 8 GB.

It is possible to add multiple Parts in parallel. You can decide the intended order of the Parts when you [complete the Upload](/docs/api-reference/uploads/complete).

- [`uploadsCancelUpload`](docs/sdks/uploads/README.md#cancelupload) - Cancels the Upload. No Parts may be added after an Upload is cancelled.

- [`uploadsCompleteUpload`](docs/sdks/uploads/README.md#completeupload) - Completes the [Upload](/docs/api-reference/uploads/object). 

Within the returned Upload object, there is a nested [File](/docs/api-reference/files/object) object that is ready to use in the rest of the platform.

You can specify the order of the Parts by passing in an ordered list of the Part IDs.

The number of bytes uploaded upon completion must match the number of bytes initially specified when creating the Upload object. No Parts may be added after an Upload is completed.

- [`uploadsCreateUpload`](docs/sdks/uploads/README.md#createupload) - Creates an intermediate [Upload](/docs/api-reference/uploads/object) object that you can add [Parts](/docs/api-reference/uploads/part-object) to. Currently, an Upload can accept at most 8 GB in total and expires after an hour after you create it.

Once you complete the Upload, we will create a [File](/docs/api-reference/files/object) object that contains all the parts you uploaded. This File is usable in the rest of our platform as a regular File object.

For certain `purpose`s, the correct `mime_type` must be specified. Please refer to documentation for the supported MIME types for your use case:
- [Assistants](/docs/assistants/tools/file-search/supported-files)

For guidance on the proper filename extensions for each purpose, please follow the documentation on [creating a File](/docs/api-reference/files/create).

- [`usersDeleteUser`](docs/sdks/users/README.md#deleteuser) - Deletes a user from the organization.
- [`usersListUsers`](docs/sdks/users/README.md#listusers) - Lists all of the users in the organization.
- [`usersModifyUser`](docs/sdks/users/README.md#modifyuser) - Modifies a user's role in the organization.
- [`usersRetrieveUser`](docs/sdks/users/README.md#retrieveuser) - Retrieves a user by their identifier.
- [`vectorStoresCancelVectorStoreFileBatch`](docs/sdks/vectorstores/README.md#cancelvectorstorefilebatch) - Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible.
- [`vectorStoresCreateVectorStore`](docs/sdks/vectorstores/README.md#createvectorstore) - Create a vector store.
- [`vectorStoresCreateVectorStoreFile`](docs/sdks/vectorstores/README.md#createvectorstorefile) - Create a vector store file by attaching a [File](/docs/api-reference/files) to a [vector store](/docs/api-reference/vector-stores/object).
- [`vectorStoresCreateVectorStoreFileBatch`](docs/sdks/vectorstores/README.md#createvectorstorefilebatch) - Create a vector store file batch.
- [`vectorStoresDeleteVectorStore`](docs/sdks/vectorstores/README.md#deletevectorstore) - Delete a vector store.
- [`vectorStoresDeleteVectorStoreFile`](docs/sdks/vectorstores/README.md#deletevectorstorefile) - Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted. To delete the file, use the [delete file](/docs/api-reference/files/delete) endpoint.
- [`vectorStoresGetVectorStore`](docs/sdks/vectorstores/README.md#getvectorstore) - Retrieves a vector store.
- [`vectorStoresGetVectorStoreFile`](docs/sdks/vectorstores/README.md#getvectorstorefile) - Retrieves a vector store file.
- [`vectorStoresGetVectorStoreFileBatch`](docs/sdks/vectorstores/README.md#getvectorstorefilebatch) - Retrieves a vector store file batch.
- [`vectorStoresListFilesInVectorStoreBatch`](docs/sdks/vectorstores/README.md#listfilesinvectorstorebatch) - Returns a list of vector store files in a batch.
- [`vectorStoresListVectorStoreFiles`](docs/sdks/vectorstores/README.md#listvectorstorefiles) - Returns a list of vector store files.
- [`vectorStoresListVectorStores`](docs/sdks/vectorstores/README.md#listvectorstores) - Returns a list of vector stores.
- [`vectorStoresModifyVectorStore`](docs/sdks/vectorstores/README.md#modifyvectorstore) - Modifies a vector store.

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { ArgotOpenAi } from "argot-open-ai";
import { openAsBlob } from "node:fs";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.images.createImageEdit({
    image: await openAsBlob("example.file"),
    prompt: "A cute baby sea otter wearing a beret",
    model: "dall-e-2",
    n: 1,
    responseFormat: "url",
    size: "1024x1024",
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.chat.createChatCompletion({
    messages: [
      {
        content: "<value>",
        role: "user",
      },
      {
        content: [
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "image_url",
            imageUrl: {
              url: "https://fixed-circumference.com",
            },
          },
        ],
        role: "user",
      },
      {
        role: "tool",
        content: "<value>",
        toolCallId: "<id>",
      },
    ],
    model: "gpt-4o",
    n: 1,
    temperature: 1,
    topP: 1,
    user: "user-1234",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.chat.createChatCompletion({
    messages: [
      {
        content: "<value>",
        role: "user",
      },
      {
        content: [
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "image_url",
            imageUrl: {
              url: "https://fixed-circumference.com",
            },
          },
        ],
        role: "user",
      },
      {
        role: "tool",
        content: "<value>",
        toolCallId: "<id>",
      },
    ],
    model: "gpt-4o",
    n: 1,
    temperature: 1,
    topP: 1,
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `modifyProject` method may throw the following errors:

| Error Type           | Status Code | Content Type     |
| -------------------- | ----------- | ---------------- |
| errors.ErrorResponse | 400         | application/json |
| errors.SDKError      | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { ArgotOpenAi } from "argot-open-ai";
import { ErrorResponse, SDKValidationError } from "argot-open-ai/models/errors";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  let result;
  try {
    result = await argotOpenAi.projects.modifyProject({
      projectId: "<id>",
      projectUpdateRequest: {
        name: "<value>",
      },
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorResponse): {
        // Handle err.data$: ErrorResponseData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  serverURL: "https://api.openai.com/v1",
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.chat.createChatCompletion({
    messages: [
      {
        content: "<value>",
        role: "user",
      },
      {
        content: [
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "image_url",
            imageUrl: {
              url: "https://fixed-circumference.com",
            },
          },
        ],
        role: "user",
      },
      {
        role: "tool",
        content: "<value>",
        toolCallId: "<id>",
      },
    ],
    model: "gpt-4o",
    n: 1,
    temperature: 1,
    topP: 1,
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { ArgotOpenAi } from "argot-open-ai";
import { HTTPClient } from "argot-open-ai/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new ArgotOpenAi({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable       |
| ------------ | ---- | ----------- | -------------------------- |
| `apiKeyAuth` | http | HTTP Bearer | `ARGOTOPENAI_API_KEY_AUTH` |

To authenticate with the API the `apiKeyAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.chat.createChatCompletion({
    messages: [
      {
        content: "<value>",
        role: "user",
      },
      {
        content: [
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "image_url",
            imageUrl: {
              url: "https://fixed-circumference.com",
            },
          },
        ],
        role: "user",
      },
      {
        role: "tool",
        content: "<value>",
        toolCallId: "<id>",
      },
    ],
    model: "gpt-4o",
    n: 1,
    temperature: 1,
    topP: 1,
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { ArgotOpenAi } from "argot-open-ai";

const sdk = new ArgotOpenAi({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `ARGOTOPENAI_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=argot-open-ai&utm_campaign=typescript)
