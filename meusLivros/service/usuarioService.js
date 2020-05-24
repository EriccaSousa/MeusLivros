const UsuarioModel = require('../models/usuarioModel');

class UsuarioService {

    static register(req, res) {
        UsuarioModel.create(req.body)
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
}

module.exports = UsuarioService;