# CreateModerationRequestInput

Input (or inputs) to classify. Can be a single string, an array of strings, or
an array of multi-modal input objects similar to other models.



## Supported Types

### `string`

```typescript
const value: string = "I want to kill them.";
```

### `string[]`

```typescript
const value: string[] = [
  "I want to kill them.",
];
```

### `components.Three[]`

```typescript
const value: components.Three[] = [
  {
    type: "text",
    text: "I want to kill them",
  },
];
```

