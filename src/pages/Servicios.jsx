import "../styles/servicios.css";

function Servicios() {
  return (
    <section className="servicios" id="servicios">

      <span className="section-tag">
        ¿Qué puedes hacer?
      </span>

      <h2>
        Experiencias que conectan personas y negocios
      </h2>

      <div className="cards">

        <article className="card">

          <div className="card-icon">
            📍
          </div>

          <h3>Explora</h3>

          <p>
            Descubre restaurantes, cafeterías,
            parques y lugares únicos cerca de ti.
          </p>

        </article>

        <article className="card">

          <div className="card-icon">
            🚀
          </div>

          <h3>Impulsa</h3>

          <p>
            Promociona negocios locales y conecta
            con nuevos clientes.
          </p>

        </article>

        <article className="card">

          <div className="card-icon">
            ⭐
          </div>

          <h3>Descubre</h3>

          <p>
            Encuentra recomendaciones reales
            y tendencias de tu ciudad.
          </p>

        </article>

      </div>

    </section>
  );
}

export default Servicios;