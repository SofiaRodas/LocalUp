const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./config/db");

const usuariosRoutes = require("./routes/usuariosRoutes");
const lugaresRoutes = require("./routes/lugaresRoutes");
const resenasRoutes = require("./routes/resenasRoutes");
const eventosRoutes = require("./routes/eventosRoutes");
const favoritosRoutes = require("./routes/favoritosRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.json({
        proyecto: "LocalUp API",
        estado: "Servidor funcionando correctamente"
    });

});

app.use("/api/usuarios", usuariosRoutes);
app.use("/api/lugares", lugaresRoutes);
app.use("/api/resenas", resenasRoutes);
app.use("/api/eventos", eventosRoutes);
app.use("/api/favoritos", favoritosRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {

    console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);

});