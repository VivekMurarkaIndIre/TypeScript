export {}; // Make this file a module

let userName : string = "John";

let age : number = 20; // we don't always need to provide type inference, as typsescipt cam infer the type of the variable on its own
let age2 = 20; // this is also valid, but it's not recommended

let isStudent : boolean = true;
console.log(userName);
console.log(typeof age === typeof age2);
