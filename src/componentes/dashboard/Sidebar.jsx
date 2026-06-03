import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

import "../../styles/dashboard/sidebar.css";

function Sidebar() {

  const navigate = useNavigate();

  const cerrarSesion = async () => {

    await signOut(auth);

    navigate("/");
  };

  return (

    <aside className="sidebar">

      <h2>LocalUp</h2>

      <nav>

        <Link to="/dashboard">
          🏠 Inicio
        </Link>

        <Link to="/dashboard/lugares">
          📍 Lugares
        </Link>

        <Link to="/dashboard/eventos">
          📅 Eventos
        </Link>

        <Link to="/dashboard/favoritos">
          ❤️ Favoritos
        </Link>

        <Link to="/dashboard/perfil">
          👤 Perfil
        </Link>

      </nav>

      <div className="sidebar-footer">

        <Link
          to="/"
          className="volver-home"
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

  );
}

export default Sidebar;