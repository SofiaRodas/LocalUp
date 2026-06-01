import { BrowserRouter, Routes, Route } from "react-router-dom";

/* PÁGINAS PRINCIPALES */

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

/* DASHBOARD */

import Dashboard from "./pages/dashboard/Dashboard";
import Lugares from "./pages/dashboard/Lugares";
import Eventos from "./pages/dashboard/Eventos";
import Favoritos from "./pages/dashboard/Favoritos";
import Perfil from "./pages/dashboard/Perfil";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>
      <Routes>

        {/* =========================================
            HOME
        ========================================= */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* =========================================
            LOGIN / REGISTER
        ========================================= */}

        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* =========================================
            DASHBOARD PRINCIPAL
        ========================================= */}

          <Route
            path="/dashboard"
            element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
            }
          />

        {/* =========================================
            PÁGINAS INTERNAS DASHBOARD
        ========================================= */}

        <Route
          path="/dashboard/lugares"
          element={<Lugares />}
        />

        <Route
          path="/dashboard/eventos"
          element={<Eventos />}
        />

        <Route
          path="/dashboard/favoritos"
          element={<Favoritos />}
        />

        <Route
          path="/dashboard/perfil"
          element={<Perfil />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;