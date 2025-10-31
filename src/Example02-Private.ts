class Student2 {
    private matric: string = "283123";

    showMatric() {
        console.log(this.matric);
    }
}

const s2 = new Student2();
s2.showMatric(); // OK
// console.log(s.matric); // ❌ Error: 'matric' is private
