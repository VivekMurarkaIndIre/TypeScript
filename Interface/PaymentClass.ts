//Class 'PaymentClass' incorrectly implements interface 'PaymentInterface'.
class PaymentClass implements PaymentInterface {

}
// This is correct because the class PaymentClass2 implements the interface PaymentInterface.
class PaymentClass2 implements PaymentInterface {
    id: number;
    amount: number;
    currency:string;
    refund(): void {
        console.log("Payment refunded successfully");
    }
}

interface PaymentInterface2 {
    getCurrentBalance(): number;
}

// You can implement more than one interface in a class.
class PaymentClass3 implements PaymentInterface, PaymentInterface2 {
    // id: number;
    // amount: number;
    // currency:string;
   
    constructor(public id: number, public amount: number, public currency:string) {}
    refund(): void {
        console.log("Payment refunded successfully");
    }
    getCurrentBalance(): number {
        return 100;
    }
}

function checkPayemntRefund(payment: PaymentInterface) {
    // we don't need to check the type of the payment, we can just call the refund method.
    return payment.refund();
}