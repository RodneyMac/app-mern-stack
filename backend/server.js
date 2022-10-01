const express = require("express");
const app = express();

const archivoBD = require("./conexion");

const rutaUsuario = require("./rutas/usuario");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: "true"}));

app.use("/api/usuario", rutaUsuario);

app.get("/", (req, res) => {
  res.send("Bienvenido al servidor Backend");
});

app.listen(5000, function() {
  console.log("Servidor corriendo exitosamente");
});