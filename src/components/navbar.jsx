import logo from '../assets/img/Logo.svg';
import logoSm from '../assets/img/Logo-sm.svg';

export const Navbar = () => {
    return (
        <>
        <div class="nav-wrapper">
            <div class="container">
                <nav class="header-nav">
                    <div class="brand">
                        <span class="menu-btn">
                            <img src="./img/menu-icon.svg" alt=""/>
                        </span>
                        <a href="#">
                            <img class="logo" src={logo} alt=""/>
                            <img class="logo-sm" src={logoSm} alt=""/>
                        </a>
                    </div>
                    <ul class="nav-links">
                        <li class="nav-link-item"><a href="#">Shop</a></li>
                        <li class="nav-link-item"><a href="#">Contact</a></li>
                        <li class="nav-link-item"><a href="./login.html">Sign in</a></li>
                    </ul>
                    <div class="search-and-cart">
                        <div class="search">
                            <i class="feather-search"></i>
                            <input type="text" placeholder="search" />
                        </div>
                        <div>
                            <i class="feather-shopping-bag cart-btn"></i>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        <div class="mobile-menu-wrapper">
            <div class="mobile-menu">
                <div class="mobile-menu-flex">
                    <div class="top">
                        <div class="close">
                            <span class="close-menu">
                                <i class="feather-x"></i>
                            </span>
                        </div>
                        <div class="logo-area">
                            <a href="#">
                                <img class="logo" src={logo} alt=""/>
                            </a>
                        </div>
                    </div>
                    <ul class="nav-links">
                        <li class="nav-link-item"><a href="#">Shop</a></li>
                        <li class="nav-link-item"><a href="#">Contact</a></li>
                        <li class="nav-link-item"><a href="./login.html">Sign in</a></li>
                    </ul>
                    <ul class="social-links">
                        <li class="social-link">
                            <a href="#"><i class="feather-instagram"></i></a>
                        </li>
                        <li class="social-link">
                            <a href="#"><i class="feather-facebook"></i></a>
                        </li>
                        <li class="social-link">
                            <a href="#"><i class="feather-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu-safe-area"></div>
        </div>
        </>
    )
}