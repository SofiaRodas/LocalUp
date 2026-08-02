import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import "../../styles/dashboard/sidebar.css";

function Sidebar() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const { setUser } = useAuth();

  const cerrarSesion = async () => {
    localStorage.removeItem("usuarioLocalUp");
    setUser(null);
    setIsOpen(false);
    navigate("/login");
  };

  const cerrarMenu = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className={`sidebar-toggle ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={cerrarMenu}
      />

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>

      <h2>LocalUp</h2>

      <nav>

        <Link to="/dashboard" onClick={cerrarMenu}>
          🏠 Inicio
        </Link>

        <Link to="/dashboard/lugares" onClick={cerrarMenu}>
          📍 Lugares
        </Link>

        <Link to="/dashboard/eventos" onClick={cerrarMenu}>
          📅 Eventos
        </Link>

        <Link to="/dashboard/favoritos" onClick={cerrarMenu}>
          ❤️ Favoritos
        </Link>

        <Link to="/dashboard/perfil" onClick={cerrarMenu}>
          👤 Perfil
        </Link>

      </nav>

      <div className="sidebar-footer">

        <Link
          to="/"
          className="volver-home"
          onClick={cerrarMenu}
        >
          ← Volver al inicio
        </Link>

        <button
          className="logout-btn"
          onClick={cerrarSesion}
        >
          Cerrar sesión
        </button>

      </div>

    </aside>
    </>
  );
}

export default Sidebar;