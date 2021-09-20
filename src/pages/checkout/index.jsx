import { useContext } from "react"
import { Button } from "../../components/button";
import { CartItem } from "../../components/cartItem";
import { FormInput } from "../../components/formInput"
import { CartContext } from "../../context/cart";

export const Checkout = (props) => {

    const { items, priceTotal } = useContext(CartContext);

    console.log(props);

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
                                {items.map(item => <CartItem item={item} key={item.id} />)}
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
                        <p><i className="feather-info"></i> By clicking on confirm order you approve payment of <span className="total"></span> for the above items</p>
                        <Button text="Confirm order" theme="gold" icon="feather-arrow-right-circle"/>
                    </div>
                </form>
            </div>
        </section>
    )
}