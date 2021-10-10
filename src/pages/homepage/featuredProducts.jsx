import { connect } from "react-redux";
import { Product } from "../../components/product";
import { selectProducts } from "../../redux/shop/shop.selectors";

const FeaturedProducts = ({ products }) => {
    return (
        <section className="featured">
            <div className="container">
                <h3>Featured collection</h3>
                <div className="featured-grid">
                    {products
                        .filter((product, index) => index < 3)
                        .map(product => <Product product={product} key={product.id}/>) 
                    }
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    products: selectProducts(state)
});

export default connect(
    mapStateToProps
)(FeaturedProducts);