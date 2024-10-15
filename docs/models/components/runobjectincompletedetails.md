# RunObjectIncompleteDetails

Details on why the run is incomplete. Will be `null` if the run is not incomplete.

## Example Usage

```typescript
import { RunObjectIncompleteDetails } from "argot-open-ai/models/components";

let value: RunObjectIncompleteDetails = {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `reason`                                                                                                                    | [components.RunObjectReason](../../models/components/runobjectreason.md)                                                    | :heavy_minus_sign:                                                                                                          | The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run. |