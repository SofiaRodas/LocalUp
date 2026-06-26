const registrarUsuario = (req, res) => {
  res.json({ mensaje: "Usuario registrado correctamente" });
};

const iniciarSesion = (req, res) => {
  res.json({ mensaje: "Inicio de sesión exitoso" });
};

module.exports = {
  registrarUsuario,
  iniciarSesion
};