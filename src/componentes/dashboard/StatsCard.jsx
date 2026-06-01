import "../../styles/dashboard/statscard.css";

function StatsCard({ titulo, numero, icono }) {

  return (

    <div className="stats-card">

      <div className="stats-header">

        <span className="stats-icon">
          {icono}
        </span>

      </div>

      <h2>{numero}</h2>

      <p>{titulo}</p>

    </div>
  );
}

export default StatsCard;