export {}; // Make this file a module

enum ROLES {
    ADMIN,
    USER,
    GUEST,
}

let userRole: ROLES = ROLES.ADMIN;
userRole =  0; // this is valid because under the hood, enum is just a number, with first value starting from 0, hence 0  is admin

// we can also assign custom values to the enum
enum NEW_ROLES {
    ADMIN = 1, // counting starts from 1 now
    USER ,
    GUEST 
}

let userRole2: NEW_ROLES = ROLES.ADMIN;
userRole2 = 1; // this is valid because we assigned 1 to ADMIN
userRole2 = 2; // this is valid because we assigned 2 to USER
userRole2 = 3; // this is valid because we assigned 3 to GUEST


// Literal Types

let userRole3: "admin" | "user" | "guest" ; // this means it can userRole3 can be only "admin", "user" or "guest"
console.log(userRole3); // this will throw an error because we didn't assign any value to userRole3
userRole3 = "police"; // this will throw an error because "police" is not a valid value
userRole3 = "admin"; // this is valid because we assigned "admin" to userRole3

// we can use numbers as well for literal types
let userRole4: 1 | 2 | 3 = 1;
userRole4 = 2; // this is valid because we assigned 2 to userRole4
userRole4 = 3; // this is valid because we assigned 3 to userRole4
userRole4 = 4; // this will throw an error because 4 is not a valid value


// we can use this in tuples
let coordinates1: [ 1|0|-1, number]= [0,3]; // this means the first element can be only 1, 0 or -1, and the second element can be any number
let  coordinates2: [1|0|-1, number] = [2,3]; // this will throw an error because 2 is not a valid value


