// main.ts

// ✅ Import the function from student.ts
import { showInfo } from "./student";  // use relative path (same folder)

// ✅ Call the function normally
showInfo("Ali", 25);
showInfo("Siti");
showInfo("Ravi", 0);


// 1. The import { showInfo } from "./student" line pulls in the exported function.
// 2. The ./ means the file is in the same directory.
// 3. If it’s in a subfolder, use ./folder/student.
