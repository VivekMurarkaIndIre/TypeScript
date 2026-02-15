class Students {
    private _name: string;
    get name(): string {
        return this._name;
    }

    set name(n:string){
        this._name = n;
    }
}

let student = new Students();
student.name = "John";
console.log(student.name); // setters and getters are used to access the private properties outside the class