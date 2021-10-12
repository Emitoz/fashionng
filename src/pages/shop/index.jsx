import { useEffect } from "react";
import { connect } from "react-redux";
import { Product } from "../../components/product";
import { selectCategories, selectProducts } from "../../redux/shop/shop.selectors";

const Shop = ({ categories, products }) => {

    useEffect(() => {
        document.title = "Shop | Fashionng";
        return () => {};
    }, [])

    return (
        <section>
            <div className="container">
                <h1 className="page-heading">Shop</h1>
                { categories.map(
                    category => (
                        <>
                            <h4>{category.name}</h4>
                            <div className="featured-grid">
                                { products.filter(
                                    product => product.category.toLowerCase() === category.name.toLowerCase()
                                )
                                .map(
                                    (product, index) => <Product product={product} key={index}/>
                                ) }
                            </div>
                        </>
                    )
                ) }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    categories: selectCategories(state),
    products: selectProducts(state)
});

export default connect(
    mapStateToProps
)(Shop);