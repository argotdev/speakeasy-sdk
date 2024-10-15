# Settings

## Example Usage

```typescript
import { Settings } from "argot-open-ai/models/components";

let value: Settings = {};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `threadsUiVisibility`                                                                                                                       | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Visibility of the threads page which shows messages created with the Assistants API and Playground. One of `ANY_ROLE`, `OWNERS`, or `NONE`. |
| `usageDashboardVisibility`                                                                                                                  | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Visibility of the usage dashboard which shows activity and costs for your organization. One of `ANY_ROLE` or `OWNERS`.                      |