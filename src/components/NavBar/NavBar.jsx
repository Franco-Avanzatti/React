import CartWidget from "./CartWidget"
import bannerImage from "../../assets/hendrix.jpg"
import "./navbar.css"




const NavBar = () => {

    return(
        <nav className="navbar" >
            <img className="banner" src={bannerImage} alt="" />
            
            <ul>
                <li>Guitarristas & Bajistas</li>
                <li>Tecladistas</li>
                <li>Baterístas & Percusionistas</li>
                <li>Audio Profesional Y Sonído En Vivo</li>
                <li>Estudio Y Grabación</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar