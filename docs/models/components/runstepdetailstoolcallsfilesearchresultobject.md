# RunStepDetailsToolCallsFileSearchResultObject

A result instance of the file search.

## Example Usage

```typescript
import { RunStepDetailsToolCallsFileSearchResultObject } from "argot-open-ai/models/components";

let value: RunStepDetailsToolCallsFileSearchResultObject = {
  fileId: "<id>",
  fileName: "example.file",
  score: 5305.37,
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fileId`                                                                                                                                             | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The ID of the file that result was found in.                                                                                                         |
| `fileName`                                                                                                                                           | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The name of the file that result was found in.                                                                                                       |
| `score`                                                                                                                                              | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The score of the result. All values must be a floating point number between 0 and 1.                                                                 |
| `content`                                                                                                                                            | [components.RunStepDetailsToolCallsFileSearchResultObjectContent](../../models/components/runstepdetailstoolcallsfilesearchresultobjectcontent.md)[] | :heavy_minus_sign:                                                                                                                                   | The content of the result that was found. The content is only included if requested via the include query parameter.                                 |