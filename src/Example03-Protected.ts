class Student3 {
    protected course: string = "Web Engineering";
}

class UUMStudent extends Student3 {
    showCourse() {
        console.log(this.course); // accessible here
    }
}

const s3 = new UUMStudent();
s3.showCourse(); // OK
// console.log(s.course); // ❌ Error: protected
