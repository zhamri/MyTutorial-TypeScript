class Student {
    // Instance variables
    name: string;
    matric: string;
    course: string;

    // Constructor initializes instance variables
    constructor(name: string, matric: string, course: string) {
        this.name = name;
        this.matric = matric;
        this.course = course;
    }

    // Instance method
    displayInfo() {
        console.log(`Name: ${this.name}, Matric: ${this.matric}, Course: ${this.course}`);
    }
}

// Create two different objects
const s1 = new Student("Ali", "S12345", "Computer Science");
const s2 = new Student("Siti", "S67890", "Software Engineering");

s1.displayInfo(); // Name: Ali, Matric: S12345, Course: Computer Science
s2.displayInfo(); // Name: Siti, Matric: S67890, Course: Software Engineering
