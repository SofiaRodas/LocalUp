import "../styles/footer.css";

function Footer() {
  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>LocalUp</h2>

          <p>
            Descubre lugares, eventos y negocios
            que hacen única tu ciudad.
          </p>

        </div>

        <div className="footer-links">

          <h3>Explorar</h3>

          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#negocios">Negocios</a>
          <a href="#contacto">Contacto</a>

        </div>

        <div className="footer-links">

          <h3>Comunidad</h3>

          <a href="#">Eventos</a>
          <a href="#">Reseñas</a>
          <a href="#">Favoritos</a>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 LocalUp · Todos los derechos reservados

      </div>

    </footer>

  );
}

export default Footer;