# ApiKeyUpdated

The details for events with this `type`.

## Example Usage

```typescript
import { ApiKeyUpdated } from "argot-open-ai/models/components";

let value: ApiKeyUpdated = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | The tracking ID of the API key.                                            |
| `changesRequested`                                                         | [components.ChangesRequested](../../models/components/changesrequested.md) | :heavy_minus_sign:                                                         | The payload used to update the API key.                                    |