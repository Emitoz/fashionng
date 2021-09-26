import { useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router";
import { Button } from "../../components/button";
import { CartContext } from "../../context/cart";
import { Gallery } from "./gallery";

export const ProductDetails = () => {
    const { state: {product} } = useLocation();

    const { items, setItems, itemCount, setItemCount, priceTotal, setPriceTotal } = useContext(CartContext);

    const [ activeSize, setActiveSize ] = useState(product.sizes ? product.sizes[0] : null);
    const [ activeColor, setActiveColor ] = useState(product.colors ? product.colors[0] : null);
    const [ quantity, setQuantity ] = useState(1);

    const addItemToCart = product => {
        if (items.some(item => item.id === product.id)) {
            // setItems(items.map(item => item.id === product.id ? { ...product, quantity: product.quantity + 1 } : item));
            return;
        };
        setItems([...items, {...product, quantity, color: activeColor, size: activeSize}]);
        setItemCount(itemCount + 1);
        setPriceTotal(priceTotal + product.price);
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <section>
            <div className="container">
                <div className="product-details-flex">
                    <Gallery images={product.images}/>
                    <div className="product-info">
                        <h2 className="product-name">{product.name}</h2>
                        <h4 className="product-price">&#8358;{product.price}</h4>
                        {
                            product.sizes &&
                            <div className="info">
                                <p className="info-heading">Size</p>
                                <div className="info-flex">
                                    {
                                        product.sizes
                                            .map((size, index) => 
                                                <div 
                                                    key={index} 
                                                    className={size === activeSize ? 'size active' : 'size'}
                                                    onClick={() => setActiveSize(size)}>
                                                        {size}
                                                </div>)                               
                                    }
                                </div>
                            </div>
                        }
                        {
                            product.colors &&
                            <div className="info">
                                <p className="info-heading">Color</p>
                                <div className="info-flex">
                                    {
                                        product.colors
                                            .map((color, index) => 
                                                <div 
                                                    key={index} 
                                                    className={color === activeColor ? 'color active' : 'color'} 
                                                    style={{background: `${color}`, color: color.toLowerCase() !== 'black' ? 'black': '#E3D6BB' }}
                                                    onClick={() => setActiveColor(color)}>
                                                    {color}
                                                </div>)                               
                                    }
                                </div>
                            </div>
                        }

                        <div className="quantity-controls">
                            <span className="action" onClick={() => decreaseQuantity()}>-</span>
                            <span className="quantity">{quantity}</span>
                            <span className="action" onClick={() => increaseQuantity()}>+</span>
                        </div>

                        <Button 
                            theme="gold" 
                            text="Add to cart" 
                            icon="feather-shopping-cart" 
                            clickHandler={() => addItemToCart(product)}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
