import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    )
);

export const selectPriceTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (sum, item) => sum + (item.quantity * item.price),
        0
    )
);