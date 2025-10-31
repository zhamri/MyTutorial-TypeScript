## Access Modifiers in TypeScript

| Modifier | In Class | In Subclass | Outside Class | Description                             |
| -- |----------|-------------| ------------- |-----------------------------------------|
| `public` | ✅ Yes    | ✅ Yes       | ✅ Yes         | Default modifier; accessible everywhere |
| `private` | ✅ Yes    | ❌ No        | ❌ No          | Only within the same class              |
| `protected` | ✅ Yes    | ✅ Yes       | ❌ No          | Within class and subclasses only        |
| *(no modifier)* | ✅ Yes    | ✅ Yes       | ✅ Yes         | Treated as `public` in TypeScript       |
| *readonly* | ✅ Yes    | ✅ Yes       | ✅ Yes         | Can be read only. Not technically an access modifier, but often used together.  |
