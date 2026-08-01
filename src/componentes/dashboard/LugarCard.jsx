import "../../styles/dashboard/lugarcard.css";

import {
  agregarFavorito
} from "../../services/favoritosService";

import { useNavigate } from "react-router-dom";

function LugarCard({
  id,
  imagen,
  nombre,
  categoria,
  rating
}) {

  const navigate = useNavigate();

  const guardarFavorito = async (e) => {

    e.stopPropagation();

    const usuario =
      JSON.parse(localStorage.getItem("usuarioLocalUp") || "null");

    if (!usuario) return;

    await agregarFavorito(
      usuario.id,
      id
    );
  };

  const abrirDetalle = () => {

    navigate(
      `/dashboard/lugar/${id}`
    );
  };

  return (

    <div
      className="lugar-card"
      onClick={abrirDetalle}
    >

      <img
        src={imagen}
        alt={nombre}
      />

      <div className="lugar-info">

        <h3>{nombre}</h3>

        <p>{categoria}</p>

        <span>
          ⭐ {rating}
        </span>

        <button
          className="favorito-btn"
          onClick={guardarFavorito}
        >
          ❤️ Guardar
        </button>

      </div>

    </div>

  );
}

export default LugarCard;