class Subject {
    static maxScore: number = 100;
    name: string;
    private standard: number;
    protected _marks: number;
    constructor(name: string, standard: number) {
        this.name = name;
        this.standard = standard;
    }
    get marks(): number {
        return this.marks;
    }
    set marks(m: number) {
        this.marks = m;
    }
}

class Student extends Subject {
    constructor(name: string, standard: number, private firstName: string, private lastName: string) {
        super(name, standard);
    }
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name: string) {
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let inheritanceStudent = new Student("Math", 10, "John", "Doe");
console.log(inheritanceStudent.fullName);
inheritanceStudent.fullName = "Jane Doe";
console.log(inheritanceStudent.fullName);
inheritanceStudent.marks = 90;
console.log(inheritanceStudent.marks);