/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Assistants } from "./assistants.js";
import { Audio } from "./audio.js";
import { AuditLogs } from "./auditlogs.js";
import { Batch } from "./batch.js";
import { Chat } from "./chat.js";
import { Completions } from "./completions.js";
import { Embeddings } from "./embeddings.js";
import { Files } from "./files.js";
import { FineTuning } from "./finetuning.js";
import { Images } from "./images.js";
import { Invites } from "./invites.js";
import { Models } from "./models.js";
import { Moderations } from "./moderations.js";
import { Projects } from "./projects.js";
import { Uploads } from "./uploads.js";
import { Users } from "./users.js";
import { VectorStores } from "./vectorstores.js";

export class ArgotOpenAi extends ClientSDK {
  private _chat?: Chat;
  get chat(): Chat {
    return (this._chat ??= new Chat(this._options));
  }

  private _completions?: Completions;
  get completions(): Completions {
    return (this._completions ??= new Completions(this._options));
  }

  private _images?: Images;
  get images(): Images {
    return (this._images ??= new Images(this._options));
  }

  private _embeddings?: Embeddings;
  get embeddings(): Embeddings {
    return (this._embeddings ??= new Embeddings(this._options));
  }

  private _audio?: Audio;
  get audio(): Audio {
    return (this._audio ??= new Audio(this._options));
  }

  private _files?: Files;
  get files(): Files {
    return (this._files ??= new Files(this._options));
  }

  private _uploads?: Uploads;
  get uploads(): Uploads {
    return (this._uploads ??= new Uploads(this._options));
  }

  private _fineTuning?: FineTuning;
  get fineTuning(): FineTuning {
    return (this._fineTuning ??= new FineTuning(this._options));
  }

  private _models?: Models;
  get models(): Models {
    return (this._models ??= new Models(this._options));
  }

  private _moderations?: Moderations;
  get moderations(): Moderations {
    return (this._moderations ??= new Moderations(this._options));
  }

  private _assistants?: Assistants;
  get assistants(): Assistants {
    return (this._assistants ??= new Assistants(this._options));
  }

  private _vectorStores?: VectorStores;
  get vectorStores(): VectorStores {
    return (this._vectorStores ??= new VectorStores(this._options));
  }

  private _batch?: Batch;
  get batch(): Batch {
    return (this._batch ??= new Batch(this._options));
  }

  private _auditLogs?: AuditLogs;
  get auditLogs(): AuditLogs {
    return (this._auditLogs ??= new AuditLogs(this._options));
  }

  private _invites?: Invites;
  get invites(): Invites {
    return (this._invites ??= new Invites(this._options));
  }

  private _users?: Users;
  get users(): Users {
    return (this._users ??= new Users(this._options));
  }

  private _projects?: Projects;
  get projects(): Projects {
    return (this._projects ??= new Projects(this._options));
  }
}
