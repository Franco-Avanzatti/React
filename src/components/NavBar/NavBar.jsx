import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import CartWidget from "./CartWidget";

import panamaa from "../../assets/panamaa.png";

import "./navbar.css";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkStyles = ({ isActive }) =>
        `nav-link ${isActive ? "active-link" : ""}`;

    return (

        <header className="navbar-container">

            <div className="navbar-content">

                {/* LOGO */}

                <div className="navbar-left">

                    <Link
                        to="/"
                        className="logo-container"
                    >

                        <img
                            src={panamaa}
                            alt="Panama Music"
                            className="logo-image"
                        />

                        <div className="logo-text">

                            <span className="logo-title">
                                Panama Music
                            </span>

                            <span className="logo-subtitle">
                                Music Store
                            </span>

                        </div>

                    </Link>

                </div>

                {/* MENU */}

                <nav className="navbar-menu">

                    <NavLink
                        to="/category/guitarras-electricas"
                        className={navLinkStyles}
                    >
                        Guitarras
                    </NavLink>

                    <NavLink
                        to="/category/bajo-electrico"
                        className={navLinkStyles}
                    >
                        Bajos
                    </NavLink>

                    <NavLink
                        to="/category/bateria-percusion"
                        className={navLinkStyles}
                    >
                        Baterías
                    </NavLink>

                    <NavLink
                        to="/category/audio-sonido"
                        className={navLinkStyles}
                    >
                        Audio Pro
                    </NavLink>

                </nav>

                {/* RIGHT */}

                <div className="navbar-right">

                    <div className="cart-container">
                        <CartWidget />
                    </div>

                    {/* MOBILE */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="menu-button"
                    >

                        {
                            menuOpen
                                ? <X size={30} />
                                : <Menu size={30} />
                        }

                    </button>

                </div>

            </div>

            {/* MOBILE MENU */}

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

                <nav className="mobile-menu-content">

                    <NavLink
                        to="/category/guitarras-electricas"
                        className="mobile-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        Guitarras
                    </NavLink>

                    <NavLink
                        to="/category/bajo-electrico"
                        className="mobile-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        Bajos
                    </NavLink>

                    <NavLink
                        to="/category/bateria-percusion"
                        className="mobile-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        Baterías
                    </NavLink>

                    <NavLink
                        to="/category/audio-sonido"
                        className="mobile-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        Audio Pro
                    </NavLink>

                </nav>

            </div>

        </header>
    );
};

export default NavBar;