const express = require("express");
const router = express.Router();

const {
  obtenerResenas,
  crearResena
} = require("../controllers/resenasController");

router.get("/", obtenerResenas);
router.post("/", crearResena);

module.exports = router;