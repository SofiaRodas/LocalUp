import { FaSearch, FaBell } from "react-icons/fa";

import "../../styles/dashboard/topbar.css";

function Topbar() {

  const usuario = JSON.parse(localStorage.getItem("usuarioLocalUp") || "null");

  return (

    <header className="topbar">

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Buscar lugares, eventos o negocios..."
        />

      </div>

      <div className="topbar-actions">

        <button className="notification-btn">

          <FaBell />

        </button>

        <div className="topbar-user">

          <img
            src="https://i.pravatar.cc/200?img"
            alt="Usuario"
          />

          <div>

            <span className="user-name">

              {(usuario?.nombre || usuario?.correo || usuario?.email || "Usuario").toString().split("@")[0]}

            </span>

            <small>
              Miembro LocalUp
            </small>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;