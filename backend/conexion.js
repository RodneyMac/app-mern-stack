const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mernstackdb');

const objBd = mongoose.connection;

objBd.on("connected", () => {
  console.log("Conexión exitosa a MongoDB");
})

objBd.on("error", () => {
  console.log("Error en la conexión MongoDB");
});

module.exports = mongoose;