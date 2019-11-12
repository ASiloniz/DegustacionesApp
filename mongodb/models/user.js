const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idUsuario: String,
    email: { type: String, unique: true },
    password: String,
    nombre: String,
    apellidos: String,
    dateOfBirth: Date,
    nacionalidad: String,
    region: String,
    descripcion: String,
    inputSignUpFotoDePerfil: String
});

module.exports = mongoose.model('User', userSchema);