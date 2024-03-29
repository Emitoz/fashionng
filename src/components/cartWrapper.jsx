import { Link } from "react-router-dom"
import { createStructuredSelector } from 'reselect'

import { Button } from "./button"
import CartItem from "./cartItem"

import emptyCart from "../assets/img/empty-cart.svg";
import { connect } from "react-redux"
import { toggleCartHidden } from "../redux/cart/cart.actions"
import { selectCartHidden, selectCartItems, selectPriceTotal } from "../redux/cart/cart.selectors"

const CartWrapper = ({ toggleCartHidden, hidden, cartItems, priceTotal }) => {

    return (
        <>
            {
                hidden === false &&
                <div className="cart-wrapper">
                    <div className="cart-header">
                        <h5>My Cart</h5>
                        <span className="close-cart" onClick={toggleCartHidden}><i className="feather-x"></i></span>
                    </div>
                    <div className="gray-line"></div>

                    {
                        cartItems.length > 0 ?
                            <div className="cart-item-list">
                                {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
                            </div>
                        :
                        <div className="empty-cart">
                            <img src={emptyCart} alt="empty-cart"/>
                            <p>Your cart is empty, continue shopping to add items</p>
                        </div>
                    }


                    <div className="total-proceed">
                        {
                            cartItems.length > 0 && 
                            <div className="cart-total">
                                <span className="total-price">&#8358;{priceTotal}</span> <span className="total-text">TOTAL</span>
                            </div>
                        }
                        <div className="proceed">
                            <Button clickHandler={toggleCartHidden} text="Continue shopping" theme="ghost-dark" className="continue-shopping"/>
                            {
                                cartItems.length > 0 &&
                                <Link to="/checkout">
                                    <Button text="Proceed to checkout" theme="dark" icon="feather-shopping-cart" clickHandler={toggleCartHidden}/>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    cartItems: selectCartItems,
    priceTotal: selectPriceTotal
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartWrapper);