export const addCartItem = (cartItems, item) => {
    const existingItem = cartItems.find(i => i.id === item.id);

    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === item.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [ ...cartItems, item ];
}

export const removeCartItem = (cartItems, item) => cartItems.filter(i => i.id !== item.id);

export const decreaseItemQuantity = (cartItems, item) => {
    const existingItem = cartItems.find(i => i.id === item.id);

    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== item.id);
    }

    return cartItems.map(cartItem => 
        cartItem.id === existingItem.id ? { ...existingItem, quantity: existingItem.quantity - 1 }
        : cartItem
    );
}