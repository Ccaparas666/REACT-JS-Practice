import { formatMoney } from "../../utils/money";
import axios from "axios";
import { useState } from "react";
export function CartItemDetails({ cartItem, loadCart }) {
    const [updateButton, setUpdateButton] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)
        await loadCart();
    };


    const updateCartItem = async () => {
        if (updateButton) {

            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantity),
            });
            await loadCart();
            setUpdateButton(false);

        } else {
            setUpdateButton(true);
        }
    }

    const updateQuantity = (event) => {
        setQuantity(event.target.value);
    };

    const keyUpdateQuantity = (event) => {
        if (event.key === 'Enter'){
            updateCartItem();
        }else if(event.key ==='Escape'){
            setQuantity(cartItem.quantity);
            setUpdateButton(false);
            console.log('I press escape')
        }
    };
    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: {updateButton ?
                            <input type="text" className="quantity-textbox" 
                            value={quantity} 
                            onChange={updateQuantity} 
                            onKeyDown={keyUpdateQuantity}/> :
                            <span className="quantity-label">{cartItem.quantity}</span>}
                    </span>
                    <span className="update-quantity-link link-primary" onClick={updateCartItem}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}