// ? is used to make the parameter optional
function logs(msg?:string) {
    if(msg) {
        console.log(msg);
    }
    return "No message provided";
}

type user = {
    name:string;
    age:number;
    role?: "admin" | "user" | "guest"; // this means the role is optional, but if its there then it can be "admin", "user" or "guest"
}

// difference between || and ??
// || is used to set a default value if the value is not provided
// ?? is used to set a default value if the value is null or undefined

let input = '';
const didProvideInput = input || "default";
const didProvideInput2 = input ?? "default";

console.log(didProvideInput);
console.log(didProvideInput2);

// difference between || and ??
// || is used to set a default value if the value is not provided
// ?? is used to set a default value if the value is null or undefined

let num =0;
const result = num || 10;
const result2 = num ?? 10;

console.log(result); // 10 
console.log(result2); // 0 // because num is 0, which is a falsy value, which is not null or undefined, so it will return 0
