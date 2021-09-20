import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/cart"
import { Button } from "./button"
import { CartItem } from "./cartItem"

import emptyCart from "../assets/img/empty-cart.svg";

export const CartWrapper = () => {

    const { items, itemCount, cartOpen, setCartOpen, priceTotal } = useContext(CartContext);

    return (
        <>
            {
                cartOpen &&
                <div className="cart-wrapper">
                    <div className="cart-header">
                        <h5>My Cart</h5>
                        <span className="close-cart" onClick={() => setCartOpen(false)}><i className="feather-x"></i></span>
                    </div>
                    <div className="gray-line"></div>

                    {
                        itemCount > 0 ?
                            <div className="cart-item-list">
                                {items.map(item => <CartItem key={item.id} item={item}/>)}
                            </div>
                        :
                        <div className="empty-cart">
                            <img src={emptyCart} alt="empty-cart"/>
                            <p>Your cart is empty, continue shopping to add items</p>
                        </div>
                    }


                    <div className="total-proceed">
                        {
                            itemCount > 0 && 
                            <div className="cart-total">
                                <span className="total-price">&#8358;{priceTotal}</span> <span className="total-text">TOTAL</span>
                            </div>
                        }
                        <div className="proceed">
                            <Button clickHandler={() => setCartOpen(false)} text="Continue shopping" theme="ghost-dark" className="continue-shopping"/>
                            {
                                itemCount > 0 &&
                                <Link to="/checkout">
                                    <Button text="Proceed to checkout" theme="dark" icon="feather-shopping-cart"/>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}