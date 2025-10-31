// Global variable
const university = "Universiti Utara Malaysia";

function showUniversity() {
    console.log("Inside function:", university); // ✅ accessible
}

showUniversity();
console.log("Outside function:", university);   // ✅ accessible everywhere
