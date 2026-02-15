class Teacher {
    public firstName: string;
    lastName: string;
    private age: number;
    protected email: string;
    readonly prefix: string;
    constructor(firstName: string, lastName: string, age: number, email: string , prefix: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.prefix = prefix; 
    }
}
 
let teacher = new Teacher("John", "Doe", 30, "john.doe@example.com", "Mr.");

console.log(teacher.firstName);
console.log(teacher.lastName);
console.log(teacher.age); // cannot access private property outside the class
console.log(teacher.email); // cannot access protected property outside the class
console.log(teacher.prefix); // can access readonly property outside the class
teacher.prefix = "Mrs."; // but cannot change readonly property outside the class
teacher.firstName = "Jane"; // can change public property outside the class
teacher.lastName = "Smith"; // can change public property outside the class
teacher.age = 31; // cannot access or change private property outside the class
teacher.email = "jane.smith@example.com"; // cannot access or change protected property outside the class