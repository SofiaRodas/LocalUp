import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { iniciarSesion } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {
      const usuario = await iniciarSesion(email, password);
      localStorage.setItem("usuarioLocalUp", JSON.stringify(usuario));
      setUser(usuario);
      navigate("/dashboard");

    } catch (error) {

      alert("Correo o contraseña incorrectos");

      console.log(error);
    }
  };

  return (

    <form className="auth-form" onSubmit={handleLogin}>

      <h2>Bienvenido a LocalUp</h2>

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Ingresar
      </button>

    </form>
  );
}

export default Login;