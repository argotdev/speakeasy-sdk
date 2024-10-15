# AssistantToolsFunction

## Example Usage

```typescript
import { AssistantToolsFunction } from "argot-open-ai/models/components";

let value: AssistantToolsFunction = {
  type: "function",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [components.AssistantToolsFunctionType](../../models/components/assistanttoolsfunctiontype.md) | :heavy_check_mark:                                                                             | The type of tool being defined: `function`                                                     |
| `function`                                                                                     | [components.FunctionObject](../../models/components/functionobject.md)                         | :heavy_check_mark:                                                                             | N/A                                                                                            |