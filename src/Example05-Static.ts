class Student1 {
    static university = "UUM"; // Static variable (shared by all)
    name: string;               // Instance variable

    constructor(name: string) {
        this.name = name;
    }

    showInfo() {
        console.log(`${this.name} studies at ${Student1.university}`);
    }
}

const s3 = new Student1("Ahmad");
const s4 = new Student1("Siti");

s3.showInfo(); // Ahmad studies at UUM
s4.showInfo(); // Siti studies at UUM

// Change static variable (affects all objects)
Student1.university = "Universiti Malaysia";
s3.showInfo(); // Ahmad studies at Universiti Malaysia
