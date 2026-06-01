import { Link } from "react-router-dom";

import "../styles/header.css";

function Header() {
  return (
    <header className="header">

      <Link to="/" className="logo">
        <span className="logo-icon">LU</span>
        <h1>LocalUp</h1>
      </Link>

      <nav className="nav-links">

        <a href="#inicio">Inicio</a>

        <a href="#servicios">Servicios</a>

        <a href="#negocios">Negocios</a>

        <a href="#contacto">Contacto</a>

      </nav>

      <div className="header-buttons">

        <Link to="/login">
          <button className="login-btn">
            Iniciar sesión
          </button>
        </Link>

      </div>

    </header>
  );
}

export default Header;