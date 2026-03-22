import { formatMoney } from "../../utils/money";

export function PaymentSummary({ paymentSumarry }) {
    return (
        <>
            <div className="payment-summary">
                <div className="payment-summary-title">
                    Payment Summary
                </div>
                {paymentSumarry && (
                    <>
                        <div className="payment-summary-row">
                            <div>Items ({paymentSumarry.totalItems}):</div>
                            <div className="payment-summary-money">
                                {formatMoney(paymentSumarry.productCostCents)}
                            </div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Shipping &amp; handling:</div>
                            <div className="payment-summary-money">
                                {formatMoney(paymentSumarry.shippingCostCents)}
                            </div>
                        </div>

                        <div className="payment-summary-row subtotal-row">
                            <div>Total before tax:</div>
                            <div className="payment-summary-money">
                                {formatMoney(paymentSumarry.totalCostBeforeTaxCents)}
                            </div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Estimated tax (10%):</div>
                            <div className="payment-summary-money">
                                {formatMoney(paymentSumarry.taxCents)}
                            </div>
                        </div>

                        <div className="payment-summary-row total-row">
                            <div>Order total:</div>
                            <div className="payment-summary-money">
                                {formatMoney(paymentSumarry.totalCostCents)}
                            </div>
                        </div>

                        <button className="place-order-button button-primary">
                            Place your order
                        </button>
                    </>
                )}

            </div>
        </>
    );
}