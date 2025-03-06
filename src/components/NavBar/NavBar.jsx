import { useState } from "react";
import CartWidget from "./CartWidget";
import bannerImage from "../../assets/panama.webp";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            
            <Link to="/">
              <img className="banner" src={bannerImage} alt="Banner" />
            </Link>
            
            
            <ul className={`categories ${menuOpen ? "open" : ""}`}>
                <NavLink to="/category/guitarras-electricas" className={({ isActive }) => isActive ? "category-active" : "category"}>Guitarras Eléctricas</NavLink>
                <NavLink to="/category/bajo-electrico" className={({ isActive }) => isActive ? "category-active" : "category"}>Bajo Eléctrico</NavLink>
                <NavLink to="/category/bateria-percusion" className={({ isActive }) => isActive ? "category-active" : "category"}>Batería & Percusión</NavLink>
                <NavLink to="/category/audio-sonido" className={({ isActive }) => isActive ? "category-active" : "category"}>Audio Profesional & Sonido en Vivo</NavLink>
            </ul>
            
            <CartWidget />
        </nav>
    );
};

export default NavBar;
