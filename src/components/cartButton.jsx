import { connect } from "react-redux";
import { toggleCartHidden } from "../redux/cart/cart.actions";

const CartButton = ({ toggleCartHidden, cartItems }) => {
    return (
        <div className="cart-btn" onClick={toggleCartHidden}>
            <i className="feather-shopping-bag "></i>
            {cartItems.length > 0 && <span className="item-counter">{cartItems.length}</span>}
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartButton);