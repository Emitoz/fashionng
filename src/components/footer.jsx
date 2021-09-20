import logoDark from '../assets/img/Logo dark.svg';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-flex">
                    <div className="brand">
                        <a href="#">
                            <img className="logo" src={logoDark} alt=""/>
                        </a>
                    </div>
                    <ul className="contact-links">
                        <li className="contact-link">
                            <a href="#"><i className="feather-map-pin"></i> Lagos, Nigeria</a>
                        </li>
                        <li className="contact-link">
                            <a href="#"><i className="feather-smartphone"></i> +234 8134225805</a>
                        </li>
                        <li className="contact-link">
                            <a href="#"><i className="feather-at-sign"></i> info@fashion.ng</a>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li className="social-link">
                            <a href="#"><i className="feather-instagram"></i></a>
                        </li>
                        <li className="social-link">
                            <a href="#"><i className="feather-facebook"></i></a>
                        </li>
                        <li className="social-link">
                            <a href="#"><i className="feather-twitter"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="gray-line"></div>
                <p className="copyright">© 2021 Fashionng</p>
            </div>
        </footer>
    )
}