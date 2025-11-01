// main.ts

// Import the class from student.ts
import { Student } from "./classStudent";

// Create objects (instances)
const s1 = new Student("Ali", 25);
const s2 = new Student("Siti");

// Call the class method
s1.showInfo(); // Name: Ali, Age: 25
s2.showInfo(); // Name: Siti, Age: N/A
