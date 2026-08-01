const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "localup",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS favorito (
        id_favorito INT AUTO_INCREMENT PRIMARY KEY,
        id_usuario INT NOT NULL,
        id_lugar INT NOT NULL,
        fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
        UNIQUE KEY unique_usuario_lugar (id_usuario, id_lugar)
      )
    `);

    console.log("Base de datos conectada correctamente");
  } catch (error) {
    console.log("Error al conectar:", error);
  }
})();

module.exports = pool;