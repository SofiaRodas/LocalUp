import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Sidebar from "../../componentes/dashboard/Sidebar";
import Topbar from "../../componentes/dashboard/Topbar";

import {
  obtenerLugarPorId
} from "../../services/lugaresService";

import "../../styles/dashboard/lugardetalle.css";

function LugarDetalle() {

  const { id } = useParams();

  const [lugar, setLugar] =
    useState(null);

  useEffect(() => {

    const cargarLugar = async () => {

      const data =
        await obtenerLugarPorId(id);

      setLugar(data);
    };

    cargarLugar();

  }, [id]);

  if (!lugar) {

    return <h2>Cargando...</h2>;
  }

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <Topbar />

        <div className="detalle-container">

          <img
            src={lugar.imagen}
            alt={lugar.nombre}
            className="detalle-imagen"
          />

          <div className="detalle-info">

            <h1>
              {lugar.nombre}
            </h1>

            <p>
              📍 {lugar.categoria}
            </p>

            <h3>
              ⭐ {lugar.rating}
            </h3>

            <p>
              {lugar.descripcion ||
                "Próximamente más información sobre este lugar."}
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default LugarDetalle;