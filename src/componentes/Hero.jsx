import '../styles/hero.css'


function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-texto">
        <h2>¡PARCHEMOS!</h2>

        <p>
          LocalUp es una plataforma que te conecta con lo mejor de tu ciudad:
          restaurantes, tiendas, eventos y lugares informales cercanos.
          Descubre y comparte experiencias locales de forma rápida, fácil y en
          un solo lugar.
        </p>

        <button>Explorar Ahora</button>
      </div>

      <div className="hero-img">
        <img
          src="https://wallpapers.com/images/hd/medellin-city-skyline-dj9cldjdlrpfp11y.jpg"
          alt="Ciudad"
        />
      </div>
    </section>
  );
}

export default Hero;