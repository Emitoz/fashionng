import { useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "../../components/cartItem";
import { FormInput } from "../../components/formInput"
import StripeCheckoutButton from "../../components/stripeButton";
import { selectCartItems, selectPriceTotal } from "../../redux/cart/cart.selectors";

const Checkout = ({ cartItems, priceTotal }) => {

    useEffect(() => {
        document.title = "Checkout | Fashionng";
        return () => {};;
    }, []);

    return(
        <section className="checkout">
            <div className="container">
                <h1 className="page-heading">Checkout</h1>
                <form action="">
                    <div className="checkout-flex">
                        <div className="delivery">
                            <h3><i className="feather-truck"></i> Delivery information</h3>
                            <div className="form-inputs">
                                <FormInput type="text" placeholder="Your name" name="name"/>
                                <FormInput type="tel" placeholder="Phone" name="phone"/>
                                <FormInput isTextArea={true} placeholder="Your address" name="address"/>
                                <FormInput type="text" placeholder="City" name="city"/>
                                <FormInput type="text" placeholder="Country" name="country"/>
                            </div>
                        </div>
                        <div className="cart">
                            <h5>Order summary</h5>
                            <div className="cart-item-list">
                                {cartItems.map(item => <CartItem item={item} key={item.id} />)}
                            </div>
                            <div className="total-proceed">
                                <div className="cart-total">
                                    <span className="total-price">&#8358;{priceTotal}</span> <span className="total-text">TOTAL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gray-line"></div>
                    <div className="confirm-order">
                        <p><i className="feather-info"></i> By clicking on confirm order you approve payment of <span className="total">&#8358;{priceTotal}</span> for the above items</p>
                        <StripeCheckoutButton price={priceTotal}/>
                    </div>
                </form>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    priceTotal: selectPriceTotal(state)
});

export default connect(
    mapStateToProps
)(Checkout);