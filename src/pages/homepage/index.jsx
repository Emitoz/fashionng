import React, { useContext, useState } from 'react';

import { Categories } from './categories';
import { FeaturedProducts } from './featuredProducts';
import { Hero } from './hero';

import { products as allProducts } from '../../context/products';
import { categories as allCategories } from '../../context/categories';

export const HomePage = () => {

    const [ products, setProducts ] = useState(allProducts);
    const [ categories, setCategories ] = useState(allCategories);

    return (
        <>
            <Hero />
            <Categories categories={categories} />
            <FeaturedProducts products={products}/>
        </>
    )
}
