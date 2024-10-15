# ModifyAssistantRequest

## Example Usage

```typescript
import { ModifyAssistantRequest } from "argot-open-ai/models/operations";

let value: ModifyAssistantRequest = {
  assistantId: "<id>",
  modifyAssistantRequest: {
    temperature: 1,
    topP: 1,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `assistantId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the assistant to modify.                                                     |
| `modifyAssistantRequest`                                                               | [components.ModifyAssistantRequest](../../models/components/modifyassistantrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |