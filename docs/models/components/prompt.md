# Prompt

The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.

Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.



## Supported Types

### `string`

```typescript
const value: string = "This is a test.";
```

### `string[]`

```typescript
const value: string[] = [
  "This is a test.",
];
```

### `number[]`

```typescript
const value: number[] = [
  [1212, 318, 257, 1332, 13],
];
```

### `number[][]`

```typescript
const value: number[][] = [
  [
    [[1212, 318, 257, 1332, 13]],
  ],
];
```

