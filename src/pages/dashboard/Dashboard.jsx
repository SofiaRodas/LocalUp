import Sidebar from "../../componentes/dashboard/Sidebar";
import Topbar from "../../componentes/dashboard/Topbar";
import StatsCard from "../../componentes/dashboard/StatsCard";
import LugarCard from "../../componentes/dashboard/LugarCard";
import ActivityCard from "../../componentes/dashboard/ActivityCard";
import Mapa from "../../componentes/dashboard/Mapa";

import "../../styles/dashboard/dashboard.css";

function Dashboard() {

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <div className="dashboard-wrapper">

          <Topbar />

          <section className="stats-grid">

            <StatsCard
              titulo="Lugares visitados"
              numero="128"
            />

            <StatsCard
              titulo="Eventos activos"
              numero="42"
            />

            <StatsCard
              titulo="Favoritos"
              numero="19"
            />

          </section>

          <section className="lugares-section">

            <h2>Lugares recomendados</h2>

            <div className="lugares-grid">

              <LugarCard
                imagen="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                nombre="Sky Bar"
                categoria="Bar"
                rating="4.9"
              />

              <LugarCard
                imagen="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                nombre="Pizza Downtown"
                categoria="Restaurante"
                rating="4.8"
              />

              <LugarCard
                imagen="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
                nombre="Mi Pancito Dulce"
                categoria="Panadería"
                rating="4.4"
              />

            </div>

          </section>

          <section className="mapa-section">

            <h2>Mapa interactivo</h2>

            <Mapa />

          </section>

          <section className="actividad-section">

            <h2>Actividad reciente</h2>

            <ActivityCard
              usuario="A"
              accion="Ana calificó Sky Bar ⭐"
              tiempo="Hace 5 minutos"
            />

            <ActivityCard
              usuario="C"
              accion="Carlos guardó Café Urbano ❤️"
              tiempo="Hace 20 minutos"
            />

            <ActivityCard
              usuario="L"
              accion="Laura publicó un evento 🎉"
              tiempo="Hace 1 hora"
            />

          </section>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;