import {useNavigate} from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };


  return (

    <form className="auth-form" onSubmit={handleRegister}>

      <h2>Crear cuenta</h2>

      <input
        type="text"
        placeholder="Nombre completo"
      />

      <input
        type="email"
        placeholder="Correo electrónico"
      />

      <input
        type="password"
        placeholder="Contraseña"
      />

      <button type="submit">
        Registrarse
      </button>

    </form>
  );
}

export default Register;