## Why It’s Optional
1. In TypeScript, the semicolon (;) is not compulsory — but it’s strongly recommended for consistency and safety.
2. TypeScript (like JavaScript) uses a feature called Automatic Semicolon Insertion (ASI).
3. That means the compiler automatically adds semicolons where it thinks they should go.
4. Even though optional, omitting semicolons can cause unexpected errors in certain cases.

## Example 1: Array Misinterpretation
```typescript
let a = 5
let b = 10
let result = a + b
[1, 2, 3].forEach(num => console.log(num))
```
### ❌ Problem
This throws an error because TypeScript interprets it as:
```typescript
let result = a + b[1, 2, 3].forEach(num => console.log(num))
```
and you’ll get:
```typescript
TypeError: Cannot read properties of undefined (reading 'forEach')
```

## Example 2 – Immediately Invoked Function Expressions (IIFE)
```typescript
let x = 5
(function() {
  console.log("Running IIFE")
})()
```

### ❌ Problem
Without the semicolon, it’s parsed as:
```typescript
let x = 5(function(){ ... })()
```
and you’ll get:
```typescript
TypeError: 5 is not a function
```

## Example 3 – Return Statement Pitfall
```typescript
function getValue() {
  return
  {
    value: 10
  }
}
console.log(getValue())
```

### ❌ Problem
The newline after return makes ASI insert a semicolon immediately after it:
```typescript
return;  // inserted here
{ value: 10 }  // unreachable
```
Output:
```typescript
undefined
```

## Example 4 – Chained Function Calls
```typescript
getData()
.then(() => console.log("Done"))
.catch(() => console.log("Error"))
[1, 2, 3].forEach(x => console.log(x))
```

### ❌ Problem
No semicolon after `.catch(...)` → the `[1,2,3]` is treated as part of the chain.

