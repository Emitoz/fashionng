export const getSearchResults = (categories, products, keyword) => {
    const filteredCategories = categories
        .filter(category => 
            category.name.toLowerCase().includes(keyword.toLowerCase()));
    
    const filteredProducts = products
            .filter(product =>
                product.name.toLowerCase().includes(keyword.toLowerCase()) 
                || product.category.toLowerCase().includes(keyword.toLowerCase()));

    return { 
        categories: filteredCategories, 
        products: filteredProducts 
    };
}