# ToolCalls


## Supported Types

### `components.RunStepDetailsToolCallsCodeObject`

```typescript
const value: components.RunStepDetailsToolCallsCodeObject = {
  id: "<id>",
  type: "code_interpreter",
  codeInterpreter: {
    input: "<value>",
    outputs: [
      {
        type: "logs",
        logs: "<value>",
      },
    ],
  },
};
```

### `components.RunStepDetailsToolCallsFileSearchObject`

```typescript
const value: components.RunStepDetailsToolCallsFileSearchObject = {
  id: "<id>",
  type: "file_search",
  fileSearch: {},
};
```

### `components.RunStepDetailsToolCallsFunctionObject`

```typescript
const value: components.RunStepDetailsToolCallsFunctionObject = {
  id: "<id>",
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
    output: "<value>",
  },
};
```

