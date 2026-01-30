let year : number | string ; // this is a union type, it can be a number or a string

year = 2020;
year = "2020";
year = true; // this will throw an error because the variable is a number


let names = ["John", "Jane", "Jim"]; // this is equivalent to let names: string[] = ["John", "Jane", "Jim"];

names.push("John");
names.push(2020); // this will throw an error because the argument is not a string

// to store multiple types in an array, we can use union types
let mixed: (number |string)[] = [];
mixed.push(1);
mixed.push("1");
mixed.push(true); // this will throw an error because the argument is not a number or a string

let mixed2: Array<number | string> = []; // this is equivalent to let mixed2: (number | string)[] = [];