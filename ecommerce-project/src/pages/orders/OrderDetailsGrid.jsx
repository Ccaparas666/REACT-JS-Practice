import dayjs from 'dayjs';
import BuyAgain from '../../assets/images/icons/buy-again.png';
import { Fragment } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export function OrderDetailsGrid({ order, loadCart }) {
    return (
        <div className="order-details-grid">
            {order.products.map((product) => {

                const addToCart = async () => {
                    await axios.post('/api/cart-items', {
                        productId: product.productId,
                        quantity: 1
                    });

                    await loadCart();
                }
                return (
                    <Fragment key={product.productId}>
                        <div className="product-image-container">
                            <img src={product.product.image} />
                        </div>

                        <div className="product-details">
                            <div className="product-name">
                                {product.product.name}
                            </div>
                            <div className="product-delivery-date">
                                {dayjs(product.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="product-quantity">
                                Quantity: {product.quantity}
                            </div>
                            <button className="buy-again-button button-primary" onClick={addToCart}>
                                <img className="buy-again-icon" src={BuyAgain} />
                                <span className="buy-again-message">Add to Cart</span>
                            </button>
                        </div>

                        <div className="product-actions">
                            <Link to={`/tracking/${order.id}/${product.product.id}`}>
                                <button className="track-package-button button-secondary">
                                    Track package
                                </button>
                            </Link>
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
}