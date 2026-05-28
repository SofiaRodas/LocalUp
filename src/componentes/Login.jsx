import {useNavigate} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (

    <form className="auth-form" onSubmit={handleLogin}>

      <h2>Bienvenido a LocalUp</h2>

      <input
        type="email"
        placeholder="Correo electrónico"
      />

      <input
        type="password"
        placeholder="Contraseña"
      />

      <button type="submit">
        Ingresar
      </button>

    </form>
  );
}

export default Login;