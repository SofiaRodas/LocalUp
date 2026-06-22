const express = require("express");
const cors = require("cors");

require("./config/db");

const usuariosRoutes = require("./routes/usuariosRoutes");
const lugaresRoutes = require("./routes/lugaresRoutes");
const resenasRoutes = require("./routes/resenasRoutes");
const eventosRoutes = require("./routes/eventosRoutes");
const favoritosRoutes = require("./routes/favoritosRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", usuariosRoutes);
app.use("/api/lugares", lugaresRoutes);
app.use("/api/resenas", resenasRoutes);
app.use("/api/eventos", eventosRoutes);
app.use("/api/favoritos", favoritosRoutes);

app.listen(3001, () => {
  console.log("Servidor ejecutándose en http://localhost/phpmyadmin/index.php?route=/database/structure&db=localup");
});