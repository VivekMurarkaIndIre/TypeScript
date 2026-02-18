export {}
type user= {
    name: string;
    age: number;
    email: string;
}

type UserKeys = keyof user;

function getUserKey(user: user, key: UserKeys) {
    return user[key];
}

console.log(getUserKey({name: "John", age: 20, email: "john@example.com"}, "name"));

console.log(getUserKey({name: "John", age: 20, email: "john@example.com"}, "age")); // this will throw an error because the key is not in the user object


function getProperty<T extends object, U extends keyof T>(obj: T, key: U) {
    const value = obj[key];
    if (value === undefined) {
        throw new Error(`Property ${String(key)} does not exist on the object`);
    }
    return value;
}

const user2 = {name: "John", age: 20, email: "john@example.com"};

const name = getProperty(user2, "name");