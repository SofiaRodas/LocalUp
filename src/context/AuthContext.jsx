import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const usuario = localStorage.getItem("usuarioLocalUp");

    if (usuario) {

      setUser(JSON.parse(usuario));

    }

    setLoading(false);

  }, []);

  const actualizarUsuario = (nuevoUsuario) => {

    setUser(nuevoUsuario);

    localStorage.setItem(
      "usuarioLocalUp",
      JSON.stringify(nuevoUsuario)
    );

  };

  return (

    <AuthContext.Provider

      value={{

        user,

        setUser: actualizarUsuario,

        loading

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}

export const useAuth = () => useContext(AuthContext);