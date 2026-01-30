let person : {
    name: string;
    age: number;
    isStudent: boolean;
    hobbies: string[];
    roles : {
        isAdmin: boolean;
        isEditor: boolean;
    };
} = {
    name: "John",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "writing", "coding"],
    roles: {
        isAdmin: true,
        isEditor: false,
    }
}

console.log(person);


// Must not be null

let teacher : {} = "This assignment works" // this means it could be anything but not null
teacher = null; // this will throw an error because the variable is not nullable
teacher = undefined; // this will throw an error because the variable is not nullable
teacher = true; // this works
teacher = {name: "John", age: 20, isStudent: false}; // this works

const teacher2 = {} // this mean empty object

// ------------------------------------------------------------
// lets say you want to define that variable must take a flexible object of a specfic type of key value pairs, but we don't know the keys yet
// for this we use in-build type called Record

let user: Record<string, string | number | boolean>;

// now you can store the object with any key and value of type string, number or boolean
user = {name: "John", age: 20, isStudent: true};
user = "John"; // this will throw an error because the variable is not an object
user = null; // this will throw an error because the variable is not an object