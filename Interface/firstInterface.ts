// Interface key word is pure typescript keyword, it is not a javascript keyword.
interface Payment {
    id: number;
    amount: number;
    currency:string;

    pay(): void;
    refund(): void;
    getCurrentBalance(): number;

}
//Property 'refund' is missing in type '{ id: number; amount: number; currency: string; pay(): void; }' but required in type 'Payment'.
// This is because the interface Payment has a required property called refund.
let payment1: Payment = {
    id: 1,
    amount: 100,
    currency: "USD",
    pay(): void {
        console.log("Payment made successfully");
    },
    getCurrentBalance() 
}