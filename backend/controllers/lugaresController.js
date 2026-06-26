const obtenerLugares = (req, res) => {
  res.json([
    {
      id: 1,
      nombre: "Parque Principal",
      categoria: "Turismo"
    }
  ]);
};

const crearLugar = (req, res) => {
  res.json({ mensaje: "Lugar creado correctamente" });
};

module.exports = {
  obtenerLugares,
  crearLugar
};