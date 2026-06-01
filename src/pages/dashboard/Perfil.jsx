import Sidebar from "../../componentes/dashboard/Sidebar";
import Topbar from "../../componentes/dashboard/Topbar";
import { auth } from "../../firebase/firebaseConfig";
import "../../styles/dashboard/dashboardpages.css";
import { useAuth } from "../../context/AuthContext";


function Perfil() {
  
  const { user } = useAuth();
  const usuario = auth.currentUser;

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <Topbar />

        <section className="page-section perfil-section">

          <img
            src={usuario?.photoURL || "https://i.pravatar.cc/150?img=32"}
            alt=""
          />

          <h2>
            Bienvenida {user?.email}
          </h2>

          <p>
            Exploradora urbana y amante de descubrir nuevos lugares.
          </p>

          <div className="perfil-stats">

            <h2>Mi Perfil</h2>

            <p>
              <strong>Correo:</strong>
              {usuario?.email}
            </p>

            <p>
              <strong>UID:</strong>
              {usuario?.uid}
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Perfil;