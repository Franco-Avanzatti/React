import { useState, useEffect } from "react";
import CartWidget from "./CartWidget";
import bannerImage from "../../assets/panama.webp";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() =>{
        if (menuOpen) {
            document.body.classList.add("no-scroll");
        }else {
            document.body.classList.remove("no-scroll");
        }
    }, [menuOpen]);


    return (
        <nav className="navbar">
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            <Link to="/" className="banner-container">
                <img className="banner" src={bannerImage} alt="Banner" />
            </Link>


            <ul className={`categories ${menuOpen ? "open" : ""}`}>
                <NavLink to="/category/guitarras-electricas" className={({ isActive }) => isActive ? "category-active" : "category"} onClick={() => setMenuOpen(false)}>Guitarras Eléctricas</NavLink>

                <NavLink to="/category/bajo-electrico" className={({ isActive }) => isActive ? "category-active" : "category"} onClick={() => setMenuOpen(false)}>Bajo Eléctrico</NavLink>

                <NavLink to="/category/bateria-percusion" className={({ isActive }) => isActive ? "category-active" : "category"} onClick={() => setMenuOpen(false)}>Batería & Percusión</NavLink>

                <NavLink to="/category/audio-sonido" className={({ isActive }) => isActive ? "category-active" : "category"} onClick={() => setMenuOpen(false)}>Audio Profesional & Sonido en Vivo</NavLink>
            </ul>
            <div className="cart-widget">
                <CartWidget />
            </div>

        </nav>
    );
};

export default NavBar;
