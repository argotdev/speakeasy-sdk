# MessageObjectContent


## Supported Types

### `components.MessageContentImageFileObject`

```typescript
const value: components.MessageContentImageFileObject = {
  type: "image_file",
  imageFile: {
    fileId: "<id>",
  },
};
```

### `components.MessageContentImageUrlObject`

```typescript
const value: components.MessageContentImageUrlObject = {
  type: "image_url",
  imageUrl: {
    url: "https://animated-advertisement.info",
  },
};
```

### `components.MessageContentTextObject`

```typescript
const value: components.MessageContentTextObject = {
  type: "text",
  text: {
    value: "<value>",
    annotations: [
      {
        type: "file_citation",
        text: "<value>",
        fileCitation: {
          fileId: "<id>",
        },
        startIndex: 251941,
        endIndex: 221161,
      },
    ],
  },
};
```

### `components.MessageContentRefusalObject`

```typescript
const value: components.MessageContentRefusalObject = {
  type: "refusal",
  refusal: "<value>",
};
```

