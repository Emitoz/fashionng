import heroShot from "../../assets/img/hero shot.jpg";
import { Button } from "../../components/button";
import TypeIt from "typeit-react";

export const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-flex">
                    <div className="hero-content">
                        <h1 className="catch-phrase">
                            <TypeIt
                                options={{ loop: true }}
                                getBeforeInit={instance => {
                                    instance.type('Taste. Elegance.').pause(1000).delete(9).pause(1200).type('Elegance. Yuo.').pause(600).delete(3).pause(600).type('ou.').pause(3000);
                                    return instance
                                }}>
                            </TypeIt>
                        </h1>
                        <p>Explore our amazing catalog of items, we’ve got a fit for all sizes, moods and tastes.</p>
                        <div className="hero-btns">
                            <Button theme="gold" text="Start shopping" icon="feather-shopping-cart"/>
                            <Button theme="ghost" text="Join us"/>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={heroShot} alt=""/>
                    </div>
                </div>
            </div>
    </section>
    )
}