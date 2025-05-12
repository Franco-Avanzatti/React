import './footer.css';

function Footer() {
    return (
        <footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h4>Sobre Nosotros</h4>
      <p>Panama Music es tu tienda de confianza para instrumentos musicales.</p>
    </div>
    <div className="footer-section">
      <h4>Redes Sociales</h4>
      <ul>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">YouTube</a></li>
      </ul>
    </div>
    <div className="footer-section ">
      <h4>Contacto</h4>
      <p>Email: contacto@panamamusic.com</p>
      <p>Tel: +507 123 4567</p>
    </div>
  </div>
  <div className="footer-bottom">
    &copy; {new Date().getFullYear()} Panama Music. Todos los derechos reservados.
  </div>
</footer>

    );
}

export default Footer;
