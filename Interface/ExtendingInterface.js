// PaymentProcessorImpl implements both the CurrencyConverter and PaymentProcessor interfaces.
var PaymentProcessorImpl = /** @class */ (function () {
    function PaymentProcessorImpl() {
    }
    PaymentProcessorImpl.prototype.convert = function (amount, from, to) {
        return amount;
    };
    PaymentProcessorImpl.prototype.processPayment = function (amount, currency) {
        console.log("Processing payment of ".concat(amount, " ").concat(currency));
    };
    return PaymentProcessorImpl;
}());
