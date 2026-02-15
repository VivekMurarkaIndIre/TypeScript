
abstract class Car {
    abstract start(): void;
    abstract stop(): void;
    abstract drive(): void;
    abstract getColor(): string;
    abstract getSpeed(): number;
    abstract getPrice(): number;
    abstract getYear(): number;
    abstract getModel(): string;
    abstract getMake(): string;
    abstract getOwner(): string;
}
let car = new Car(); // Cannot create an instance of an abstract class.

// Here BMW is showing warning because it is not implementing all the abstract methods of the Car class.
class BMW extends Car {
    start(): void {
        console.log("BMW is starting");
    }
    stop(): void {
        console.log("BMW is stopping");
    }
    drive(): void {
        console.log("BMW is driving");
    }
}
// Here Mercedes is not showing warning because it is implementing all the abstract methods of the Car class.
class Mercedes extends Car {
    start(): void {
        console.log("Mercedes is starting");
    }
    stop(): void {
        console.log("Mercedes is stopping");
    }
    drive(): void {
        console.log("Mercedes is driving");
    }
    getColor(): string {
        return "Red";
    }
    getSpeed(): number {
        return 100;
    }
    getPrice(): number {
        return 100000;
    }
    getYear(): number {
        return 2020;
    }
    getModel(): string {
        return "S-Class";
    }
    getMake(): string {
        return "Mercedes";
    }
    getOwner(): string {
        return "John Doe";
    }
}