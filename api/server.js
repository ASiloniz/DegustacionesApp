'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');

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
let dirname = __dirname.slice(0, -3);
console.log(dirname);
console.log(path.join(dirname, 'uploads'));

//HACER UPLOADS PUBLICA
app.use('/uploads', express.static(path.join(dirname, 'uploads')));

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
      const response = {
        count: docs.length,
        degustaciones: docs.map(doc => {
          return {
            _id: doc._id,
            nombre: doc.nombre,
            local: doc.local,
            tipo: doc.tipo,
            pais: doc.pais,
            region: doc.region,
            size: doc.size,
            sabor: doc.sabor,
            img: doc.img,
            request: {
              type: 'GET',
              url: `http://localhost:5000/degustaciones/${doc._id}`
            }
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch( err => {
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
    img: `http://localhost:5000/${req.file.path}`
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

// ELIMINAR DEGUSTACION
app.delete('/degustaciones/:degustacionId', (req, res, next) => {
  const id = req.params.degustacionId;
  Degustacion.remove({_id: id})
  .exec()
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

// UPDATE DEGUSTACION:
app.patch('/degustaciones/:degustacionId', (req, res, next) => {
  const id = req.params.degustacionId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  Degustacion.update({_id: id}, {
    $set: {
      updateOps
    }
  })
  .exec()
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

// USER SIGNUP!!!

const User = require('../mongodb/models/user');

// Utilizaremos el middleware bcrypt para hashear las contraseñas!

app.post('/signup', upload.single('inputSignUpFotoDePerfil'), (req, res, next) => {
  //Check que el user no había sido creado previamente
  User.find({ email: req.body.email })
  .exec()
  .then(user => {
    if (user.length >= 1) {
      return res.status(422).json({
        message: 'Mail exists!'
      });
    }
    else{
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          return res.status(500).json({
            error: err
          });
        } else{
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            idUsuario: req.body.idUsuario,
            email: req.body.email,
            password: hash,
            nombre: req.body.name,
            apellidos: req.body.apellidos,
            dateOfBirth: req.body.dateOfBirth,
            nacionalidad: req.body.nacionalidad,
            region: req.body.region,
            descripcion: req.body.descripcion,
            inputSignUpFotoDePerfil: `http://localhost:5000/${req.file.path}`
          });
          user
            .save()
            .then(result => {
              console.log(`USER CREATION=>SUCCESFUL!`);
              res.status(201).json(result);
            })
            .catch(err => {
              console.log(`USER CREATION ERROR!`)
              res.status(500).json({
                error: err
              });
            });
        }
      });
    }
  })
});

app.delete('/:userId', (req, res, next) => {
  const id = req.params.userId;
  User.remove({_id: id}) 
  .exec()
  .then(result => {
    console.log(`USER DELETED => SUCCESSFUL!`);
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(`USER DELETED => ERROR`);
    res.status(500).json({
      error: err
    });
  });
});

const PORT = 5000;

app.listen(PORT);
console.log('API Running on PORT:' + PORT + ': ');