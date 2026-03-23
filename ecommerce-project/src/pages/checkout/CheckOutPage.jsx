import axios from 'axios';
import { useState, useEffect } from 'react'
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary'
import { PaymentSummary } from './PaymentSummary';
import './CheckOutPage.css'

export function CheckOutPage({ cart, loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSumarry, setPaymentSummary] = useState(null);

    useEffect(() => {
        //OTHER METHOD FOR GETTING DATA
        // axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
        //     .then((response) => {
        //         setDeliveryOptions(response.data);
        //     });

        // axios.get('/api/payment-summary')
        //     .then((response) => {
        //         setPaymentSummary(response.data);
        //     });

        //Individual GET DATA
        // const getDeliveryOptions = async () => {
        //     const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
        //     setDeliveryOptions(response.data);
        // };
        // getDeliveryOptions();

        // const getPaymentSummary = async () => {
        //     const response = await axios.get('/api/payment-summary');
        //     setPaymentSummary(response.data);
        // }

        // getPaymentSummary();

        //MULTIPLE FUNCTION GET DATA

        const fetchCheckoutData = async () => {
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data);

            response = await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        }

        fetchCheckoutData();

    }, [cart]);
    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
            <CheckoutHeader cart={cart}/>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary
                        deliveryOptions={deliveryOptions}
                        cart={cart}
                        loadCart={loadCart}
                    />

                    <PaymentSummary
                        paymentSumarry={paymentSumarry}
                        loadCart={loadCart}
                    />

                </div>
            </div></>
    );
}