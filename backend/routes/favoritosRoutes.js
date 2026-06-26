const express = require("express");
const router = express.Router();

const {
  obtenerFavoritos,
  agregarFavorito
} = require("../controllers/favoritosController");

router.get("/", obtenerFavoritos);
router.post("/", agregarFavorito);

module.exports = router;