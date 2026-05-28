import Sidebar from "../../componentes/dashboard/Sidebar";
import Topbar from "../../componentes/dashboard/Topbar";

import "../../styles/dashboard/dashboardpages.css";

function Favoritos() {

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <Topbar />

        <section className="page-section">

          <h1>Tus favoritos</h1>

          <p>
            Aquí encontrarás todos los lugares que guardaste.
          </p>

          <div className="favoritos-grid">

            <div className="favorito-card">
              ❤️ Sky Bar
            </div>

            <div className="favorito-card">
              ❤️ Café Urbano
            </div>

            <div className="favorito-card">
              ❤️ Pizza Downtown
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Favoritos;