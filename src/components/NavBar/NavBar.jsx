import CartWidget from "./CartWidget";
import bannerImage from "../../assets/hendrix.jpg";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css"


const NavBar = () => {

    return(
        <nav className="navbar" >

            <Link to="/">
              <img className="banner" src={bannerImage} alt="Hendrix" />
            </Link>
            
            
            <ul className="categories">
                <NavLink to="/category/guitarras-electricas" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Guitarras Eléctricas</NavLink>
                <NavLink to="/category/bajo-electrico" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Bajo Eléctrico</NavLink>
                <NavLink to="/category/bateria-percusion" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Batería & Percusión</NavLink>
                <NavLink to="/category/audio-sonido" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Audio Profesional & Sonído en Vivo</NavLink>
            </ul>

            <CartWidget/>
        </nav>
    )
}

export default NavBar