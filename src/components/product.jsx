import { useContext } from "react";
import { CartContext } from "../context/cart";
import { Button } from "./button";

export const Product = ({ product }) => {
    const { items, setItems, itemCount, setItemCount, priceTotal, setPriceTotal } = useContext(CartContext);

    const addItemToCart = product => {
        if (items.some(item => item.id === product.id)) {
            // setItems(items.map(item => item.id === product.id ? { ...product, quantity: product.quantity + 1 } : item));
            return;
        };
        setItems([...items, {...product, quantity: 1}]);
        setItemCount(itemCount + 1);
        setPriceTotal(priceTotal + product.price);
    }

    return (
        <div className="product">
            <div className="product-card">
                <div className="price">
                    <div className="line"></div>
                    <div className="price-container">
                        <p>&#8358;{product.price}</p>
                    </div>
                </div>
                <div className="product-image-wrapper">
                    <div className="product-image bg-image" style={{ background: `url(${product.images.main})` }}>
                        <div className="product-overlay">
                        </div>
                    </div>
                </div>
                <Button theme="gold" text="Add to cart" icon="feather-shopping-cart" clickHandler={() => addItemToCart(product)}/>
            </div>
            <h4 className="product-name">{product.name}</h4>
        </div>
    )
}