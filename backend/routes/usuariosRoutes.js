const express = require("express");
const router = express.Router();

const {
  registrarUsuario,
  iniciarSesion,
  obtenerUsuario,
  actualizarUsuario
} = require("../controllers/usuariosController");

router.post("/registro", registrarUsuario);
router.post("/login", iniciarSesion);
router.get("/:id", obtenerUsuario);
router.put("/:id", actualizarUsuario);

module.exports = router;