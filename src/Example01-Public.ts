class Student1 {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public showName() {
        console.log(this.name);
    }
}

const s = new Student1("Ali");
console.log(s.name); // works
s.showName();        // works
