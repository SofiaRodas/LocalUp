import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "../styles/header.css";

function Header() {

  const { user } = useAuth();

  return (

    <header className="header">

      <div className="logo">
        <h1>LocalUp</h1>
      </div>

      <nav className="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#negocios">Negocios</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <div className="header-buttons">

        {user ? (

          <Link to="/dashboard">
            <button>
              Ir al Dashboard
            </button>
          </Link>

        ) : (

          <Link to="/login">
            <button>
              Iniciar sesión
            </button>
          </Link>

        )}

      </div>

    </header>
  );
}

export default Header;