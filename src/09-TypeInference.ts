// let age: any = 1;
// age = 5;
//
// age = "zhamri"


let age = "one"

console.log(age)
console.log(typeof age)

console.log(add(2, 2))

function add(a: number, b = 10): number {
    return a + b;
}

console.log(add(1, 2))