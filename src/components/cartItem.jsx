import { useContext } from "react";
import { CartContext } from "../context/cart";

export const CartItem = ({ item }) => {

    const { items, setItems, itemCount, setItemCount, priceTotal, setPriceTotal } = useContext(CartContext);

    const removeItem = item => {
        setItems(items.filter(cartItem => cartItem.id !== item.id));
        setItemCount(itemCount - 1);
        setPriceTotal(priceTotal - (item.price * item.quantity))
    }

    const increaseQuantity = currentItem => {
        setItems(items.map(item => 
            item.id === currentItem.id ? 
            { ...currentItem, quantity: currentItem.quantity + 1 }
            :
            item));
        setPriceTotal(priceTotal + currentItem.price);
    }

    const reduceQuantity = currentItem => {
        setPriceTotal(priceTotal - currentItem.price);
        if (currentItem.quantity === 1) { 
            removeItem(currentItem);
            return;
        }
        setItems(items.map(item => 
            item.id === currentItem.id ?
            { ...currentItem, quantity: currentItem.quantity - 1 }
            :
            item 
            ));
    }

    return (
        <div className="cart-item">
            <div className="cart-item-flex">
                <div className="cart-image-wrapper">
                    <div className="cart-image-line"></div>
                    <div className="cart-image bg-image" style={{ background: `url(${item.images.main})` }}></div>
                </div>
                <div className="cart-content">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <div className="item-properties">
                        <div className="item-property">
                            Size <span className="item-value">{item.size}</span>
                        </div>
                        <div className="item-property">
                            Colour <span className="item-value">{item.color}</span>
                        </div>
                    </div>
                    <div className="cart-price-actions">
                        <div><span className="cart-item-price">&#8358;{item.price}</span> <span className="item-qty">x {item.quantity}</span></div>
                        <div className="actions">
                            <span type="button" className="minus cart-action" onClick={() => reduceQuantity(item)}>-</span>
                            <span type="button" className="plus cart-action" onClick={() => increaseQuantity(item)}>+</span>
                            <span type="button" className="remove-item" onClick={() => removeItem(item)}><i className="feather-x"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}