# IncompleteDetails

On an incomplete message, details about why the message is incomplete.

## Example Usage

```typescript
import { IncompleteDetails } from "argot-open-ai/models/components";

let value: IncompleteDetails = {
  reason: "max_tokens",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `reason`                                               | [components.Reason](../../models/components/reason.md) | :heavy_check_mark:                                     | The reason the message is incomplete.                  |