export {};
let names=["John", "Jane", "Jim"];

names.push("Max"); // this will throw an error because the array is readonly

let roles=["admin", "user", "guest"] as const;

roles.push("admin"); // Property 'push' does not exist on type 'readonly ["admin", "user", "guest"]'.ts(2339), this will throw an error because the array is readonly