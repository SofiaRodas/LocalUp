import Sidebar from "../../componentes/dashboard/Sidebar";
import Topbar from "../../componentes/dashboard/Topbar";
import LugarCard from "../../componentes/dashboard/LugarCard";

import { useEffect, useState } from "react";

import { useAuth } from "../../context/AuthContext";

import {
  obtenerFavoritos
} from "../../services/favoritosService";

import {
  obtenerLugarPorId
} from "../../services/lugaresService";

import "../../styles/dashboard/dashboardpages.css";

function Favoritos() {

  const { user } = useAuth();

  const [lugares, setLugares] = useState([]);

  useEffect(() => {

    const cargarFavoritos = async () => {

      if (!user) return;

      const favoritos =
        await obtenerFavoritos(
          user.uid
        );

      const lugaresFavoritos =
        await Promise.all(

          favoritos.map(
            favorito =>
              obtenerLugarPorId(
                favorito.lugarId
              )
          )

        );

      setLugares(
        lugaresFavoritos.filter(Boolean)
      );
    };

    cargarFavoritos();

  }, [user]);

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <Topbar />

        <section className="page-section">

          <h1>
            Tus favoritos
          </h1>

          <p>
            Aquí encontrarás todos los lugares que guardaste.
          </p>

          {lugares.length === 0 ? (

            <div className="page-card">

              No tienes favoritos guardados.

            </div>

          ) : (

            <div className="favoritos-grid">

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

            </div>

          )}

        </section>

      </main>

    </div>

  );
}

export default Favoritos;