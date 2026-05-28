import '../styles/negocios.css'

function Negocios() {
  return (
    <section className="negocios" id="negocios">
      <h2>Descubre la Ciudad</h2>

      <div className="cards-negocios">
        <div className="negocio">
          <img
            src="https://www.shutterstock.com/image-photo/night-colombia-4-south-bridge-260nw-1583664031.jpg"
            alt="Restaurante"
          />

          <h3>Degusta</h3>

          <p>
            La guía definitiva para comer como un local, desde alta cocina hasta
            el secreto mejor guardado del barrio.
          </p>

          <button>¿Qué hay de bueno?</button>
        </div>

        <div className="negocio">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/6c/a5/ef/ven-y-dejate-contar-la.jpg?w=900&h=500&s=1"
            alt="Eventos"
          />

          <h3>Vive</h3>

          <p>
            No te pierdas de nada. Conciertos, ferias y encuentros que están
            ocurriendo ahora mismo.
          </p>

          <button>¿Dónde parchar?</button>
        </div>

        <div className="negocio">
          <img
            src="https://www.shutterstock.com/image-photo/medellin-antioquia-colombia-june-22-260nw-2330891965.jpg"
            alt="Reviews"
          />

          <h3>Confía</h3>

          <p>
            Lee historias reales y recomendaciones sin filtros de personas que
            ya vivieron la experiencia.
          </p>

          <button>Ver reviews</button>
        </div>
      </div>
    </section>
  );
}

export default Negocios;