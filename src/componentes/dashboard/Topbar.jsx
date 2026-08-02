import { FaSearch, FaBell } from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

import "../../styles/dashboard/topbar.css";

function Topbar() {

  const { user } = useAuth();

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

            src={
              user?.fotoPerfil ||
              "https://i.pravatar.cc/200?img=32"
            }

            alt="Usuario"

          />

          <div>

            <span className="user-name">

              {user?.nombre || "Usuario"}

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