import Sidebar from "../../componentes/dashboard/Sidebar";
import Topbar from "../../componentes/dashboard/Topbar";

import "../../styles/dashboard/dashboardpages.css";

function Lugares() {

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <Topbar />

        <section className="page-section">

          <h1>Explorar lugares</h1>

          <p>
            Descubre restaurantes, cafés, parques y sitios
            recomendados cerca de ti.
          </p>

          <div className="page-grid">

            <div className="page-card">
              ☕ Cafeterías
            </div>

            <div className="page-card">
              🍔 Restaurantes
            </div>

            <div className="page-card">
              🌳 Parques
            </div>

            <div className="page-card">
              🎵 Bares
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Lugares;