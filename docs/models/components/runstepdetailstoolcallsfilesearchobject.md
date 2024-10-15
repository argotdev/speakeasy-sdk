# RunStepDetailsToolCallsFileSearchObject

## Example Usage

```typescript
import { RunStepDetailsToolCallsFileSearchObject } from "argot-open-ai/models/components";

let value: RunStepDetailsToolCallsFileSearchObject = {
  id: "<id>",
  type: "file_search",
  fileSearch: {},
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The ID of the tool call object.                                                                                                              |
| `type`                                                                                                                                       | [components.RunStepDetailsToolCallsFileSearchObjectType](../../models/components/runstepdetailstoolcallsfilesearchobjecttype.md)             | :heavy_check_mark:                                                                                                                           | The type of tool call. This is always going to be `file_search` for this type of tool call.                                                  |
| `fileSearch`                                                                                                                                 | [components.RunStepDetailsToolCallsFileSearchObjectFileSearch](../../models/components/runstepdetailstoolcallsfilesearchobjectfilesearch.md) | :heavy_check_mark:                                                                                                                           | For now, this is always going to be an empty object.                                                                                         |