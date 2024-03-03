import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authUnCheck } from "../../features/AuthCheckerSlice";

function Header() {
    const dispatch = useDispatch();

    const { isLogedin } = useSelector((store) => store.AuthCheckerSlice);

    const [cartisOpen, setCartisOpen] = useState(false);
    const [profileDropisOpen, setProfileDropisOpen] = useState(false);

    document.addEventListener("click", () => {
        setCartisOpen(false);
        setProfileDropisOpen(false);
    });

    const handleShowProfileDrop = (e) => {
        e.stopPropagation();
        setProfileDropisOpen(!profileDropisOpen);
        setCartisOpen(false);
    };

    return (
        <header className="site-header mo-left header style-1">
            <div className="header-info-bar">
                <div className="container clearfix">
                    <div className="logo-header logo-dark">
                        <Link to="/">
                            <img src="https://img.logoipsum.com/288.svg" alt="logo" />
                        </Link>
                    </div>
                    <div className="extra-nav">
                        <div className="extra-cell">
                            <ul className="navbar-nav header-right">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/wishlist">
                                        <FaRegHeart color="#000" />
                                        <span className="badge">21</span>
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={(e) => e.stopPropagation()}>
                                    <button type="button" className="nav-link box cart-btn" onClick={() => setCartisOpen(!cartisOpen)}>
                                        <RiShoppingCartLine color="#000" />

                                        <span className="badge">5</span>
                                    </button>
                                    <AnimatePresence>
                                        {cartisOpen && (
                                            <motion.ul
                                                style={{ overflow: "hidden" }}
                                                initial={{ height: 0 }}
                                                animate={{ height: "auto" }}
                                                transition={{
                                                    duration: 0.2,
                                                }}
                                                exit={{ height: 0 }}
                                                className="dropdown-menu cart-list d-block"
                                            >
                                                <li className="cart-item">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="books-detail.html">
                                                                <img alt="" className="media-object" src="https://i.pravatar.cc/150" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="dz-title">
                                                                <a href="books-detail.html" className="media-heading">
                                                                    Real Life
                                                                </a>
                                                            </h6>
                                                            <span className="dz-price">$28.00</span>
                                                            <span className="item-close">×</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="cart-item">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="books-detail.html">
                                                                <img alt="" className="media-object" src="https://picsum.photos/500/300?random=1" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="dz-title">
                                                                <a href="books-detail.html" className="media-heading">
                                                                    Home
                                                                </a>
                                                            </h6>
                                                            <span className="dz-price">$28.00</span>
                                                            <span className="item-close">×</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="cart-item">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="books-detail.html">
                                                                <img alt="" className="media-object" src="https://picsum.photos/500/300?random=1" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="dz-title">
                                                                <a href="books-detail.html" className="media-heading">
                                                                    Such a fun age
                                                                </a>
                                                            </h6>
                                                            <span className="dz-price">$28.00</span>
                                                            <span className="item-close">×</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="cart-item text-center">
                                                    <h6 className="text-secondary">Totle = $500</h6>
                                                </li>
                                                <li className="text-center d-flex">
                                                    <a href="shop-cart.html" className="btn btn-sm btn-primary me-2 btnhover w-100">
                                                        View Cart
                                                    </a>
                                                    <a href="shop-checkout.html" className="btn btn-sm btn-outline-primary btnhover w-100">
                                                        Checkout
                                                    </a>
                                                </li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                {isLogedin && (
                                    <li className="nav-item dropdown profile-dropdown ms-4">
                                        <div className="nav-link" role="button" onClick={handleShowProfileDrop}>
                                            <img src="https://i.pravatar.cc/150" alt="/" />
                                            <div className="profile-info">
                                                <h6 className="title">Brian</h6>
                                                <span>info@gmail.com</span>
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {profileDropisOpen && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                    exit={{ scale: 0 }}
                                                    style={{ transformOrigin: "top" }}
                                                    className="dropdown-menu py-0 dropdown-menu-end d-block"
                                                >
                                                    <div className="dropdown-header">
                                                        <h6 className="m-0">Brian</h6>
                                                        <span>info@gmail.com</span>
                                                    </div>
                                                    <div className="dropdown-body d-block">
                                                        <a href="my-profile.html" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                            <div>
                                                                <FaRegUser fontSize="18px" />

                                                                <span className="ms-2">Profile</span>
                                                            </div>
                                                        </a>
                                                        <a href="shop-cart.html" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                            <div>
                                                                <RiShoppingCartLine fontSize="18px" />
                                                                <span className="ms-2">My Order</span>
                                                            </div>
                                                        </a>
                                                        <a href="wishlist.html" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                            <div>
                                                                <FaRegHeart fontSize="18px" />
                                                                <span className="ms-2">Wishlist</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="dropdown-footer">
                                                        <div onClick={() => dispatch(authUnCheck())} className="btn btn-primary w-100 btnhover btn-sm">
                                                            Log Out
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* header search nav */}
                    <div className="header-search-nav">
                        <div className="header-item-search">
                            <div className="input-group search-input">
                                <select className="default-select header-category-select">
                                    <option>Category</option>
                                    <option>Photography </option>
                                    <option>Arts</option>
                                    <option>Adventure</option>
                                    <option>Action</option>
                                    <option>Games</option>
                                    <option>Movies</option>
                                    <option>Comics</option>
                                    <option>Biographies</option>
                                    <option>Children’s Books</option>
                                    <option>Historical</option>
                                    <option>Contemporary</option>
                                    <option>Classics</option>
                                    <option>Education</option>
                                </select>
                                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search Books Here" />
                                <button className="btn" type="button">
                                    <IoSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Header End */}
            {/* Main Header */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix">
                    <div className="container clearfix">
                        {/* Website Logo */}
                        <div className="logo-header logo-dark">
                            <Link to="/">
                                <img src="https://picsum.photos/500/300?random=1" alt="logo" />
                            </Link>
                        </div>
                        {/* Nav Toggle Button */}
                        <button
                            className="navbar-toggler collapsed navicon justify-content-end"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                        {/* EXTRA NAV */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                {!isLogedin ? (
                                    <Link to="/login" className="btn btn-primary btnhover">
                                        Login
                                    </Link>
                                ) : (
                                    <Link to="/profile" className="btn btn-primary btnhover">
                                        Profile
                                    </Link>
                                )}
                            </div>
                        </div>
                        {/* Main Nav */}
                        <div className="header-nav navbar-collapse collapse justify-content-start" id="navbarNavDropdown">
                            <div className="logo-header logo-dark">
                                <a href="index.html">
                                    <img src="https://picsum.photos/500/300?random=1" alt="" />
                                </a>
                            </div>
                            <div className="search-input">
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search Books Here" />
                                    <button className="btn" type="button">
                                        <i className="flaticon-loupe" />
                                    </button>
                                </div>
                            </div>
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                {!isLogedin && (
                                    <li>
                                        <Link to="/register">
                                            <span>Register</span>
                                        </Link>
                                    </li>
                                )}

                                <li className="sub-menu-down">
                                    <a href="#">
                                        <span>Pages</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="my-profile.html">My Profile</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Services</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQ's</a>
                                        </li>
                                        <li>
                                            <a href="help-desk.html">Help Desk</a>
                                        </li>
                                        <li>
                                            <a href="coming-soon.html">Coming Soon</a>
                                        </li>
                                        <li>
                                            <a href="pricing.html">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="privacy-policy.html">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="under-construction.html">Under Construction</a>
                                        </li>
                                        <li>
                                            <a href="error-404.html">Error 404</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-down">
                                    <a href="#">
                                        <span>Shop</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="books-grid-view.html">Shop Grid</a>
                                        </li>
                                        <li>
                                            <a href="books-grid-view-sidebar.html">Shop Grid Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="books-list.html">Shop List</a>
                                        </li>
                                        <li>
                                            <a href="books-list-view-sidebar.html">Shop List Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="books-detail.html">Shop Detail</a>
                                        </li>
                                        <li>
                                            <a href="shop-cart.html">Cart</a>
                                        </li>
                                        <li>
                                            <a href="shop-checkout.html">Checkout</a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html">Wishlist</a>
                                        </li>
                                        <li>
                                            <a href="shop-login.html">Login</a>
                                        </li>
                                        <li>
                                            <a href="shop-registration.html">Registration</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu-down">
                                    <a href="#">
                                        <span>Blog</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="blog-grid.html">Blog Grid</a>
                                        </li>
                                        <li>
                                            <a href="blog-large-sidebar.html">Blog Large Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="blog-list-sidebar.html">Blog List Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="blog-detail.html">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="contact-us.html">
                                        <span>Contact Us</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="dz-social-icon">
                                <ul>
                                    <li>
                                        <a className="fab fa-facebook-f" target="_blank" href="https://www.facebook.com/dexignzone" rel="noreferrer" />
                                    </li>
                                    <li>
                                        <a className="fab fa-twitter" target="_blank" href="https://twitter.com/dexignzones" rel="noreferrer" />
                                    </li>
                                    <li>
                                        <a className="fab fa-linkedin-in" target="_blank" href="https://www.linkedin.com/showcase/3686700/admin/" rel="noreferrer" />
                                    </li>
                                    <li>
                                        <a className="fab fa-instagram" target="_blank" href="https://www.instagram.com/website_templates__/" rel="noreferrer" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
