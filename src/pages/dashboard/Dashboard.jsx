import Sidebar from "../../componentes/dashboard/Sidebar";
import Topbar from "../../componentes/dashboard/Topbar";
import StatsCard from "../../componentes/dashboard/StatsCard";
import LugarCard from "../../componentes/dashboard/LugarCard";
import ActivityCard from "../../componentes/dashboard/ActivityCard";
import { useEffect, useState } from "react";
import { obtenerLugares } from "../../services/lugaresService";
import Mapa from "../../componentes/dashboard/Mapa";
import "../../styles/dashboard/dashboard.css";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeart
} from "react-icons/fa";



function Dashboard() {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {

  const cargarLugares = async () => {

    const data = await obtenerLugares();

    setLugares(data);
  };

  cargarLugares();

  }, []);


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
              icono={<FaMapMarkerAlt />}
            />

            <StatsCard
              titulo="Eventos activos"
              numero="42"
              icono={<FaCalendarAlt />}
            />

            <StatsCard
              titulo="Favoritos"
              numero="19"
              icono={<FaHeart />}
            />

          </section>

          <section className="lugares-section">

            <h2>Lugares recomendados</h2>

            <section className="lugares-grid">

              {lugares.map((lugar) => (

                <LugarCard
                  key={lugar.id}
                  id={lugar.id}
                  imagen={lugar.imagen}
                  nombre={lugar.nombre}
                  categoria={lugar.categoria}
                  rating={lugar.rating}
                />

              ))}

            </section>

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