function displayCourse() {
    let course = "Web Engineering"; // Local variable
    console.log("Inside function:", course); // ✅ accessible here
}

displayCourse();
// console.log("Outside function:", course); // ❌ Error: course is not defined
