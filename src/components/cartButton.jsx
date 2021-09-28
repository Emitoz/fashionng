import { connect } from "react-redux";
import { toggleCartHidden } from "../redux/cart/cart.actions";

const CartButton = ({ toggleCartHidden }) => {

    // const handleCartToggle = () => {
    //     console.log('Clicked');
    //     toggleCartHidden();
    // }

    return (
        <div className="cart-btn" onClick={toggleCartHidden}>
            <i className="feather-shopping-bag "></i>
            {/* {itemCount > 0 && <span className="item-counter">{itemCount}</span>} */}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    null,
    mapDispatchToProps
)(CartButton);