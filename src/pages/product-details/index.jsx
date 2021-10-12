import { useState } from "react";
import { useLocation } from "react-router";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

import { Button } from "../../components/button";
import { Gallery } from "./gallery";

const ProductDetails = ({ addItemToCart }) => {
    const { state: {product} } = useLocation();

    const [ activeSize, setActiveSize ] = useState(product.sizes ? product.sizes[0] : null);
    const [ activeColor, setActiveColor ] = useState(product.colors ? product.colors[0] : null);
    const [ quantity, setQuantity ] = useState(1);

    const addProductToCart = () => {
        addItemToCart({ 
            ...product, 
            quantity: quantity, 
            color: activeColor, 
            size: activeSize 
        });

        setQuantity(1);
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
                            <span className="action" onClick={() => setQuantity(quantity - 1)}>-</span>
                            <span className="quantity">{quantity}</span>
                            <span className="action" onClick={() => setQuantity(quantity + 1)}>+</span>
                        </div>

                        <Button 
                            theme="gold" 
                            text="Add to cart" 
                            icon="feather-shopping-cart" 
                            clickHandler={addProductToCart}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(
    null,
    mapDispatchToProps
)(ProductDetails);
