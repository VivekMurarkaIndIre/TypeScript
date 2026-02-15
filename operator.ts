type PersonDetails = {

    name: string;
    age: number;
    isStudent: boolean;
    hobbies: string[];
    roles: {
        isAdmin: boolean;
        isEditor: boolean;
    }
}
const person1: PersonDetails = {
    name: "John",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "writing", "coding"],
    roles: {
        isAdmin: true,
        isEditor: false,
    }
}

 const person1Roles = person1.roles!; // this is called non-null assertion, it tells typescript that the value is not null,

 const isAdmin: boolean = person1Roles?.isAdmin ?? false; // this is called optional chaining, it tells typescript that the value is optional, if it is null or undefined, then return false