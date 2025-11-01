// student.ts

// Export the function so it can be used in other files
export function showInfo(name: string, age?: number) {
    console.log(`Name: ${name}, Age: ${age ?? "N/A"}`);
}


// 1. The keyword export makes the function available outside this file.
// 2. Without export, it’s private to student.ts.
