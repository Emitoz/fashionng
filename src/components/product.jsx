import { Link } from "react-router-dom";

export const Product = ({ product }) => {
    

    return (
        <Link to={{ pathname: `/products/${product.name}`, state: { product } }} className="item-card-link">
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
                </div>
                <h4 className="product-name">{product.name}</h4>
            </div>
        </Link>
    )
}