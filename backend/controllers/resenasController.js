const obtenerResenas = (req, res) => {
  res.json({ mensaje: "Lista de reseñas" });
};

const crearResena = (req, res) => {
  res.json({ mensaje: "Reseña creada correctamente" });
};

module.exports = {
  obtenerResenas,
  crearResena
};