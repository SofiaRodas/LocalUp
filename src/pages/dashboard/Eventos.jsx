import Sidebar from "../../componentes/dashboard/Sidebar";
import Topbar from "../../componentes/dashboard/Topbar";

import "../../styles/dashboard/dashboardpages.css";

function Eventos() {

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <Topbar />

        <section className="page-section">

          <h1>Eventos en vivo</h1>

          <p>
            Mantente al día con conciertos, festivales y actividades.
          </p>

          <div className="eventos-list">

            <div className="evento-card">
              🎉 Festival Urbano — 25 Mayo
            </div>

            <div className="evento-card">
              🎵 Concierto LocalUp Nights
            </div>

            <div className="evento-card">
              🍕 Feria Gastronómica
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Eventos;