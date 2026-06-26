const obtenerEventos = (req, res) => {
  res.json({ mensaje: "Lista de eventos" });
};

const crearEvento = (req, res) => {
  res.json({ mensaje: "Evento creado correctamente" });
};

module.exports = {
  obtenerEventos,
  crearEvento
};