import heroShot from "../assets/img/hero shot.jpg";

export const Hero = () => {
    return (
        <section class="hero">
            <div class="container">
                <div class="hero-flex">
                    <div class="hero-content">
                        <h1 id="catch-phrase">Taste. Elegance. You.</h1>
                        <p>Explore our amazing catalog of items, we’ve got a fit for all sizes, moods and tastes.</p>
                        <div class="hero-btns">
                            <button class="button button-gold">Start shopping<i class="feather-shopping-cart"></i></button>
                            <button class="button button-ghost">Join Us</button>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src={heroShot} alt=""/>
                    </div>
                </div>
            </div>
    </section>
    )
}