# Content2


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
    url: "https://standard-venom.info/",
  },
};
```

### `components.MessageRequestContentTextObject`

```typescript
const value: components.MessageRequestContentTextObject = {
  type: "text",
  text: "<value>",
};
```

