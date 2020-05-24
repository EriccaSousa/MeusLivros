const exprees = require('express');
const router = exprees.Router();
const UsuarioService = require('../service/usuarioService');

router.post('/register', function (req, res, next) {
    UsuarioService.register(req, res);
});

router.get('/list', function (req, res, next) {
    UsuarioService.list(req, res);
});

router.put('/update/:email', function (req, res, next) {
    UsuarioService.update(req, res);
});

router.delete('/delete/:email', function (req, res, next) {
    UsuarioService.delete(req, res);
});

module.exports = router;