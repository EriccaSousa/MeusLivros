const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            require: true,
            max: 150
        },
        email: {
            type: String,
            unique: true,
            require: true,
            max: 100
        },
        senha: {
            type: String,
            require: true,
            max: 6,
            select: false //a senha não vem na busca
        }
    }
);

usuarioSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

// Criando modelo a partir do Schema
const usuarioModel = mongoose.model('usuarios', usuarioSchema);

module.exports = usuarioModel;