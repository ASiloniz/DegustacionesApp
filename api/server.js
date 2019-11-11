'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, res, callback) {
    callback(null, './uploads/');
  },
  filename: function(req, file, callback){
    callback(null, file.originalname);
  }
});

const fileFilter = (req, file, callback) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    callback(null, true);
  }
  else{
    callback(null, false);
  }
};

const upload = multer({
  storage: storage, 
  limits:{
    fileSize: 1024*1024*5
  },
  fileFilter
});
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


/*
DB NoSQL con MongoDB:
Para el modelaje de los modelos de la DB utilizaremos la herramienta mongoose.
*/
const mongoose = require('mongoose');

/* CREACIÓN DE LA DB:
El nombre de nuestra DB es destapais.
mongoose.connect('mongodb://localhost:27017/NOMBRE_DB',{useNewUrlParser: true});
*/
mongoose.connect('mongodb://localhost:27017/destapais',
  {
    useNewUrlParser: true
  }
);

/* ¿CÓMO ACCEDO A LA INFORMACIÓN DE LA DB?

Para ello hemos creado este fichero, server.js.
Server.js se encarga de proveer en un API la información solicitada a la DB.
*/


// Modelo del documento Degustación que se almacenará en la DB.
const Degustacion = require('../mongodb/models/degustacion');

// MONGODB CRUD FUNCTIONS

/* GET todas las degustaciones:
* GET => localhost:5000/degustaciones
*/

app.get(`/degustaciones`, (req, res) => {
  Degustacion.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
});

// POST A DEGUSTACION
app.post(`/degustaciones`, upload.single('inputFotoDePerfil'), (req, res) => {
  console.log(`req.file`);
  console.log(req.file);
  const degustacion = new Degustacion({
    _id: mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    local: req.body.local,
    tipo: req.body.tipo,
    pais: req.body.pais,
    region: req.body.region,
    size: req.body.size,
    sabor: req.body.sabor,
    img: req.file.path
  });

  // SAVE IN DB!
  degustacion
    .save()
    .then(result => {
      console.log(`Saved Degustacion in DB RESULT:${result}`);
      res.status(201).json({
        message:'Handling POST requests to /api/degustaciones',
        createdDegustacion: degustacion
      });
    })
    .catch(err => {
      console.log(`Saved Degustacion in DB ERROR:${err}`);
      res.status(500).json({
        error: err
      });
    });

});

// GET una degustación por ID (interesante para el futuro ;) )
app.get(`/degustaciones/:degustacionId`, (req, res) => {
  const id = req.params.degustacionId;
  console.log(`id:${id}`);
  Degustacion.findById(id)
    .exec()
    .then(doc => {
      console.log(`GET DOCUMENT BY ID =>${doc}`);
      if(doc){
        res.status(200).json(doc);
      } else{
        res.status(404).json({
          message: `No existe degustacion con el ID:${id}`
        });
      }
    })
    .catch(err => {
      console.log(`GET DOCUMENT BY ID ERROR =>${err}`);
      res.status(500).json({
        error: err
      });
    });
});

const PORT = 5000;

app.listen(PORT);
console.log('API Running on PORT:' + PORT + ': ');