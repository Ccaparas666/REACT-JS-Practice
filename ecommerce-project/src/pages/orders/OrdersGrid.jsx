import { OrderHeader } from './OrderHeader';
import { OrderDetailsGrid } from './OrderDetailsGrid'

export function OrdersGrid({ orders, loadCart }) {
    return (
        <div className="orders-grid">
            {orders.map((order) => {
                return (
                    <div key={order.id} className="order-container">
                        <OrderHeader order={order} />

                        {/* <div className="order-details-grid">
                            {order.products.map((product) => {
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
                                            <button className="buy-again-button button-primary">
                                                <img className="buy-again-icon" src={BuyAgain} />
                                                <span className="buy-again-message">Add to Cart</span>
                                            </button>
                                        </div>

                                        <div className="product-actions">
                                            <Link to="/tracking">
                                                <button className="track-package-button button-secondary">
                                                    Track package
                                                </button>
                                            </Link>
                                        </div>
                                    </Fragment>
                                );
                            })}
                        </div> */}
                        <OrderDetailsGrid order={order} loadCart={loadCart}/>
                    </div>
                );
            })}
        </div>
    );
}