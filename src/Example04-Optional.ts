// =====================================================
// Function Definition
// =====================================================
function showInfo(name: string, age?: number) {
    // The 'age' parameter is optional (may be undefined)
    // The '??' operator means: use "N/A" if age is null or undefined
    console.log(`Name: ${name}, Age: ${age ?? "N/A"}`);
}

// =====================================================
// Function Calls
// =====================================================

// Case 1: Provide both name and age
showInfo("Ali", 25);    // Output: Name: Ali, Age: 25

// Case 2: Provide only name (age will be undefined)
showInfo("Siti");       // Output: Name: Siti, Age: N/A

// Case 3: Explicitly pass undefined
showInfo("John", undefined); // Output: Name: John, Age: N/A

// Case 4: Pass 0 (should display 0, not N/A)
showInfo("Ravi", 0);    // Output: Name: Ravi, Age: 0

// Case 5: Store in variable and reuse
const studentName = "Aishah";
const studentAge = 22;
showInfo(studentName, studentAge); // Output: Name: Aishah, Age: 22
