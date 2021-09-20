import logo from '../assets/img/Logo.svg';
import logoSm from '../assets/img/Logo-sm.svg';
import menuIcon from '../assets/img/menu-icon.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cart';

export const Navbar = () => {
    const { itemCount, setCartOpen } = useContext(CartContext);
    return (
        <>
        <div className="nav-wrapper">
            <div className="container">
                <nav className="header-nav">
                    <div className="brand">
                        <span className="menu-btn">
                            <img src={menuIcon} alt=""/>
                        </span>
                        <Link to="/">
                            <img className="logo" src={logo} alt=""/>
                            <img className="logo-sm" src={logoSm} alt=""/>
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li className="nav-link-item"><a href="#">Shop</a></li>
                        <li className="nav-link-item"><a href="#">Contact</a></li>
                        <li className="nav-link-item"><Link to="/login">Sign in</Link></li>
                    </ul>
                    <div className="search-and-cart">
                        <div className="search">
                            <i className="feather-search"></i>
                            <input type="text" placeholder="search" />
                        </div>
                        <div>
                            <div className="cart-btn" onClick={() => setCartOpen(true)}>
                                <i className="feather-shopping-bag "></i>
                                {itemCount > 0 && <span className="item-counter">{itemCount}</span>}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        <div className="mobile-menu-wrapper">
            <div className="mobile-menu">
                <div className="mobile-menu-flex">
                    <div className="top">
                        <div className="close">
                            <span className="close-menu">
                                <i className="feather-x"></i>
                            </span>
                        </div>
                        <div className="logo-area">
                            <Link to="/">
                                <img className="logo" src={logo} alt=""/>
                            </Link>
                        </div>
                    </div>
                    <ul className="nav-links">
                        <li className="nav-link-item"><a href="#">Shop</a></li>
                        <li className="nav-link-item"><a href="#">Contact</a></li>
                        <li className="nav-link-item"><Link to="/login">Sign in</Link></li>
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
            </div>
            <div className="menu-safe-area"></div>
        </div>
        </>
    )
}