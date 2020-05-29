const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

const UsuarioModel = require('../models/usuarioModel');

class UsuarioService {

    //Finalizado
    static gerarToken(params = {}) {
        return jwt.sign(params, authConfig.secret, {
            expiresIn: 86400,
        });

    }

    //Finalizado
    static async register(req, res) {
        const { email } = req.body;

        try {
            if (await UsuarioModel.findOne({ email })) {
                return res.status(400).send({ error: 'Email já existe no sistema.' });
            }

            const usuario = await UsuarioModel.create(req.body);

            usuario.senha = undefined;

            return res.send({
                usuario,
                token: this.gerarToken({ _id: usuario._id }),
            });
        } catch (error) {
            return res.status(400).send({ error: 'Falha no registro.' });
        }

    }

    static list(req, res) {
        UsuarioModel.find()
            .then(
                (usuarios) => {
                    res.status(201).json(usuarios);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }

    static findByEmail(req, res) {
        UsuarioModel.findOne(req.params.email)
            .then(
                (usuarios) => {
                    res.status(201).json(usuarios);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }

    static update(req, res) {
        UsuarioModel.findOneAndUpdate(req.params.email, req.body, { 'new': true })
            .then(
                (usuario) => {
                    res.status(201).json(usuario);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }

    static delete(req, res) {
        UsuarioModel.findOneAndRemove(req.params.email)
            .then(
                (usuario) => {
                    res.status(201).json(usuario);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }

    //Finalizado
    static async authenticate(req, res) {
        const { email, senha } = req.body;

        const usuario = await UsuarioModel.findOne({ email }).select('+senha');

        if (!usuario) {
            return res.status(400).send({ error: 'Usuário não encontrado.' });
        }

        if (!await bcrypt.compare(senha, usuario.senha)) {
            return res.status(400).send({ error: 'Senha inválida!' });
        }

        usuario.senha = undefined;

        return res.send({
            usuario,
            token: this.gerarToken({ _id: usuario._id }),
        });

    }
}

module.exports = UsuarioService;