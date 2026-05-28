import { Link } from "react-router-dom";

import "../styles/header.css";

function Header() {

  return (

    <header className="header">

      {/* LOGO */}

      <div className="logo">
        <h1>LocalUp</h1>
      </div>


      {/* NAVEGACIÓN */}

      <nav className="nav-links">

        <a href="#inicio">Inicio</a>

        <a href="#servicios">Servicios</a>

        <a href="#negocios">Negocios</a>

        <a href="#contacto">Contacto</a>

      </nav>


      {/* BOTÓN LOGIN */}

      <div className="header-buttons">

        <Link to="/login">

          <button>
            Iniciar sesión
          </button>

        </Link>

      </div>

    </header>
  );
}

export default Header;