export {}; // Make this file a module

let userName : string = "John";

let age : number = 20; // we don't always need to provide type inference, as typsescipt cam infer the type of the variable on its own
let age2 = 20; // this is also valid, but it's not recommended
age = "20"; // this will throw an error because the variable is a number

let isStudent : boolean = true;
console.log(userName);
console.log(typeof age === typeof age2);


function add(a:number, b:number): number {
    return a + b;
}

let result = add(1, 2);
let result2 = add("1", "2"); // this will throw an error because the arguments are not numbers

// Any type is a type that can be any type of value

let year : any = 2020;
year = "2020";
year = true;
year = {year: 2020};
year = [1, 2, 3];
year = () => {
    return 2020;
}
year = (a:number, b:number) => {
    return a + b;
}