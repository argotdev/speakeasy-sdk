# RunStepDetailsMessageCreationObject

Details of the message creation by the run step.

## Example Usage

```typescript
import { RunStepDetailsMessageCreationObject } from "argot-open-ai/models/components";

let value: RunStepDetailsMessageCreationObject = {
  type: "message_creation",
  messageCreation: {
    messageId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [components.RunStepDetailsMessageCreationObjectType](../../models/components/runstepdetailsmessagecreationobjecttype.md) | :heavy_check_mark:                                                                                                       | Always `message_creation`.                                                                                               |
| `messageCreation`                                                                                                        | [components.MessageCreation](../../models/components/messagecreation.md)                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |