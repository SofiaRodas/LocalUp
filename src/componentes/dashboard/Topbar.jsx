import { FaSearch, FaBell } from "react-icons/fa";

import { auth } from "../../firebase/firebaseConfig";

import "../../styles/dashboard/topbar.css";

function Topbar() {

  const usuario = auth.currentUser;

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
            src="https://i.pravatar.cc/150?img=32"
            alt="Usuario"
          />

          <div>

            <span className="user-name">

              {usuario?.email?.split("@")[0] || "Usuario"}

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