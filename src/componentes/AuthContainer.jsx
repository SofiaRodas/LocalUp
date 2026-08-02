import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import '../styles/auth.css'

function AuthContainer() {

  const [mostrarLogin, setMostrarLogin] = useState(true);
  const navigate = useNavigate();

  return (

    <section className="auth-container">

      <button
        type="button"
        className="back-home-btn"
        onClick={() => navigate("/")}
      >
        ← Inicio
      </button>

      <div className="auth-box">

        <div className="auth-tabs">

          <button
            className={mostrarLogin ? "activo" : ""}
            onClick={() => setMostrarLogin(true)}
          >
            Iniciar Sesión
          </button>

          <button
            className={!mostrarLogin ? "activo" : ""}
            onClick={() => setMostrarLogin(false)}
          >
            Registrarse
          </button>

        </div>

        {
          mostrarLogin
            ? <Login />
            : <Register />
        }

      </div>

    </section>
  );
}

export default AuthContainer;