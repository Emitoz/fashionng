import { useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { CartContext } from "../context/cart";
import { addItemToCart, decreaseQuantity, removeItem } from "../redux/cart/cart.actions";

const CartItem = ({ item, removeCartItem, addItemToCart, decreaseQuantity }) => {

    const { items, setItems, itemCount, setItemCount, priceTotal, setPriceTotal } = useContext(CartContext);

    // const removeItem = item => {
    //     setItems(items.filter(cartItem => cartItem.id !== item.id));
    //     setItemCount(itemCount - 1);
    //     setPriceTotal(priceTotal - (item.price * item.quantity))
    // }

    // const increaseQuantity = currentItem => {
    //     setItems(items.map(item => 
    //         item.id === currentItem.id ? 
    //         { ...currentItem, quantity: currentItem.quantity + 1 }
    //         :
    //         item));
    //     setPriceTotal(priceTotal + currentItem.price);
    // }

    // const reduceQuantity = currentItem => {
    //     setPriceTotal(priceTotal - currentItem.price);
    //     if (currentItem.quantity === 1) { 
    //         removeItem(currentItem);
    //         return;
    //     }
    //     setItems(items.map(item => 
    //         item.id === currentItem.id ?
    //         { ...currentItem, quantity: currentItem.quantity - 1 }
    //         :
    //         item 
    //         ));
    // }

    return (
        <div className="cart-item">
            <div className="cart-item-flex">
                <Link to={{ pathname: `/products/${item.name}`, state: { product: item } }}>
                    <div className="cart-image-wrapper">
                        <div className="cart-image-line"></div>
                        <div className="cart-image bg-image" style={{ background: `url(${item.images.main})` }}></div>
                    </div>
                </Link>
                <div className="cart-content">
                    <Link to={{ pathname: `/products/${item.name}`, state: { product: item } }} className="item-card-link">
                        <h4 className="cart-item-name">{item.name}</h4>
                    </Link>
                    <div className="item-properties">
                        { item.size &&
                            <div className="item-property">
                                Size <span className="item-value">{item.size}</span>
                            </div>
                        }
                        {
                            item.color &&
                            <div className="item-property">
                                Colour <span className="item-value">{item.color}</span>
                            </div>
                        }
                    </div>
                    <div className="cart-price-actions">
                        <div><span className="cart-item-price">&#8358;{item.price}</span> <span className="item-qty">x {item.quantity}</span></div>
                        <div className="actions">
                            <span type="button" className="minus cart-action" onClick={() => decreaseQuantity(item)}>-</span>
                            <span type="button" className="plus cart-action" onClick={() => addItemToCart(item)}>+</span>
                            <span type="button" className="remove-item" onClick={() => removeCartItem(item)}>
                                &#10005;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeCartItem: item => dispatch(removeItem(item)),
    decreaseQuantity: item => dispatch(decreaseQuantity(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CartItem);