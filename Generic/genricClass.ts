
class Calculate<T> {
    constructor(public a: T, public b: T) {}

    add(a: T, b: T): T {
        if(typeof a === "number" && typeof b === "number") {
            return a + b as T;
        }
        if(typeof a === "string" && typeof b === "string") {
            return a + b as T;
        }
        throw new Error("Invalid type");
    }
    subtract(a: T, b: T): T {
        if(typeof a === "number" && typeof b === "number") {
            return a - b as T;
        }
        throw new Error("Invalid type");
    }
    multiply(a: T, b: T): T {
        if(typeof a === "number" && typeof b === "number") {
            return a * b as T;
        }
        throw new Error("Invalid type");
    }
    divide(a: T, b: T): T {
        if(typeof a === "number" && typeof b === "number") {
            return a / b as T;
        }
        throw new Error("Invalid type");
    }
}

class User<T,U> {
    constructor(public name: T, public age: U) {}
}

const user = new User<string, number>("John", 20);
user.name = "Jane";
user.age = 21;
console.log(user.name);
console.log(user.age);