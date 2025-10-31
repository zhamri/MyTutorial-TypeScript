## 1️⃣ Single-line comment
Use // to write a comment that ends at the end of the line.

```typescript
// This is a single-line comment
let name = "Zhamri"; // You can also write it after code
```
>Used for: short explanations, reminders, or disabling one line of code.

## 2️⃣ Multi-line (Block) comment
Use `/* ... */` for longer or multi-line explanations.

```typescript
/*
 This is a multi-line comment.
 You can write many lines here.
 Useful for describing logic or sections of code.
*/
let course = "Web Engineering";
```
>Used for: longer descriptions, temporarily commenting out multiple lines.


## 3️⃣ Documentation comment (JSDoc-style)
1. TypeScript supports JSDoc comments for documenting functions, classes, and interfaces.
2. They start with `/**` and can include special tags.

```typescript
/**
 * Calculates total marks for a student.
 * @param marks - Array of marks
 * @returns The sum of all marks
 */
function getTotal(marks: number[]): number {
  return marks.reduce((a, b) => a + b, 0);
}
```
>Used for: generating documentation, tooltips, and IntelliSense hints in editors (like VS Code).


## Summary
| Type                      | Syntax           | Purpose                                |
| ------------------------- | ---------------- | -------------------------------------- |
| **Single-line**           | `// comment`     | Short, quick note                      |
| **Multi-line**            | `/* comment */`  | Long or multi-line explanation         |
| **Documentation (JSDoc)** | `/** comment */` | Function/class/interface documentation |

