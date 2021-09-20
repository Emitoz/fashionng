import { Link } from "react-router-dom"

export const Category = ({ category }) => {
    return (
        <Link to={`/categories/${category.name}`} className="item-card-link">
            <div className="category-wrapper">
                <div className="category bg-image" style={{ background: `url(${category.img})` }}>
                    <div className="category-overlay">
                        <h5>{category.name}</h5>
                    </div>
                </div>
            </div>
        </Link>
    )
}