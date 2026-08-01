const pool = require("../config/db");

const obtenerFavoritos = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ mensaje: "Falta userId" });
    }

    const [favoritos] = await pool.query(
      `SELECT id_favorito AS id, id_usuario AS userId, id_lugar AS lugarId, fecha
       FROM favorito WHERE id_usuario = ?`,
      [userId]
    );

    res.json(favoritos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener favoritos" });
  }
};

const agregarFavorito = async (req, res) => {
  try {
    const { userId, lugarId } = req.body;

    if (!userId || !lugarId) {
      return res.status(400).json({ mensaje: "Faltan datos" });
    }

    const [existentes] = await pool.query(
      "SELECT id_favorito FROM favorito WHERE id_usuario = ? AND id_lugar = ?",
      [userId, lugarId]
    );

    if (existentes.length > 0) {
      return res.status(409).json({ mensaje: "Este lugar ya está en favoritos" });
    }

    await pool.query(
      "INSERT INTO favorito (id_usuario, id_lugar) VALUES (?, ?)",
      [userId, lugarId]
    );

    res.status(201).json({ mensaje: "Favorito agregado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al agregar favorito" });
  }
};

module.exports = {
  obtenerFavoritos,
  agregarFavorito
};