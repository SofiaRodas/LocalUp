import Header from "../componentes/Header";
import Hero from "../componentes/Hero";
import Servicios from "./Servicios";
import Negocios from "./Negocios";
import Contacto from "./Contacto";
import Footer from "../componentes/Footer";

function Home() {

  return (

    <div className="contenedor">

      <Header />
      <Hero />
      <Servicios />
      <Negocios />
      <Contacto />
      <Footer />

    </div>
  );
}

export default Home;