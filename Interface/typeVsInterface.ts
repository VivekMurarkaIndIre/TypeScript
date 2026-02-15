type PaymentType = {
    id: number;
    amount: number;
    currency:string;

    pay(): void;
    refund(): void;
    getCurrentBalance(): number;
}
//  Property 'refund' is missing in type '{ id: number; amount: number; currency: string; pay(): void; getCurrentBalance(): number; }' but required in type 'PaymentType
// This is because the type PaymentType is not a union type, it is a type alias.
let payment2: PaymentType = {
    id: 1,
    amount: 100,
    currency: "USD",
    pay(): void {
        console.log("Payment made successfully");
    },
   
    getCurrentBalance(): number {
        return 100;
    }
}

// Now since both interface and type behave almost similary, ther is a subtle difference, 
// and that is Declaration Merging.

// Declaration Merging is a feature that allows you to merge two interfaces or types with the same name.
// This is useful when you want to merge two interfaces or types with the same name.
// For example, you can merge two interfaces with the same name like this:

interface PaymentInterface {
    id: number;
    amount: number;
    currency:string;
}

interface PaymentInterface {
    refund(): void;
}

// This will merge the two interfaces and create a new interface with the properties of both interfaces.
// This is useful when you want to merge two interfaces or types with the same name.
// For example, you can merge two interfaces with the same name like this:
// resulting in
// interface PaymentInterface {
//     id: number;
//     amount: number;
//     currency:string;
//     refund(): void;
// }

let payment3: PaymentInterface = {
    id: 1,
    amount: 100,
    currency: "USD",
    refund(): void {
        console.log("Payment refunded successfully");
    }
}

// But not possible with type alias,
//Duplicate identifier 'PaymentType'.
type PaymentType = {
    id: number;
    amount: number;
    currency:string;
    refund(): void;
}
