import Sidebar from "../../componentes/dashboard/Sidebar";
import Topbar from "../../componentes/dashboard/Topbar";

import { useAuth } from "../../context/AuthContext";

import { useEffect, useState } from "react";

import {
  obtenerUsuario,
  actualizarUsuario
} from "../../services/usuariosService";

import "../../styles/dashboard/dashboardpages.css";

function Perfil() {

  const { user } = useAuth();

  const [datos, setDatos] = useState(null);

  const [editando, setEditando] = useState(false);

  useEffect(() => {

    const cargarPerfil = async () => {

      if (!user) return;

      const informacion = await obtenerUsuario(
        user.uid
      );

      setDatos(informacion);
    };

    cargarPerfil();

  }, [user]);

  const guardarCambios = async () => {

    await actualizarUsuario(
      user.uid,
      {
        nombre: datos.nombre,
        ubicacion: datos.ubicacion,
        descripcion: datos.descripcion,
        fotoPerfil: datos.fotoPerfil
      }
    );

    setEditando(false);

    alert("Perfil actualizado");
  };

  if (!datos) {

    return <h2>Cargando perfil...</h2>;
  }

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <Topbar />

        <section className="page-section perfil-section">

          <div className="perfil-card">

            <img
              className="perfil-foto"
              src={
                datos.fotoPerfil ||
                "https://i.pravatar.cc/200?img"
              }
              alt="Preview"
            />

            {editando ? (

              <>
              <input
                type="text"
                placeholder="URL de la foto"
                value={datos.fotoPerfil || ""}
                onChange={(e) =>
                  setDatos({
                    ...datos,
                    fotoPerfil: e.target.value
                  })
                }
              />
                <input
                  type="text"
                  value={datos.nombre}
                  onChange={(e) =>
                    setDatos({
                      ...datos,
                      nombre: e.target.value
                    })
                  }
                />

                <input
                  type="text"
                  value={datos.ubicacion}
                  onChange={(e) =>
                    setDatos({
                      ...datos,
                      ubicacion: e.target.value
                    })
                  }
                />

                <textarea
                  value={datos.descripcion}
                  onChange={(e) =>
                    setDatos({
                      ...datos,
                      descripcion: e.target.value
                    })
                  }
                />

                <button
                  className="editar-btn"
                  onClick={guardarCambios}
                >
                  Guardar cambios
                </button>

              </>

            ) : (

              <>
                <h2>{datos.nombre}</h2>

                <p className="perfil-email">
                  {user.email}
                </p>

                <div className="perfil-info">

                  <div className="info-item">
                    <strong>Ubicación</strong>
                    <span>{datos.ubicacion}</span>
                  </div>

                  <div className="info-item">
                    <strong>Tipo de usuario</strong>
                    <span>{datos.tipoUsuario}</span>
                  </div>

                  <div className="info-item">
                    <strong>Descripción</strong>
                    <span>{datos.descripcion}</span>
                  </div>

                </div>

                <button
                  className="editar-btn"
                  onClick={() => setEditando(true)}
                >
                  Editar perfil
                </button>
              </>

            )}

          </div>

        </section>

      </main>

    </div>
  );
}

export default Perfil;