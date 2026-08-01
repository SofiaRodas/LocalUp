const pool = require("../config/db");

const obtenerLugares = async (req, res) => {
  try {
    const [lugares] = await pool.query(
      `SELECT id_lugar AS id, nombre_lugar AS nombre, categoria, descripcion, direccion, latitud, longitud, calificacion_promedio AS rating
       FROM lugar`
    );

    res.json(lugares);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener los lugares" });
  }
};

const obtenerLugarPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const [lugares] = await pool.query(
      `SELECT id_lugar AS id, nombre_lugar AS nombre, categoria, descripcion, direccion, latitud, longitud, calificacion_promedio AS rating
       FROM lugar WHERE id_lugar = ?`,
      [id]
    );

    if (lugares.length === 0) {
      return res.status(404).json({ mensaje: "Lugar no encontrado" });
    }

    res.json(lugares[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el lugar" });
  }
};

const crearLugar = async (req, res) => {
  try {
    const { nombre, categoria, descripcion, direccion } = req.body;

    const [resultado] = await pool.query(
      `INSERT INTO lugar (nombre_lugar, categoria, descripcion, direccion) VALUES (?, ?, ?, ?)`,
      [nombre, categoria, descripcion, direccion]
    );

    res.status(201).json({
      mensaje: "Lugar creado correctamente",
      id: resultado.insertId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el lugar" });
  }
};

module.exports = {
  obtenerLugares,
  obtenerLugarPorId,
  crearLugar
};