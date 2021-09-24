import { useContext } from "react";
import { useLocation } from "react-router";
import { Button } from "../../components/button";
import { CartContext } from "../../context/cart";
import { Gallery } from "./gallery";

export const ProductDetails = () => {
    const { state: {product} } = useLocation();

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
                                            .map((size, index) => <div key={index} className={`size active`}>{size}</div>)                               
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
                                                    className={`color active`} 
                                                    style={{background: `${color}`, color: color.toLowerCase() !== 'black' ? 'black': '#E3D6BB' }}>
                                                    {color}
                                                </div>)                               
                                    }
                                </div>
                            </div>
                        }

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
