// use type alias, type alias is not a value,its a type definition

type UserRole = "admin" | "user" | "guest"; // benefit of using type alias is that we can reuse the type later on in the code
let userRole5: UserRole = "admin"; // this way we can update the type later on in the code without having to change the code everywhere

type person = {
    name: string;
    age: number;
    isStudent: boolean;
    hobbies: string[];
    roles: {
        isAdmin: boolean;
        isEditor: boolean;
    };
}
// this way we can reuse the type later on in the code without having to change the code everywhere
let person1: person = {
    name: "John",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "writing", "coding"],
    roles: {
        isAdmin: true,
        isEditor: false,
    }
}