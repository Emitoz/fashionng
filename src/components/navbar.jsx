import { useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase/firebase.utils';
import { FormInput } from './formInput';
import { SearchResults } from './searchResults';

import logo from '../assets/img/Logo.svg';
import logoSm from '../assets/img/Logo-sm.svg';
import menuIcon from '../assets/img/menu-icon.svg';
import { connect } from 'react-redux';
import CartButton from './cartButton';
import { selectCurrentUser } from '../redux/user/user.selector';
import { toggleSearchMode } from '../redux/search/search.actions';
import { getSearchResults } from '../redux/search/search.utils';
import { selectCategories, selectProducts } from '../redux/shop/shop.selectors';

const Navbar = ({ currentUser, searchMode, toggleSearchMode, categories, products }) => {

    const [ keyword, setKeyword ] = useState('');

    const searchResults = getSearchResults(categories, products, keyword);

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
                            <li className="nav-link-item"><Link to="/shop">Shop</Link></li>
                            <li className="nav-link-item"><Link to="/">Contact</Link></li>
                            {
                                currentUser !== null ? <li className="nav-link-item" onClick={() => auth.signOut()}><Link to="/"><i className="feather-user"></i> {currentUser.displayName}</Link></li>
                                : <li className="nav-link-item"><Link to="/login">Sign in</Link></li>
                            }
                        </ul>
                        <div className="search-and-cart">
                            <div className="search" onClick={toggleSearchMode}>
                                <i className="feather-search"></i>
                            </div>
                            <CartButton />
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
                            <li className="nav-link-item"><Link to="/shop">Shop</Link></li>
                            <li className="nav-link-item"><Link to="/">Contact</Link></li>
                            <li className="nav-link-item"><Link to="/login">Sign in</Link></li>
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
                </div>
                <div className="menu-safe-area"></div>
            </div>
            </>
            :
            <>
                <div className="search-wrapper">
                    <div className="search-bar">
                        <FormInput placeholder="Search" autofocus={true} value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                        <span className="search-button"><i className="feather-search"></i></span>
                    </div>
                    <span className="close-search" onClick={toggleSearchMode}>
                        <i className="feather-x"></i>
                    </span>
                </div>
                { keyword && <SearchResults keyword={keyword} products={searchResults.products} categories={searchResults.categories}/> }
            </>
        }
    </>
    )
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    searchMode: state.search.searchMode,
    categories: selectCategories(state),
    products: selectProducts(state)
});

const mapDispatchToProps = dispatch => ({
    toggleSearchMode: () => dispatch(toggleSearchMode())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);