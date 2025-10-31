class Student4 {
    readonly university: string = "UUM";

    constructor(public name: string) {}
}

const s4 = new Student4("Zhamri");
console.log(s4.university); // UUM
// s.university = "USM";   // ❌ Error: cannot assign to readonly property
