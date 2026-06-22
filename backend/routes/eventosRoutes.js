const express = require("express");
const router = express.Router();

const {
  obtenerEventos,
  crearEvento
} = require("../controllers/eventosController");

router.get("/", obtenerEventos);
router.post("/", crearEvento);

module.exports = router;