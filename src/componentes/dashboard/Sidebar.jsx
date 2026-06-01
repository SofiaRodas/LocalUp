import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";


import {
  FaHome,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeart,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";

import "../../styles/dashboard/sidebar.css";


function Sidebar() {

  const navigate = useNavigate();

  const cerrarSesion = async () => {

    await signOut(auth);

    navigate("/");
  };

  return (

    <aside className="sidebar">

      <div>

        <div className="sidebar-logo">

          <div className="logo-circle">
            LU
          </div>

          <div>

            <h2>LocalUp</h2>

            <span>Explora tu ciudad</span>

          </div>

        </div>

        <nav>

          <Link to="/dashboard">
            <FaHome />
            Inicio
          </Link>

          <Link to="/dashboard/lugares">
            <FaMapMarkerAlt />
            Lugares
          </Link>

          <Link to="/dashboard/eventos">
            <FaCalendarAlt />
            Eventos
          </Link>

          <Link to="/dashboard/favoritos">
            <FaHeart />
            Favoritos
          </Link>

          <Link to="/dashboard/perfil">
            <FaUser />
            Perfil
          </Link>

        </nav>

      </div>

      <div className="sidebar-footer">

        <button
          className="logout-btn"
          onClick={cerrarSesion}
        >
          <FaSignOutAlt />
          Cerrar sesión
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;