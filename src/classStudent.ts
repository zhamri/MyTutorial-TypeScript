// student.ts

export class Student {
    name: string;
    age?: number;

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }

    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age ?? "N/A"}`);
    }
}
