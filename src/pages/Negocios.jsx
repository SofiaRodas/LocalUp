import "../styles/negocios.css";

function Negocios() {
  return (
    <section className="negocios" id="negocios">

      <span className="section-tag">
        Explora la ciudad
      </span>

      <h2>
        Descubre experiencias que valen la pena
      </h2>

      <div className="cards-negocios">

        <article className="negocio">

          <div className="negocio-img">

            <img
              src="https://www.shutterstock.com/image-photo/night-colombia-4-south-bridge-260nw-1583664031.jpg"
              alt="Gastronomía"
            />

            <span className="categoria">
              🍽 Gastronomía
            </span>

          </div>

          <div className="negocio-info">

            <h3>Degusta</h3>

            <p>
              La guía definitiva para comer como un local.
              Desde restaurantes reconocidos hasta joyas ocultas.
            </p>

            <button>
              Explorar lugares
            </button>

          </div>

        </article>

        <article className="negocio">

          <div className="negocio-img">

            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/6c/a5/ef/ven-y-dejate-contar-la.jpg?w=900&h=500&s=1"
              alt="Eventos"
            />

            <span className="categoria">
              🎉 Eventos
            </span>

          </div>

          <div className="negocio-info">

            <h3>Vive</h3>

            <p>
              Conciertos, ferias, festivales y experiencias
              que están ocurriendo cerca de ti.
            </p>

            <button>
              Ver eventos
            </button>

          </div>

        </article>

        <article className="negocio">

          <div className="negocio-img">

            <img
              src="https://www.shutterstock.com/image-photo/medellin-antioquia-colombia-june-22-260nw-2330891965.jpg"
              alt="Reviews"
            />

            <span className="categoria">
              ⭐ Reseñas
            </span>

          </div>

          <div className="negocio-info">

            <h3>Confía</h3>

            <p>
              Descubre opiniones auténticas de personas
              que ya visitaron estos lugares.
            </p>

            <button>
              Ver reseñas
            </button>

          </div>

        </article>

      </div>

    </section>
  );
}

export default Negocios;