const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "localup"
});

conexion.connect((error) => {
  if (error) {
    console.log("Error al conectar:", error);
  } else {
    console.log("Base de datos conectada correctamente");
  }
});

module.exports = conexion;