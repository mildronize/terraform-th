# Type Manipulation

## keyof

```ts
type Person = {
  name: string;
  age: number;
}

type keyOfPerson = keyof Person;
// Similar to type keyOfPerson = 'name' | 'age':
```

```ts
type keyOfAny = keyof any;
// Similar to type keyOfAny = string | number | symbol
```

