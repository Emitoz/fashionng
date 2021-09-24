import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/cart';
import { AuthContext } from '../context/auth';
import { auth } from '../firebase/firebase.utils';
import { products as allProducts } from '../context/products';
import { categories as allCategories } from '../context/categories';
import { CommonContext } from '../context/common';
import { FormInput } from './formInput';
import { SearchResults } from './searchResults';

import logo from '../assets/img/Logo.svg';
import logoSm from '../assets/img/Logo-sm.svg';
import menuIcon from '../assets/img/menu-icon.svg';



export const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    const { itemCount, setCartOpen } = useContext(CartContext);
    const { searchMode, setSearchMode } = useContext(CommonContext);

    // For search
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ keyword, setKeyword ] = useState('');

    const handleSearch = e => {
        setKeyword(e.target.value);

        setProducts(allProducts
            .filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()) || product.category.toLowerCase().includes(keyword.toLowerCase())));
        
        setCategories(allCategories
            .filter(category => category.name.toLowerCase().includes(keyword.toLowerCase())));
        
        console.log(products);
        console.log(categories);
    }

    return (
        <>
        {
            !searchMode ?
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
                            {
                                currentUser !== null ? <li className="nav-link-item" onClick={() => auth.signOut()}><a href="#"><i className="feather-user"></i> {currentUser.displayName}</a></li>
                                : <li className="nav-link-item"><Link to="/login">Sign in</Link></li>
                            }
                        </ul>
                        <div className="search-and-cart">
                            <div className="search" onClick={() => setSearchMode(true)}>
                                <i className="feather-search"></i>
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
            :
            <>
                <div className="search-wrapper">
                    <div className="search-bar">
                        <FormInput placeholder="Search" autofocus={true} value={keyword} onChange={(e) => handleSearch(e)}/>
                        <span className="search-button"><i className="feather-search"></i></span>
                    </div>
                    <span className="close-search" onClick={() => setSearchMode(false)}>
                        <i className="feather-x"></i>
                    </span>
                </div>
                { keyword && <SearchResults keyword={keyword} products={products} categories={categories}/> }
            </>
        }
    </>
    )
}