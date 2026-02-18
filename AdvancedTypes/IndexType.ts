type DataStore = {
    [prop:string]: string | number | boolean;
}
// this way we can store the object with any key and value of type string, number or boolean
let data: DataStore = {
    name: "John",
    age: 20,
    isStudent: true,
}

data.name;
data.age;
data.isStudent;

data.email; // this will throw an error because the property is not defined


// we could create Record type to store the object with any key and value of type string, number or boolean
// this is a built in type in typescript
let data2: Record<string, string | number | boolean> = {
    name: "John",
    age: 20,
    isStudent: true,
}

data2.name;
data2.age;
data2.isStudent;

data2.email; // this will throw an error because the property is not defined


