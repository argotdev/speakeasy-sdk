# StepDetails

The details of the run step.


## Supported Types

### `components.RunStepDetailsMessageCreationObject`

```typescript
const value: components.RunStepDetailsMessageCreationObject = {
  type: "message_creation",
  messageCreation: {
    messageId: "<id>",
  },
};
```

### `components.RunStepDetailsToolCallsObject`

```typescript
const value: components.RunStepDetailsToolCallsObject = {
  type: "tool_calls",
  toolCalls: [
    {
      id: "<id>",
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
        output: "<value>",
      },
    },
  ],
};
```

