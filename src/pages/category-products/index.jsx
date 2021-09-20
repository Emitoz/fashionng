import { useParams } from "react-router";
import { Product } from "../../components/product"

import { products } from "../../context/products";

export const CategoryProducts = () => {

    const { category } = useParams();

    const categoryProducts = products.
        filter(product => category.toLowerCase() === product.category.toLowerCase());

    return (
        <section>
            <div className="container">
                <h1 className="page-heading">{category}</h1>

                <div className="featured-grid">
                    { categoryProducts.map(product => <Product product={product} key={product.id}/>) }
                </div>
            </div>
        </section>
    )
}