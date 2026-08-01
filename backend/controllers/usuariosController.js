const pool = require("../config/db");

const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ mensaje: "Faltan datos obligatorios" });
    }

    const [usuariosExistentes] = await pool.query(
      "SELECT id_usuario FROM usuario WHERE correo = ?",
      [email]
    );

    if (usuariosExistentes.length > 0) {
      return res.status(409).json({ mensaje: "El correo ya está registrado" });
    }

    const [resultado] = await pool.query(
      `INSERT INTO usuario (nombre, correo, contraseña, foto_perfil, ubicacion, rol, tipo_usuario)
       VALUES (?, ?, ?, '', '', 'usuario', 'cliente')`,
      [nombre, email, password]
    );

    const [usuarios] = await pool.query(
      `SELECT id_usuario AS id, nombre, correo, ubicacion, rol, tipo_usuario AS tipoUsuario, foto_perfil AS fotoPerfil
       FROM usuario WHERE id_usuario = ?`,
      [resultado.insertId]
    );

    res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      usuario: usuarios[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al registrar el usuario" });
  }
};

const iniciarSesion = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ mensaje: "Faltan datos obligatorios" });
    }

    const [usuarios] = await pool.query(
      `SELECT id_usuario AS id, nombre, correo, ubicacion, rol, tipo_usuario AS tipoUsuario, foto_perfil AS fotoPerfil
       FROM usuario WHERE correo = ? AND contraseña = ?`,
      [email, password]
    );

    if (usuarios.length === 0) {
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    res.json({
      mensaje: "Inicio de sesión exitoso",
      usuario: usuarios[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al iniciar sesión" });
  }
};

const obtenerUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const [usuarios] = await pool.query(
      `SELECT id_usuario AS id, nombre, correo, ubicacion, rol, tipo_usuario AS tipoUsuario, foto_perfil AS fotoPerfil
       FROM usuario WHERE id_usuario = ?`,
      [id]
    );

    if (usuarios.length === 0) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.json({ usuario: usuarios[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el usuario" });
  }
};

const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, ubicacion, descripcion, fotoPerfil } = req.body;

    await pool.query(
      `UPDATE usuario SET nombre = ?, ubicacion = ?, foto_perfil = ? WHERE id_usuario = ?`,
      [nombre, ubicacion, fotoPerfil || "", id]
    );

    const [usuarios] = await pool.query(
      `SELECT id_usuario AS id, nombre, correo, ubicacion, rol, tipo_usuario AS tipoUsuario, foto_perfil AS fotoPerfil
       FROM usuario WHERE id_usuario = ?`,
      [id]
    );

    res.json({
      mensaje: "Perfil actualizado",
      usuario: usuarios[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al actualizar el usuario" });
  }
};

module.exports = {
  registrarUsuario,
  iniciarSesion,
  obtenerUsuario,
  actualizarUsuario
};