## Type of Variable
1. Global - A variable declared outside any function or block is global — it can be accessed from anywhere in the file (and even other modules if exported).
2. Local -A variable declared inside a function is local — accessible only within that function.
3. Block - A variable declared inside a block `{}` (such as inside an `if`, `for`, or `while`) using `let` or `const` is block-scoped.
4. Instance - An instance variable is a variable declared inside a class, but outside any method.
   It belongs to each instance (object) of the class — every object gets its own copy.
5. Static - A static variable is a class-level variable — it belongs to the class itself, not to any individual object (instance).

| Type         | Declared In                         | Belongs To             | Accessed Using           | Example                  |
| ------------ | ----------------------------------- | ---------------------- | ------------------------ | ------------------------ |
| **Global**   | Outside class                       | Entire program         | variable name            | `let appName = "MyApp";` |
| **Local**    | Inside method                       | That method only       | variable name            | `let count = 0;`         |
| **Block**    | Inside `{}`                         | That block only        | variable name            | `const temp = 10;`       |
| **Instance** | Inside class, outside methods       | Each object (instance) | `this.variableName`      | `this.name`              |
| **Static**   | Inside class, with `static` keyword | Class itself (shared)  | `ClassName.variableName` | `Student.university`     |


## Declaration Keyword
TypeScript (like modern JavaScript) has three main ways to declare variables:

| Keyword | Description                                                         | Scope    | Can Reassign? | Example              |
| ------- | ------------------------------------------------------------------- | -------- | ------------- | -------------------- |
| `var`   | Function-scoped, older syntax. Avoid using it in modern TypeScript. | Function | ✅ Yes         | `var name = "Ali";`  |
| `let`   | Block-scoped variable. Preferred for values that can change.        | Block    | ✅ Yes         | `let counter = 0;`   |
| `const` | Block-scoped constant. Cannot be reassigned after declaration.      | Block    | ❌ No          | `const pi = 3.1416;` |

| Keyword   | Scope    | Can Reassign? | Re-Declare? | Common Use                     |
| --------- | -------- | ------------- | ----------- | ------------------------------ |
| **const** | Block    | ❌ No          | ❌ No        | Constants or fixed references  |
| **let**   | Block    | ✅ Yes         | ❌ No        | Values that change             |
| **var**   | Function | ✅ Yes         | ✅ Yes       | Legacy JS (avoid in modern TS) |
