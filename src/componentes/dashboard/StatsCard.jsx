import "../../styles/dashboard/statscard.css";

function StatsCard({
  titulo,
  numero,
  icono
}) {

  return (

    <div className="stats-card">

      <div className="stats-icon">
        {icono}
      </div>

      <h3>{titulo}</h3>

      <h2>{numero}</h2>

    </div>

  );
}

export default StatsCard;