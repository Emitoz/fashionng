import { connect } from "react-redux";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";

const CartButton = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-btn" onClick={toggleCartHidden}>
            <i className="feather-shopping-bag "></i>
            {itemCount > 0 && <span className="item-counter">{itemCount}</span>}
        </div>
    )
}

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartButton);