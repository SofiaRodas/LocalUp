import { Link } from "react-router-dom";
import "../../styles/dashboard/sidebar.css";

function Sidebar() {

  return (

    <aside className="sidebar">
      <h2>LocalUp</h2>

      <nav>

        <Link to="/dashboard">🏠 Inicio</Link>

        <Link to="/dashboard/lugares">📍 Lugares</Link>

        <Link to="/dashboard/eventos">📅 Eventos</Link>

        <Link to="/dashboard/favoritos">❤️ Favoritos</Link>

        <Link to="/dashboard/perfil">👤 Perfil</Link>

      </nav>

      <div className="sidebar-footer">

        <Link to="/">
          ← Volver al inicio
        </Link>

        <Link to="/login" className="logout-btn">
          🚪 Cerrar sesión
        </Link>

      </div>
    </aside>
  );
}

export default Sidebar;