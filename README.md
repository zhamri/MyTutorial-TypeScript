## Using Default Export (Alternate Style)
If you prefer exporting only one function from a file:

### student.ts
```typescript
export default function showInfo(name: string, age?: number) {
  console.log(`Name: ${name}, Age: ${age ?? "N/A"}`);
}
```

### main.ts
```typescript
import showInfo from "./student";

showInfo("Aishah", 22);
```
