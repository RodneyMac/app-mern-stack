const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schemaUsuario = new schema({
  nombre: String,
  email: String,
  idUsuario: String
});

const ModeloUsuario = mongoose.model("usuarios", schemaUsuario);
module.exports = router;

router.post("/agregarUsuario", (req, res) => {
  const nuevoUsuario = new ModeloUsuario({
    nombre: req.body.nombre,
    emial: req.body.email,
    idUsuario: req.body.idUsuario
  });

  nuevoUsuario.save(function(err) {
    if(!err) {
      res.send("Usuario agregado exitosamente");
    } else {
      res.send(err);
    }
  });
});

router.get("obtenerUsuarios", (req, res) => {
  ModeloUsuario.find({}, function(docs, err) {
    if(!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.get("/obtenerDatoUsuario", (req, res) => {
  ModeloUsuario.find({idUsuario: req.body.idUsuario}, function(docs, err) {
    if(!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/actualizarUsuario", (req, res) => {
  ModeloUsuario.findOneAndUpdate(
    {idUsuario: req.body.idUsuario},
    {
      nombre: req.body.nombre,
      email: req.body.email
    },
    (err) => {
      if(!err) {
        res.send("Usuario actualizado exitosamente");
      } else {
        res.send(err);
      }
    }
  );
});

router.post("/eliminarUsuario", (req, res) => {
  ModeloUsuario.findOneAndDelete({idUsuario: req.body.idUsuario}, (err) => {
    if(!err) {
      res.send("El usuario se ha eliminado exitosamente");
    } else {
      res.send(err);
    }
  });
});