import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [ items, setItems ] = useState([]);
    const [ itemCount, setItemCount ] = useState(items.length);
    const [ cartOpen, setCartOpen ] = useState(false);
    
    // let totalPrice = items.reduce((total, item) => {
    //     return total + (item.price * item.quantity);
    // }, 0);
    
    const [ priceTotal, setPriceTotal ] = useState(0);

    return (
        <CartContext.Provider value={
            { 
                items, setItems, 
                itemCount, setItemCount, 
                cartOpen, setCartOpen, 
                priceTotal, setPriceTotal 
            }
        }>
            {children}
        </CartContext.Provider>
    )
}