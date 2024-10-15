<!-- Start SDK Example Usage [usage] -->
```typescript
import { ArgotOpenAi } from "argot-open-ai";

const argotOpenAi = new ArgotOpenAi({
  apiKeyAuth: process.env["ARGOTOPENAI_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await argotOpenAi.chat.createChatCompletion({
    messages: [
      {
        content: "<value>",
        role: "user",
      },
      {
        content: [
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "image_url",
            imageUrl: {
              url: "https://fixed-circumference.com",
            },
          },
        ],
        role: "user",
      },
      {
        role: "tool",
        content: "<value>",
        toolCallId: "<id>",
      },
    ],
    model: "gpt-4o",
    n: 1,
    temperature: 1,
    topP: 1,
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->