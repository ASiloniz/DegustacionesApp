const mongoose = require('mongoose');
/*
MODELO DE Local:

Para insertar en el futuro degustaciones a la db, tenemos que especificar su modelo (NoSql => objeto JS)

*/
const localSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    local: String,
    review: String,
});

/*
------------------------------------------
CREACIÓN DEL MODELO:
------------------------------------------
Una vez definido el schema de nuestro objeto local, necesitamos generar su MODELO! ¿Qué es el modelo?

Es un objeto de MongoDB, que permite añadir a un Schema => constructores, modificadores, etc.

*/

module.exports = mongoose.model('Local', localSchema);

// SIEMPRE ES NECESARIO EXPORTAR PARA PODER ACCEDER DESDE OTROS FICHEROS EN NODE.JS
