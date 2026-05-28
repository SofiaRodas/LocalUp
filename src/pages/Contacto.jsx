import '../styles/contacto.css'

function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <h2>Contáctanos</h2>

      <form>
        <input type="text" placeholder="Nombre" />

        <input type="email" placeholder="Correo" />

        <textarea placeholder="Escribe tu mensaje"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;