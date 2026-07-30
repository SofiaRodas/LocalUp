const mysql = require("mysql2");
require("dotenv").config();

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

conexion.connect((error) => {

    if (error) {
        console.error("❌ Error al conectar MySQL");
        console.error(error);
        return;
    }

    console.log("✅ Base de datos conectada correctamente");

});

module.exports = conexion;