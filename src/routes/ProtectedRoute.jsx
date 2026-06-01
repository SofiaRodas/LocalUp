import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {

  const {
    user,
    loading
  } = useAuth();

  if (loading) {

    return <h2>Cargando...</h2>;

  }

  return user
    ? children
    : <Navigate to="/login" />;
}

export default ProtectedRoute;