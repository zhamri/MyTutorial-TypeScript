/**
 * Represents a student in the university.
 */
class Student {
    /**
     * Creates a new Student.
     * @param name - Student's full name
     * @param matric - Student's matric number
     */
    constructor(public name: string, public matric: string) {
    }

    /**
     * Displays student's info.
     * @returns A formatted string
     */
    displayInfo(): string {
        return `${this.name} (${this.matric})`;
    }
}
