var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema(
    {
        email: {type: String, require: true, max: 100},
        nomeCompleto: {type: String, require: true, max: 150},
        senha: {type: String, require: true, max: 6}
    }
);

// Criando modelo a partir do Schema
var usuarioModel = mongoose.model('usuarios', usuarioSchema);

module.exports = usuarioModel;