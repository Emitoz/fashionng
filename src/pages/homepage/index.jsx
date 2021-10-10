import Categories from './categories';
import FeaturedProducts from './featuredProducts';
import Hero from './hero';

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Categories/>
            <FeaturedProducts/>
        </>
    )
}
