function add (a:number, b:number):number { // here we don't need to specify as it can infer the type of the function return value
    return a+b;
}

// when it doesn't return anything, we can use void
function add2 (a:number, b:number):void {
    console.log(a+b);
}

// when we know function will never complete, we can use never
function add3 (a:number, b:number):never {
    throw new Error("This function will never complete");
}

function endlessLoop(): never {
    while(true) {
        console.log("This function will never complete");
    }
}

function divide (a:number, b:number):never | number{
    if(b <= 0)
        throw new Error("This function will never complete");
    return a+b;
}

// here the function might never complete, but we know it will return a number
function divide2 (a:number, b:number): number{
    if(b <= 0)
        throw new Error("This function will never complete");
    return a+b;
}

// To pass a function as a parameter, we can use a function type
function doSomething(cb: Function): void {
    cb();
}
// but this is not a good practice, as it allows any function to be passed as a parameter but not a specific function type,
//  like what will that db function return?, hence we can use a specific function type
function performJob(cb: () => void):void {
    cb();
}

performJob(() => {
    console.log("Job completed");
});

// we can also pass a function as a parameter with a specific type
function performJob2(cb: (a:number, b:number) => number):void {
    cb(1, 2);
}

performJob2((a, b) => {
    return a+b;
});

// we can store function in an object type
type User = {
    age: number;
    name:string;
    gender: "male" | "female";
    getName: () => string;
    getAge: () => number;
    getTitle: (gender: "male" | "female") => string;
}

let user1: User = {
    age: 20,
    name: "John",
    gender: "male",
    getName: () => "John",
    getAge: () => 20,
    getTitle: (gender) => {
        return gender === "male" ? "Mr." : "Ms.";
    }
    
}