import { Product } from "../../components/product";

export const FeaturedProducts = ({ products:featuredProducts }) => {
    return (
        <section className="featured">
            <div className="container">
                <h3>Featured collection</h3>
                <div className="featured-grid">
                    {featuredProducts
                        .filter((product, index) => index < 3)
                        .map(product => <Product product={product} key={product.id}/>) 
                    }
                </div>
            </div>
        </section>
    )
}