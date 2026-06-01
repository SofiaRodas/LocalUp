import "../../styles/dashboard/activitycard.css";

function ActivityCard({ usuario, accion, tiempo }) {
  return (
    <div className="actividad-item">

      <div className="actividad-avatar">
        {usuario.charAt(0).toUpperCase()}
      </div>

      <div className="actividad-info">

        <p>{accion}</p>

        <small>{tiempo}</small>

      </div>

    </div>
  );
}

export default ActivityCard;