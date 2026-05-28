import "../../styles/dashboard/lugarcard.css";

function LugarCard({ imagen, nombre, categoria, rating }) {

  return (

    <div className="lugar-card">

      <img src={imagen} alt="" />

      <div className="lugar-info">

        <h3>{nombre}</h3>

        <p>{categoria}</p>

        <span>⭐ {rating}</span>

      </div>

    </div>
  );
}

export default LugarCard;