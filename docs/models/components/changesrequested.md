# ChangesRequested

The payload used to update the API key.

## Example Usage

```typescript
import { ChangesRequested } from "argot-open-ai/models/components";

let value: ChangesRequested = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `scopes`                                                               | *string*[]                                                             | :heavy_minus_sign:                                                     | A list of scopes allowed for the API key, e.g. `["api.model.request"]` |