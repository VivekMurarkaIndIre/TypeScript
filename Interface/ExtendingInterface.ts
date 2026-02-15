
interface CurrencyConverter {
    convert(amount: number, from: string, to: string): number;
}

interface PaymentProcessor extends CurrencyConverter {
    processPayment(amount: number, currency: string): void;
}

// PaymentProcessorImpl implements both the CurrencyConverter and PaymentProcessor interfaces.
class PaymentProcessorImpl implements PaymentProcessor {
    convert(amount: number, from: string, to: string): number {
        return amount;
    }
    processPayment(amount: number, currency: string): void {
        console.log(`Processing payment of ${amount} ${currency}`);
    }
}

