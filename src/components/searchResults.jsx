import { Link } from 'react-router-dom';

export const SearchResults = ({ keyword, products, categories }) => {
        
    return (
        <div className="search-results-wrapper">
            <div className="search-main">
                <div className="search-container">
                    <h4 className="search-results-heading">Results for <span className="search-keyword">{keyword}</span></h4>

                    <div className="search-categories-flex">
                        {
                            categories.map((category, index) => (
                                <Link 
                                    to={`/categories/${category.name}`} 
                                    className="item-card-link" key={index}>
                                    <div className="search-category">
                                        {category.name}
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="search-divider"></div>
                <div className="search-container">
                    <div className="search-products">
                        {
                            products.map((product, index) => (
                                <Link 
                                    to={{ pathname: `/products/${product.name}`, state: { product } }} 
                                    className="item-card-link" key={index}>
                                    <div className="search-product" >
                                        <div className="search-product-image bg-image" style={{ background: `url(${product.images.main})` }}>
                                            <div className="search-image-overlay"></div>
                                        </div>
                                        <div className="search-product-info">
                                            <h4 className="search-product-name">{product.name}</h4>
                                            <h5 className="search-product-price">&#8358;{product.price}</h5>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}