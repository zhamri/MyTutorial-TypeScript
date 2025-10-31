## What is JSDoc?

JSDoc is a special comment format that starts with `/** ... */`.
TypeScript understands JSDoc tags to provide:
1. IntelliSense (hover hints) in editors like VS Code
2. Auto-generated documentation
3. Better code readability

## Commonly Used JSDoc Tags

| Tag                     | Description                             | Example                                            |
| ----------------------- | --------------------------------------- | -------------------------------------------------- |
| `@param`                | Describes a function parameter          | `@param name - Student's full name`                |
| `@returns` or `@return` | Describes what the function returns     | `@returns Total marks`                             |
| `@example`              | Provides sample usage                   | `@example getTotal([80, 90, 100]); // returns 270` |
| `@deprecated`           | Marks a function or method as outdated  | `@deprecated Use calculateAverage() instead.`      |
| `@throws`               | Describes possible thrown errors        | `@throws Error if input is invalid`                |
| `@see`                  | References another function or resource | `@see calculateAverage`                            |
| `@author`               | Specifies the author                    | `@author Zhamri`                                   |
| `@version`              | Specifies version of the function/class | `@version 1.0.0`                                   |

## Best Practices

1. Always describe parameters and return values.
2. Use `@example` to show how the function is used.
3. Mark old functions with `@deprecated` instead of deleting them immediately.
4. Keep comments short and meaningful.
5. Use JSDoc on public methods and classes — internal helpers don’t always need it.
