import { CartActionTypes } from "./cart.types";
import { addCartItem, decreaseItemQuantity, removeCartItem } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    priceTotal: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            }
        case CartActionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: decreaseItemQuantity(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;