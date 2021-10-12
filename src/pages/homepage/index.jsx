import { useEffect } from 'react';
import Categories from './categories';
import FeaturedProducts from './featuredProducts';
import Hero from './hero';

export const HomePage = () => {

    useEffect(() => {
        document.title = "Home | Fashionng";
        return () => {}
    }, [])

    return (
        <>
            <Hero />
            <Categories/>
            <FeaturedProducts/>
        </>
    )
}
