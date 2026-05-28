import '../styles/servicios.css'

function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <h2>Experiencias que convierten</h2>

      <div className="cards">
        <article className="card">
          <h3>Explora</h3>

          <p>
            Encuentra restaurantes, eventos y lugares únicos cerca de ti.
          </p>
        </article>

        <article className="card">
          <h3>Impulsa</h3>

          <p>
            Conectamos negocios y eventos con clientes que buscan nuevas
            experiencias locales.
          </p>
        </article>

        <article className="card">
          <h3>Descubre</h3>

          <p>
            Planes y recomendaciones que están moviendo la ciudad.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Servicios;