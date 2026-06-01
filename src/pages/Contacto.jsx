import "../styles/contacto.css";

function Contacto() {
  return (
    <section className="contacto" id="contacto">

      <div className="contacto-info">

        <span className="section-tag">
          Hablemos
        </span>

        <h2>
          ¿Tienes una idea o quieres promocionar tu negocio?
        </h2>

        <p>
          Estamos construyendo la comunidad local más grande para
          descubrir lugares, eventos y experiencias únicas.
          Escríbenos y te responderemos lo antes posible.
        </p>

        <div className="contacto-datos">

          <div>
            📧 contacto@localup.com
          </div>

          <div>
            📍 Medellín, Colombia
          </div>

          <div>
            📱 +57 300 123 4567
          </div>

        </div>

      </div>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Nombre completo"
        />

        <input
          type="email"
          placeholder="Correo electrónico"
        />

        <textarea
          placeholder="Cuéntanos cómo podemos ayudarte"
        ></textarea>

        <button type="submit">
          Enviar mensaje
        </button>

      </form>

    </section>
  );
}

export default Contacto;