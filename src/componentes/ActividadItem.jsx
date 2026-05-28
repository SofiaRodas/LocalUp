import "../styles/actividad.css";

function ActividadItem({ usuario, accion, lugar, tiempo }) {

  return (

    <div className="actividad-item">
        
      <div className="actividad-avatar">
        {usuario.charAt(0)}
      </div>

      <div className="actividad-info">
        <p>
          <strong>{usuario}</strong> {accion}
          <span>{lugar}</span>
        </p>
        <small>{tiempo}</small>
      </div>

    </div>
  );
}

export default ActividadItem;