import "../../styles/dashboard/lugarcard.css";

import { auth } from "../../firebase/firebaseConfig";

import { agregarFavorito } from "../../services/favoritosService";

import {
  FaHeart,
  FaStar,
  FaMapMarkerAlt
} from "react-icons/fa";

function LugarCard({
  id,
  imagen,
  nombre,
  categoria,
  rating
}) {

  const guardarFavorito = async () => {

    const usuario = auth.currentUser;

    if (!usuario) return;

    await agregarFavorito(
      usuario.uid,
      id
    );

    alert("Lugar agregado a favoritos");
  };

  return (

    <div className="lugar-card">

      <div className="lugar-img-container">

        <img
          src={imagen}
          alt={nombre}
        />

        <button
          className="heart-btn"
          onClick={guardarFavorito}
        >
          <FaHeart />
        </button>

      </div>

      <div className="lugar-info">

        <span className="categoria-badge">
          <FaMapMarkerAlt />
          {categoria}
        </span>

        <h3>{nombre}</h3>

        <div className="rating">

          <FaStar />

          <span>{rating}</span>

        </div>

        <button
          className="explorar-btn"
        >
          Ver detalles
        </button>

      </div>

    </div>
  );
}

export default LugarCard;