import { Category } from "../../components/category";

export const Categories = ({ categories }) => {
    return (
        <section className="categories">
            <div className="container">
                <h3>Categories</h3>
                <div className="categories-grid">
                    <div className="category-wrapper">
                        <div className="category" style={{ background: '#443D2F' }}>
                            <div className="category-overlay">
                                <h5>All</h5>
                            </div>
                        </div>
                    </div>
                    {categories
                        .filter((category, index) => index < 3)
                        .map(category => <Category category={category} key={category.id}/>)}
                </div>
            </div>
        </section>
    )
}