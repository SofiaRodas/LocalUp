import "../../styles/dashboard/activitycard.css";

function ActivityCard({ usuario, accion, tiempo }) {

  return (

    <div className="activity-card">

      <div className="activity-avatar">

        {usuario.charAt(0)}
      </div>

      <div>

        <h4>{accion}</h4>

        <p>{tiempo}</p>

      </div>

    </div>
  );
}

export default ActivityCard;