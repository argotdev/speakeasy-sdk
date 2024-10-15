# Endpoint

The endpoint to be used for all requests in the batch. Currently `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. Note that `/v1/embeddings` batches are also restricted to a maximum of 50,000 embedding inputs across all requests in the batch.

## Example Usage

```typescript
import { Endpoint } from "argot-open-ai/models/operations";

let value: Endpoint = "/v1/embeddings";
```

## Values

```typescript
"/v1/chat/completions" | "/v1/embeddings" | "/v1/completions"
```