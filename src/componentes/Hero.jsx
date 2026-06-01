import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-texto">

        <span className="hero-badge">
          📍 Descubre lo mejor de tu ciudad
        </span>

        <h2>
          Explora lugares, eventos y negocios locales
        </h2>

        <p>
          LocalUp te conecta con restaurantes, cafeterías,
          eventos, emprendimientos y experiencias únicas
          cerca de ti. Encuentra nuevos lugares, guarda tus
          favoritos y comparte recomendaciones con la comunidad.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            Explorar lugares
          </button>

          <button className="btn-secondary">
            Ver eventos
          </button>

        </div>

        <div className="hero-stats">

          <div>
            <h3>500+</h3>
            <span>Lugares</span>
          </div>

          <div>
            <h3>120+</h3>
            <span>Eventos</span>
          </div>

          <div>
            <h3>1.000+</h3>
            <span>Usuarios</span>
          </div>

        </div>

      </div>

      <div className="hero-img">

        <img
          src="https://wallpapers.com/images/hd/medellin-city-skyline-dj9cldjdlrpfp11y.jpg"
          alt="Medellín"
        />

      </div>

    </section>
  );
}

export default Hero;