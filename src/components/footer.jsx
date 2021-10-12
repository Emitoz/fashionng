import { Link } from 'react-router-dom';
import logoDark from '../assets/img/Logo dark.svg';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-flex">
                    <div className="brand">
                        <Link to="/">
                            <img className="logo" src={logoDark} alt=""/>
                        </Link>
                    </div>
                    <ul className="contact-links">
                        <li className="contact-link">
                            <Link to="/"><i className="feather-map-pin"></i> Lagos, Nigeria</Link>
                        </li>
                        <li className="contact-link">
                            <Link to="/"><i className="feather-smartphone"></i> +234 8134225805</Link>
                        </li>
                        <li className="contact-link">
                            <Link to="/"><i className="feather-at-sign"></i> info@fashion.ng</Link>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li className="social-link">
                            <Link to="/"><i className="feather-instagram"></i></Link>
                        </li>
                        <li className="social-link">
                            <Link to="/"><i className="feather-facebook"></i></Link>
                        </li>
                        <li className="social-link">
                            <Link to="/"><i className="feather-twitter"></i></Link>
                        </li>
                    </ul>
                </div>
                <div className="gray-line"></div>
                <p className="copyright">© 2021 Fashionng</p>
            </div>
        </footer>
    )
}