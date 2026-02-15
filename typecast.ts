// typecasting is a way to tell typescript that a value is of a specific type

let age: any = 20;
age = "20"; // this will throw an error because the variable is a number
age = true; // this will throw an error because the variable is a number
age = {name: "John", age: 20, isStudent: false};
age =  null // this will throw an error because the variable is a number

let age2: number | null = age as number | null; // this is called typecasting, it tells typescript that the value is a number or null
console.log(age2);