import "../../styles/dashboard/lugarcard.css";

import { auth } from "../../firebase/firebaseConfig";

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
      auth.currentUser;

    if (!usuario) return;

    await agregarFavorito(
      usuario.uid,
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