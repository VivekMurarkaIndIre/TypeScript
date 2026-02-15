class UserClass {
    name: string;
    age: number;
    constructor(n: string, a: number) {
        this.name = n;
        this.age =a;
    }
}

let classUser1 = new UserClass("John", 20);

console.log(classUser1.name);


// we can also declare class like
class UserClass2 {
    constructor(public name: string, public age: number) {}
}

let classUser2 = new UserClass2("Jane", 21);

console.log(classUser2.name);
console.log(classUser2.age);