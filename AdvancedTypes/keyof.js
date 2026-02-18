function getUserKey(user, key) {
    return user[key];
}
console.log(getUserKey({ name: "John", age: 20, email: "john@example.com" }, "name"));
