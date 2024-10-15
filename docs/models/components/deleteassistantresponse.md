# DeleteAssistantResponse

## Example Usage

```typescript
import { DeleteAssistantResponse } from "argot-open-ai/models/components";

let value: DeleteAssistantResponse = {
  id: "<id>",
  deleted: false,
  object: "assistant.deleted",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `deleted`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `object`                                                                                             | [components.DeleteAssistantResponseObject](../../models/components/deleteassistantresponseobject.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |