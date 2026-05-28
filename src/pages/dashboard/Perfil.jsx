import Sidebar from "../../componentes/dashboard/Sidebar";
import Topbar from "../../componentes/dashboard/Topbar";

import "../../styles/dashboard/dashboardpages.css";

function Perfil() {

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <Topbar />

        <section className="page-section perfil-section">

          <img
            src="https://i.pravatar.cc/150?img=32"
            alt=""
          />

          <h1>Sofía Rodas</h1>

          <p>
            Exploradora urbana y amante de descubrir nuevos lugares.
          </p>

          <div className="perfil-stats">

            <div>
              <h2>128</h2>
              <span>Lugares</span>
            </div>

            <div>
              <h2>42</h2>
              <span>Eventos</span>
            </div>

            <div>
              <h2>19</h2>
              <span>Favoritos</span>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Perfil;