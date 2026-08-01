import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registrarUsuario } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Register() {

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [nombre, setNombre] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const usuario = await registrarUsuario(
        nombre,
        email,
        password
      );

      localStorage.setItem("usuarioLocalUp", JSON.stringify(usuario));
      setUser(usuario);
      alert("Usuario creado correctamente");

      navigate("/dashboard");

    } catch (error) {

      alert(error.message);

      console.log(error);
    }
  };

  return (

    <form className="auth-form" onSubmit={handleRegister}>

      <h2>Crear cuenta</h2>

      <input
        type="text"
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

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
        Registrarse
      </button>

    </form>
  );
}

export default Register;