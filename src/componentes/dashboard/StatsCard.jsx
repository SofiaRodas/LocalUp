import "../../styles/dashboard/statscard.css";

function StatsCard({ titulo, numero }) {

  return (

    <div className="stats-card">

      <h3>{titulo}</h3>

      <h2>{numero}</h2>

    </div>
  );
}

export default StatsCard;