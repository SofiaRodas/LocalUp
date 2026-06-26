const obtenerFavoritos = (req, res) => {
  res.json({ mensaje: "Lista de favoritos" });
};

const agregarFavorito = (req, res) => {
  res.json({ mensaje: "Favorito agregado" });
};

module.exports = {
  obtenerFavoritos,
  agregarFavorito
};