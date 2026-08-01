const express = require("express");
const router = express.Router();

const {
  obtenerLugares,
  obtenerLugarPorId,
  crearLugar
} = require("../controllers/lugaresController");

router.get("/", obtenerLugares);
router.get("/:id", obtenerLugarPorId);
router.post("/", crearLugar);

module.exports = router;